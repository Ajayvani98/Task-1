// components/Charts.jsx
import React, { useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import { setupLineChart } from '../charts/chart1';
import { setupDoughnutChart } from '../charts/chart2';
import '../styles/Charts.css';

// Register all Chart.js components
Chart.register(...registerables);

const Charts = () => {
  useEffect(() => {
    setupLineChart();
    setupDoughnutChart();
  }, []);

  return (
    <div className="charts">
      <div className="chart">
        <h2>My Privileges</h2>
        <canvas id="lineChart"></canvas>
      </div>
      <div className="chart">
        <h2>Loans</h2>
        <canvas id="doughnut"></canvas>
      </div>
    </div>
  );
};

export default Charts;
