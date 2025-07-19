// src/charts/chart2.js
import { Chart } from 'chart.js';

let doughnutChartInstance = null;

export const setupDoughnutChart = () => {
  const ctx = document.getElementById('doughnut');
  if (!ctx) return;

  if (doughnutChartInstance) {
    doughnutChartInstance.destroy();
  }

  doughnutChartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Home Loan', 'Car Loan', 'Personal Loan'],
      datasets: [{
        label: 'Loan Types',
        data: [400000, 150000, 100000],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Loan Distribution'
        }
      }
    }
  });
};
