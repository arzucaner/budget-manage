var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Monthly Expenses',
                data: [200, 300, 450, 250, 500],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Monthly Income',
                data: [500, 600, 550, 700, 800],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Amount ($)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Month'
                }
            }
        },
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function (context) {
                        return '$' + context.parsed.y;
                    }
                }
            },
            title: {
                display: true,
                text: 'Monthly Budget Overview'
            }
        }
    }
});
