const ctx = document.getElementById('lineChart').getContext('2d');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Privileges Used',
            data: [12, 19, 3, 5, 2, 3, 7],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false,
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
