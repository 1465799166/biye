var myChart = echarts.init(document.getElementById('tcp'));

        var data = {
            legendData: ['有TCP', '无TCP'],
            seriesData: [
                {
                    name: '有TCP',
                    value: 3458375,
                },
                {
                    name: '无TCP',
                    value: 85102900
                }
            ]
        }

        option = {
            title: {
                text: '有无tcp占比排队占比',
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