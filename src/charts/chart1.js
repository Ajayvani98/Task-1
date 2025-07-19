// src/charts/chart1.js
import { Chart } from 'chart.js';

let lineChartInstance = null;

export const setupLineChart = () => {
  const ctx = document.getElementById('lineChart');
  if (!ctx) return;

  // Destroy if already exists
  if (lineChartInstance) {
    lineChartInstance.destroy();
  }

  lineChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Privileges Used',
        data: [5, 9, 7, 11, 6, 8],
        borderColor: 'rgba(54, 162, 235, 1)',
        tension: 0.4,
        fill: false,
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Monthly Privileges Usage'
        }
      }
    }
  });
};
