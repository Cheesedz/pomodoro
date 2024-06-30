import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useSupabase } from '../SupabaseContext';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ user }) => {
  const [currentUser, setCurrentUser] = useState(user);
  const [focusHours, setFocusHours] = useState([]);
  const [dates, setDates] = useState([]);
  const [totalHour, setTotalHour] = useState(0);

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Focus Hours',
        data: focusHours,
        backgroundColor: 'rgba(255, 255, 255, 255)',
        borderColor: 'rgba(255, 255, 255, 255)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,  
    aspectRatio: 2,  
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Focus Hours Per Week',
      },
    },
  };

  const supabase = useSupabase()
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('fetch_pomodoro')
        .select()
        .eq('belong_to', currentUser)
        .limit(7)

      if (error) {
        console.error('error', error)
      } else {
        const hours = data.map(item => item.pomodoro_count / 2);
        const dateLabels = data.map(item => new Date(item.created_at).toLocaleDateString());

        setTotalHour(hours.reduce((accumulator, currentValue) => accumulator + currentValue, 0))
        setFocusHours(hours);
        setDates(dateLabels);
      }
    }

    fetchData();
  }, [supabase, currentUser]);

  return <>
    <Bar data={data} options={options} />
    <div className='title-container'>
        <div className='text'>Total Hour</div>
        <div className='line'></div>
    </div>
    <div className='text'>Total: {totalHour} Hours</div>
    <div className='text'>Average focus hours: {(totalHour / dates.length).toFixed(2)} Hour/Day</div>
  </>
};

export default BarChart;
