import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useSupabase } from '../SupabaseContext';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ user }) => {
  const [currentUser, setCurrentUser] = useState(user);
  const data = {
    labels: ['Mondy', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Focus Hours',
        data: [12, 19, 3, 5, 2, 3, 7],
        backgroundColor: 'rgba(255, 255, 255, 255)',
        borderColor: 'rgba(255, 255, 255, 255)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
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
  useEffect(() => async () => {
    const { count, error } = await supabase
      .from('pomodoro')
      .select()
      // .eq('pomodoro.belong_to', currentUser)
    if (error) {
      console.error('error', error)
    } else {
      console.log('count', count)
    }
  });

  return <Bar data={data} options={options} />;
};

export default BarChart;
