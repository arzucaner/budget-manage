var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar', 
    data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Monthly Expenses',
            data: [200, 300, 450, 250, 500], 
            backgroundColor: 'rgba(75, 192, 192, 0.2)', 
            borderColor: 'rgba(75, 192, 192, 1)', 
            borderWidth: 1 
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true 
            }
        }
    }
});
