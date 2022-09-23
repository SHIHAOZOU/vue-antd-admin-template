<template>
	<div ref="pieChart" style="width: 100%; height: 100%"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import * as echarts from "echarts";
const pieChart = ref<HTMLElement | null>(null);
const getPieChart = () => {
	var chartDom = pieChart.value;
	console.log(chartDom);
	var myChart = echarts.init(chartDom as HTMLElement);
	var option;

	option = {
		tooltip: {
			trigger: "item",
		},
		legend: {
			top: "5%",
			left: "center",
			textStyle: {
				color: "#fff",
				fontSize: 12,
			},
		},
		series: [
			{
				type: "pie",
				radius: ["40%", "70%"],
				avoidLabelOverlap: true,
				itemStyle: {
					borderRadius: 10,
					borderWidth: 2,
				},
				emphasis: {
					label: {
						show: true,
						fontSize: "40",
						fontWeight: "bold",
					},
				},
				labelLine: {
					show: true,
				},
				data: [
					{ value: 1048, name: "哈哈" },
					{ value: 735, name: "呵呵" },
					{ value: 580, name: "嘻嘻" },
					{ value: 484, name: "呜呜" },
					{ value: 300, name: "啦啦" },
				],
			},
		],
	};

	option && myChart.setOption(option);
};
onMounted(() => {
	getPieChart();
});
</script>

<style lang="scss" scoped></style>
