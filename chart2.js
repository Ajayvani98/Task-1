// chart2.js

const doughnutCtx = document.getElementById('doughnut').getContext('2d');

new Chart(doughnutCtx, {
    type: 'doughnut',
    data: {
        labels: ['Home Loan', 'Auto Loan', 'Personal Loan'],
        datasets: [{
            label: 'Loan Types',
            data: [45, 25, 30], // Change these values as needed
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            },
            tooltip: {
                enabled: true
            }
        }
    }
});
