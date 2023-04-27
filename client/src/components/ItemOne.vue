<template>
    <div class="one">
        <h2>销售总量</h2>
        <div ref="chart" class="one-chart">
        </div>
    </div>
</template>

<script>
import { inject, onMounted, ref, reactive } from 'vue';

export default {
    setup() {
        const echarts = inject('echarts');
        const axios = inject('axios');
        const chart = ref(null);

        let xData = reactive([]);
        let yData = reactive([]);

        async function setData(chartData) {
            xData = chartData.chartData.map(item => item.title);
            yData = chartData.chartData.map(item => item.num);
        }

        onMounted(() => {
            console.log(chart);
            const oneChart = echarts.init(chart.value);

            axios.get('one/data').then(res => {
                setData(res.data.chartData);

                oneChart.setOption({
                    grid: {
                        top: "3%",
                        left: "1%",
                        right: "6%",
                        bottom: "3%",
                        containLabel: true
                    },
                    xAxis: {
                        type: "value",
                        axisLine: {
                            lineStyle: {
                                color: "#fff"
                            }
                        }
                    },
                    yAxis: {
                        type: "category",
                        data: xData,
                        axisLine: {
                            lineStyle: {
                                color: "#fff"
                            }
                        }
                    },
                    series: [
                        {
                            type: "bar",
                            data: yData,
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                        {
                                            offset: 0,
                                            color: "#005eaa"
                                        },
                                        {
                                            offset: 0.5,
                                            color: "#339ca8"
                                        },
                                        {
                                            offset: 1,
                                            color: "#cda819"
                                        }
                                    ])
                                }
                            }
                        }
                    ]
                })
            })
        })

        return {
            chart,
            xData,
            yData,
        }
    }
}
</script>

<style lang="scss" scoped>
.one-chart {
    height: 4.3rem;
}

h2 {
    height: .6rem;
    color: #fff;
    line-height: .6rem;
    font-size: .25rem;
    text-align: center;
}
</style>