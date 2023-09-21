var ctx = document.getElementById('myChart').getContext('2d');

var data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            label: 'Food',
            data: [50, 70, 60, 80, 75],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        },
        {
            label: 'Housing',
            data: [300, 350, 320, 310, 330],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        },
        {
            label: 'Entertainment',
            data: [100, 120, 130, 110, 150],
            backgroundColor: 'rgba(255, 205, 86, 0.2)',
            borderColor: 'rgba(255, 205, 86, 1)',
            borderWidth: 1
        }
    ]
};

var annotations = [
    {
        type: 'line',
        mode: 'vertical',
        scaleID: 'x',
        value: 'March',
        borderColor: 'gray',
        borderWidth: 1,
        label: {
            enabled: true,
            content: 'Özel Olay'
        }
    },
    {
        type: 'line',
        mode: 'vertical',
        scaleID: 'x',
        value: 'May',
        borderColor: 'gray',
        borderWidth: 1,
        label: {
            enabled: true,
            content: 'Başka Bir Olay'
        }
    }
];

var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
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
            },

            annotation: {
                annotations: annotations
            }
        }
    }
});
