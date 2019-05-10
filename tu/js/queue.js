var myChart = echarts.init(document.getElementById('queue'));

var data = {
    legendData: ['有排队', '无排队'],
    seriesData: [
        {
            name: '有排队',
            value: 3403200,
        },
        {
            name: '无排队',
            value: 81704138
        }
    ]
}

option = {
    title: {
        text: '资源访问排队占比',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: data.legendData,

        selected: data.selected
    },
    series: [{
        name: '数量',
        type: 'pie',
        radius: '55%',
        center: ['40%', '50%'],
        data: data.seriesData,
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};
myChart.setOption(option);