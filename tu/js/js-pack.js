// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('js-pack1'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: 'js打包优化前后资源大小比较（KB）'
    },
    tooltip: {},
    legend: {
        data:['资源大小']
    },
    xAxis: {
        data: ['打包优化前-整体', '打包优化后-整体', '打包优化后-最大文件']
    },
    yAxis: {},
    series: [{
        name: '资源大小',
        type: 'bar',
        data: [279.34, 242.22, 166.64]
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('js-pack2'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: 'js打包优化前后首屏时间比较（KB）'
    },
    tooltip: {},
    legend: {
        data:['首屏时间']
    },
    xAxis: {
        data: ['打包优化前', '打包优化后']
    },
    yAxis: {},
    series: [{
        name: '首屏时间',
        type: 'bar',
        data: [76, 47]
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);