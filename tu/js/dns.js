var myChart = echarts.init(document.getElementById('dns'));

        var data = {
            legendData: ['有dns', '无dns'],
            seriesData: [
                {
                    name: '有dns',
                    value: 2707150,
                },
                {
                    name: '无dns',
                    value: 82400188
                }
            ]
        }

        option = {
            title: {
                text: '资源访问dns占比',
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