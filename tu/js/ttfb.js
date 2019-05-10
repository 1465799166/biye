var myChart = echarts.init(document.getElementById('ttfb1'));

var option = {
    title: {
        text: 'TTFB与网络状况的关系'
    },
    tooltip: {},
    legend: {
        data:['耗时']
    },
    xAxis: {
        data: ['4g', 'fast3g', 'slow3g']
    },
    yAxis: {},
    series: [{
        name: '耗时',
        type: 'bar',
        data: [5.68, 565.29, 2078.72]
    }]
};

myChart.setOption(option);

var myChart = echarts.init(document.getElementById('ttfb2'));

var option = {
title: {
    text: 'Content Download与网络状况的关系'
},
tooltip: {},
legend: {
    data:['耗时']
},
xAxis: {
    data: ['4g', 'fast3g', 'slow3g']
},
yAxis: {},
series: [{
    name: '耗时',
    type: 'bar',
    data: [4.07, 135.59, 585.96]
}]
};

myChart.setOption(option);