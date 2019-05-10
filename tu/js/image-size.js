    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('image-size'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '图片类型和图片大小关系（KB）'
        },
        tooltip: {},
        legend: {
            data:['资源大小']
        },
        xAxis: {
            data: ['jpg', 'png', 'webP']
        },
        yAxis: {},
        series: [{
            name: '文件大小',
            type: 'bar',
            data: [239, 156, 139]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);