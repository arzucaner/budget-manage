var ctx = document.getElementById('showChart').getContext('2d');
window.onload = function () {
    var canvas = document.getElementById('showChart');
    if (canvas && canvas.getContext) {
        var ctx = canvas.getContext('2d');

    } else {
        console.error('Cannot find canvas or getContext method');
    }
};

var data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            label: 'Food',
            data: [50, 70, 60, 80, 75],
            backgroundColor: 'rgba(0, 100, 0, 0.4)',
            borderColor: 'rgba(0, 100, 0, 1)',
            borderWidth: 1
        },
        {
            label: 'Housing',
            data: [300, 350, 320, 310, 330],
            backgroundColor: 'rgba(0, 0, 128, 0.4)',
            borderColor: 'rgba(rgba(0, 0, 128, 1)',
            borderWidth: 1
        },
        {
            label: 'Entertainment',
            data: [100, 120, 130, 110, 150],
            backgroundColor: 'rgba(255, 69, 0, 0.4)',
            borderColor: 'rgba(255, 69, 0, 1)',
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
            content: 'Special Event'
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
            content: 'Another Event'
        }
    }
];

var showChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        animation: {
            duration: 1000,
            easing: 'easeOutBounce',
        },
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
        },
        interaction: {
            mode: 'index',
            intersect: false,
        },
    }
});