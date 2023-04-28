<template>
    <div class="three">
        <h2>库存统计</h2>
        <div ref="chart" class="three-chart">

        </div>
    </div>
</template>

<script>
import { inject, onMounted, ref } from 'vue';

export default {
    setup() {
        const echarts = inject("echarts");
        const axios = inject("axios");

        const chart = ref(null);

        onMounted(() => {
            axios.get("/three/data").then(res => {
                const chartData = res.data.chartData.chartData;

                const threeChart = echarts.init(chart.value);
                threeChart.setOption({
                    legend: {
                        top: "bottom"
                    },
                    tooltip: {
                        show: true
                    },
                    series: {
                        type: "pie",
                        data: chartData,
                        radius: [10, 100],
                        center: ["50%", "45%"],
                        roseType: "area",
                        itemStyle: {
                            borderRadius: 10
                        }
                    }
                })
            })
        })

        return {
            chart
        }
    }
}
</script>

<style lang="scss" scoped>
.three-chart {
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