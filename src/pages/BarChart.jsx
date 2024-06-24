import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
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

  return <Bar data={data} options={options} />;
};

export default BarChart;
