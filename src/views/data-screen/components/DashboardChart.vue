<template>
	<div ref="dashboardChart" style="width: 100%; height: 100%"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
const dashboardChart = ref<HTMLElement | null>(null);
onMounted(() => {
	getDashboardChart();
});
const getDashboardChart = () => {
	var chartDom = dashboardChart.value;
	console.log(chartDom);
	var myChart = echarts.init(chartDom as HTMLElement);
	var option;

	option = {
		tooltip: {
			formatter: "{a} <br/>{b} : {c}%",
		},
		series: [
			{
				name: "Pressure",
				type: "gauge",
				detail: {
					formatter: "{value}",
				},
				data: [
					{
						value: 50,
						name: "SCORE",
					},
				],
			},
		],
	};

	option && myChart.setOption(option);
};
</script>

<style lang="scss" scoped></style>
