var myChart = echarts.init(document.getElementById('web-cache'));

var option = {
    title: {
        text: '缓存策略与请求资源大小的关系（B）'
    },
    tooltip: {},
    legend: {
        data:['资源大小']
    },
    xAxis: {
        data: ['强缓存-内存', '强缓存-磁盘', '协商缓存']
    },
    yAxis: {},
    series: [{
        name: '响应体大小',
        type: 'bar',
        data: [0, 36, 191]
    }]
};

myChart.setOption(option);