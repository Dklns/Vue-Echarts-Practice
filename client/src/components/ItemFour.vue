<template>
    <div class="four">
        <h2>库存统计图</h2>
        <div ref="chart" class="four-chart">

        </div>
    </div>
</template>

<script>
import { inject, onMounted, ref } from 'vue'

export default {
    setup() {
        const echarts = inject('echarts');
        const axios = inject('axios');

        const chart = ref(null);

        onMounted(() => {
            const fourChart = echarts.init(chart.value);

            axios.get('four/data').then(res => {
                const data = res.data.chartData.chartData;

                const option = {
                    grid: {
                        left: '15%',
                        bottom: '10%',
                        containLabel: true
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {

                    },
                    xAxis: {
                        type: "category",
                        data: data.day,
                        axisLine: {
                            lineStyle: {
                                color: "#fff"
                            }
                        }
                    },
                    yAxis: {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: "#fff"
                            }
                        }
                    },
                    series: [
                        {
                            name: "服饰",
                            type: "bar",
                            data: data.num.Clothes,
                            stack: "total",
                            label: {
                                show: true
                            },
                            emphasis: {
                                focus: "series"
                            }
                        },
                        {
                            name: "数码",
                            type: "bar",
                            data: data.num.digit,
                            stack: "total",
                            label: {
                                show: true
                            },
                            emphasis: {
                                focus: "series"
                            }
                        },
                        {
                            name: "家电",
                            type: "bar",
                            data: data.num.Electrical,
                            stack: "total",
                            label: {
                                show: true
                            },
                            emphasis: {
                                focus: "series"
                            }
                        },
                        {
                            name: "家居",
                            type: "bar",
                            data: data.num.gear,
                            stack: "total",
                            label: {
                                show: true
                            },
                            emphasis: {
                                focus: "series"
                            }
                        },
                        {
                            name: "日化",
                            type: "bar",
                            data: data.num.Chemicals,
                            stack: "total",
                            label: {
                                show: true
                            },
                            emphasis: {
                                focus: "series"
                            }
                        }
                    ]
                }

                fourChart.setOption(option)
            })
        })

        return {
            chart,
            axios
        }
    }
}
</script>

<style scoped lang="scss">
.four-chart {
    height: 4.5rem;
}

h2 {
    height: .6rem;
    color: #fff;
    line-height: .6rem;
    font-size: .25rem;
    text-align: center;
}
</style>