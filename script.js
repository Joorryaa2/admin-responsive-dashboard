

const body = document.querySelector("body"),
sidebar = body.querySelector(".sidebar"),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");

     



modeSwitch.addEventListener("click" , () => {
    body.classList.toggle("dark");

        if (body.classList.contains("dark")){
        modeText.innerText = "Light Mode"
        } else {
        modeText.innerText = "Dark Mode"
        }
});



//side bar
function showContent(contentId) {
    // Hide all content sections
    var contents = document.querySelectorAll('.content-section');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }

    // Show the selected content section
    document.getElementById(contentId).style.display = 'block';
}






//line chart
document.addEventListener('DOMContentLoaded', function() {
    // Define the data for each month
    var seriesData = {
        monthDataSeries1: {
            prices: [0, 200, 190, 450, 400, 500, 300], // Data points for each month
            dates: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01', '2022-06-01', '2022-07-01'] // Dates for each data point
        }
    };

    // Chart options with the provided data
    var options = {
        series: [{
            name: "STOCK ABC",
            data: seriesData.monthDataSeries1.prices
        }],
        chart: {
            type: 'area',
            height: 250,
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth' // Change 'straight' to 'smooth' for a more wavy line
        },
        title: {
            text: 'Ticket Overview',
            align: 'left'
        },
        labels: seriesData.monthDataSeries1.dates,
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            opposite: false,
            min: 0,
            max: 600,
            tickAmount: 6, // Adjust the number of ticks
            tickValues: [0, 100, 200, 300, 400, 500, 600], // Specify the desired tick values
            labels: {
                formatter: function(val) {
                    return val.toFixed(0); // Format the labels to remove decimals
                }
            }
        },
        legend: {
            horizontalAlign: 'left'
        }
    };

    // Initialize the chart
    var chart = new ApexCharts(document.querySelector("#line-chart"), options);
    chart.render();
});





//attachment
document.addEventListener("DOMContentLoaded", function() {
    var options = {
        series: [0, 0, 0, 0], // Initialize all series with 0 values
        chart: {
            type: 'donut',
        },
        legend: {
            show: false // Hide the legend
        },
        dataLabels: {
            enabled: false // Hide data labels (numbers)
        },
        colors: ['#37c3ee', '#f9a60a', '#f93a4c', '#2683fe'], // Array of desired colors
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: { // Legend options for smaller screens (can be omitted)
                    position: 'bottom'
                }
            }
        }]
    };

    var pieChart = new ApexCharts(document.querySelector("#pie-chart"), options);

    // Function to animate series gradually completing the circle
    function animateSeries(seriesData) {
        var total = seriesData.reduce((acc, val) => acc + val, 0); // Calculate the total of the series values
        var currentIndex = 0;
        var interval = setInterval(function() {
            options.series[currentIndex] = seriesData[currentIndex];
            pieChart.updateSeries(options.series);
            currentIndex++;
            if (currentIndex >= seriesData.length) {
                clearInterval(interval);
            }
        }, 400); // Adjust the interval time for the desired animation speed
    }

    // Render the chart initially
    pieChart.render();

    // Animate the series completing the circle
    animateSeries([55, 35, 23, 40]); // Provide the desired series data
});


//bar chart

var options = {
    series: [{
        name: 'Within One Day',
        data: [83, 44]
    }, {
        name: 'Within Two Days',
        data: [7, 39],
        color:'#56d2e8'
    }, {
        name: 'Within Four Days',
        data: [5, 11]
    }, {
        name: 'More Than Four Days',
        data: [4, 6]
    }],
    chart: {
        type: 'bar',
        height: 160,
        stacked: true,
        stackType: '100%'
    },
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '90%'// Adjust the percentage as per your preference
        }
    },
    stroke: {
        width: 1,
        colors: ['#fff']
    },
    title: {
        text: 'Response & Resolution Time'
    },
    xaxis: {
        categories: ['Response Time', 'Resolution Time']
    },
    
    tooltip: {
        y: {
            formatter: function(val) {
                return val + "K"
            }
        }
    },
    fill: {
        opacity: 1
    },
    legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
    }
};

var Bar_Chart = new ApexCharts(document.querySelector("#Bar_Chart"), options);
Bar_Chart.render();





  //   progress bar
        
;(function($) {
    'use strict'

    // Animated Prograssbar
    $("[progress-bar]").each(function () {
    $(this)
        .find(".progress-fill")
        .animate(
        {
            width: $(this).attr("data-percentage"),
        },
        2000
        );

    $(this)
        .find(".progress-number-mark")
        .animate(
        { left: $(this).attr("data-percentage") },
        {
            duration: 2000,
            step: function (now, fx) {
            var data = Math.round(now);
            $(this)
                .find(".percent")
                .html(data + "%");
            },
        }
        );
    });
})(jQuery)




//tickects section 

// Get all nav items
const navItems = document.querySelectorAll('.nav-item');
// Get all content sections
const contentSections = document.querySelectorAll('.content');

// Function to handle item selection
function handleSelection(event) {
    // Remove 'selected' class from all nav items
    navItems.forEach(item => {
        item.classList.remove('selected');
    });

    // Add 'selected' class to the clicked item
    event.target.classList.add('selected');

    // Hide all content sections
    contentSections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the corresponding content section based on data attribute
    const contentId = event.target.dataset.content + '-content';
    document.getElementById(contentId).style.display = 'block';
}

// Add click event listener to each nav item
navItems.forEach(item => {
    item.addEventListener('click', handleSelection);
});



// script.js
$(document).ready(function() {
    $('#addTicketButton').click(function() {
        $('.add-ticket-section').toggle();
    });
});
