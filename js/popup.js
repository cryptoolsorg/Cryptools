var lineChart;

function showChart() {
    var ctx = document.getElementById("container").getContext("2d");
    var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(91, 192, 222, 1)');
    gradient.addColorStop(1, 'rgba(91, 192, 222, 0)');
    var config = {
        type: 'line',
        labels: [0],
        data: {
            datasets: [{
                label: "Price",
                data: [0],
                backgroundColor: gradient,
                borderColor: 'rgb(91, 192, 222)'
            }]
        },
        options: {
            elements: {
                point: {
                    radius: 0
                }
            },
            legend: {
                display: false
            },
            tooltips: {
                mode: 'index',
                intersect: false,
                displayColors: false,
                callbacks: {
                    title: function(tooltipItems, data) {
                        let date = new Date(tooltipItems[0].xLabel);
                        var monthNames = [
                            "January", "February", "March",
                            "April", "May", "June", "July",
                            "August", "September", "October",
                            "November", "December"
                        ];
                        return date.getDate() + ' ' + monthNames[date.getMonth()] + ' ' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
                    },
                    label: function(tooltipItems, data) {
                        return "$" + tooltipItems.yLabel;
                    }
                }
            },
            scales: {
                xAxes: [{
                    type: 'time',
                    gridLines: {
                        display: false
                    },
                    time: {
                        displayFormats: {
                            second: 'H:mm',
                            minute: 'H:mm',
                            quarter: 'MMM YYYY'
                        }
                    },
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 7,
                        callback: function(value, index, values) {
                            if (values.length == index + 1)
                                return "";
                            return value;
                        }
                    }
                }],
                yAxes: [{
                    ticks: {
                        callback: function(value, index, values) {
                            return "$" + value.toFixed(2);
                        }
                    }
                }]
            },
        }
    };

    lineChart = new Chart(ctx, config);
    updateChart();
}

function updateChart() {
    $.getJSON('https://api.coinbase.com/v2/prices/' + $(".btn-primary").attr("id") + '-USD/historic?period=' + $(".btn-info").attr("id"), function(data) {
        var x = [];
        var y = [];
        for (let i = 0; i < data.data.prices.length; i++) {
            x[i] = new Date(data.data.prices[i].time);
            y[i] = parseFloat(data.data.prices[i].price);
        }
        lineChart.data.labels = x;
        lineChart.data.datasets[0].data = y;
        lineChart.update();
        $("#container").show();
    });
}

function updateCourse() {
    chrome.runtime.sendMessage({
        type: 'getPrices'
    }, function(response) {
        console.log(response);
        $("#BTC .price").text(response.BTC);
        $("#ETH .price").text(response.ETH);
        $("#LTC .price").text(response.LTC);
        $("#XRP .price").text(response.XRP);
        $("#DASH .price").text(response.DASH);
    });
}

showChart();

updateCourse();
setInterval(updateCourse, 5 * 60 * 1000);

$("[role='currency'] button").click(function() {
  
    $(".btn-primary").removeClass("btn-primary").addClass("btn-default");
    $(this).addClass("btn-primary");
    updateChart();
});

$("[role='timeline'] button").click(function() {
    if ($(this).hasClass("btn-info"))
        return;
    $(".btn-info").removeClass("btn-info").addClass("btn-default");
    $(this).addClass("btn-info");
    updateChart();
});







$("#anomaly_notify")[0].onclick = function(){
    if (Notification.permission !== "granted"){
        Notification.requestPermission().then(function(){
            if (Notification.permission !== "granted"){
                Materialize.toast('Permission not given!!', 4000)
                document.getElementById('anomaly_notify').checked = false;
            }
            else{
                document.getElementById('anomaly_notify').checked = true;
            }
            chrome.storage.sync.set({'anomaly_notify': document.getElementById('anomaly_notify').checked}, function() {});
        });
    }
    if (Notification.permission !== "granted"){
        document.getElementById('anomaly_notify').checked = false;  
        return;
    }
    chrome.storage.sync.set({'anomaly_notify': document.getElementById('anomaly_notify').checked}, function() {});
}

$("#pct_notify")[0].onclick = function(){
    if (Notification.permission !== "granted"){
        Notification.requestPermission().then(function(){
            if (Notification.permission !== "granted"){
                Materialize.toast('Permission not given!!', 4000)
                document.getElementById('pct_notify').checked = false;
            }
            else{
                document.getElementById('pct_notify').checked = true;
            }
            chrome.storage.sync.set({'pct_notify': document.getElementById('pct_notify').checked}, function() {});
        });
    }
    if (Notification.permission !== "granted"){
        document.getElementById('pct_notify').checked = false;  
        return;
    }
    chrome.storage.sync.set({'pct_notify': document.getElementById('pct_notify').checked}, function() {});
}

$("#pct_notify_val")[0].onclick = function(){
    chrome.storage.sync.set({'pct_notify_val': $("#pct_notify_val").val()}, function() {});
}

chrome.storage.sync.get('anomaly_notify', function(data) {
    if (Notification.permission == "granted"){
        if(data.hasOwnProperty('anomaly_notify')){
            document.getElementById('anomaly_notify').checked = data.anomaly_notify;
        }
    }
});

chrome.storage.sync.get('pct_notify', function(data) {
    if (Notification.permission == "granted"){
        if(data.hasOwnProperty('pct_notify')){
            document.getElementById('pct_notify').checked = data.pct_notify;
        }
    }
});

chrome.storage.sync.get('pct_notify_val', function(data) {
    if (Notification.permission == "granted"){
        if(data.hasOwnProperty('pct_notify_val')){
            $('#pct_notify_val').val(data.pct_notify_val);
        }
    }
});



