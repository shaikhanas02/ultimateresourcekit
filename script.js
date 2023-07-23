// Data for the stacked bar graph


const data = {
    labels: ['20', '', '25','','30','', '35','' , '40', '','60', '', '65'],
    datasets: [
        {
            label: 'Employer: K 73,500',
            backgroundColor: 'rgba(0, 0, 255, 1)',
            data: [25, 30, 40,45,50,55,60,65,70,75,80,85,95], // Example data for Category 1
        },
        {
            label: 'Employee: K 52,500',
            backgroundColor: 'rgba(38, 88, 255, 1)',
            data: [25, 30, 40,45,50,55,60,65,70,75,80,85,95], // Example data for Category 2
        },
        {
            label: 'Total Interest: K 244,313',
            backgroundColor: 'rgba(119, 146, 237, 1)',
            data: [30,35,50,55,60,65,70,75,80,85,90,95,105], // Example data for Category 3
        }
    ]
};

// Chart.js configuration
const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        scales: {
            x: {
                stacked: true,
                grid: {
                    display: false, // Hide x-axis grid lines
                },
            },
            y: {
                stacked: true,
                beginAtZero: true, // Set the scale to start from 0
                max: 300 ,
                ticks: {
                    stepSize:  + 100,
                    callback: function(value) {
                        return '$' + value ; 
                    },
                    grid: {
                        borderDash: [5, 5], // Make y-axis grid lines dotted with 5px dashes and 5px gaps
                    },
                }


            }
        }
    },
};

// Initialize the chart
var myChart = new Chart(document.getElementById('myChart'), config);

const data1 = {
    datasets: [{
        data: [78,22], // Customize the data values here (sums up to 100%)
        backgroundColor: ['#e0e0e0', '#ffffff'], 
        fontColor : ['black', 'white'],// Customize the background colors for the segments
        borderWidth: 0 // Set the border width of the segments to 0
    }]
};

// console.log(data1.datasets[0].data[0]) ;
const config1 = {
    type: 'doughnut',
    data: data1, 
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%', // Customize the size of the hole in the center (90% makes it a doughnut)
        plugins: { 
            legend: {
                display: false // Hide the legend
            },
            tooltip: {
                enabled: false // Disable tooltips
            },
    
        },
        animation: {
            duration: 2000, // Customize the animation duration in milliseconds
            easing: 'linear', // Set the animation easing function
        }
    },
};
document.getElementById('bar1').innerHTML = `${data1.datasets[0].data[0]}`;
var myCircularPercentageChart1 = new Chart(document.getElementById('myCircularPercentageChart1'), config1);

const data2 = {
    datasets: [{
        data: [95,5], // Customize the data values here (sums up to 100%)
        backgroundColor: ['#e0e0e0', '#ffffff'], 
        fontColor : ['black', 'white'],// Customize the background colors for the segments
        borderWidth: 0 // Set the border width of the segments to 0
    }]
};

const config2 = {
    type: 'doughnut',
    data: data2, 
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%', // Customize the size of the hole in the center (90% makes it a doughnut)
        plugins: { 
            legend: {
                display: false // Hide the legend
            },
            tooltip: {
                enabled: false // Disable tooltips
            },
    
        },
        animation: {
            duration: 2000, // Customize the animation duration in milliseconds
            easing: 'linear', // Set the animation easing function
        }
    },
};

document.getElementById('bar2').innerHTML = `${data2.datasets[0].data[0]}`;
var myCircularPercentageChart2 = new Chart(document.getElementById('myCircularPercentageChart2'), config2); 


const data3 = {
    datasets: [{
        data: [59,41], // Customize the data values here (sums up to 100%)
        backgroundColor: ['#e0e0e0', '#ffffff'], 
        fontColor : ['black', 'white'],// Customize the background colors for the segments
        borderWidth: 0 // Set the border width of the segments to 0
    }]
};

const config3 = {
    type: 'doughnut',
    data: data3, 
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%', // Customize the size of the hole in the center (90% makes it a doughnut)
        plugins: { 
            legend: {
                display: false // Hide the legend
            },
            tooltip: {
                enabled: false // Disable tooltips
            },
         
    
        },
        animation: {
            duration: 2000, // Customize the animation duration in milliseconds
            easing: 'linear', // Set the animation easing function
        }
    },
    // plugins: [ChartDataLabels] 
};

document.getElementById('bar3').innerHTML = `${data3.datasets[0].data[0]}`;
var myCircularPercentageChart3 = new Chart(document.getElementById('myCircularPercentageChart3'), config3); 

function range(e){
e.nextSibling.innerHTML = e.value ;
}