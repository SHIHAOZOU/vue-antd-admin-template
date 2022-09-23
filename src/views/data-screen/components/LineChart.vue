<template>
	<div ref="lineChart" style="width: 100%; height: 90%"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
const lineChart = ref<HTMLElement | null>(null);
onMounted(() => {
	getLineChart();
});
const getLineChart = () => {
	var chartDom = lineChart.value;
	console.log(chartDom);
	var myChart = echarts.init(chartDom as HTMLElement);
	var option;

	option = {
		color: ["#ffd285", "#ff733f", "#ec4863"],

		title: [
			{
				left: "1%",
				top: "6%",
				textStyle: {
					color: "#fff",
				},
			},
			{
				left: "83%",
				top: "6%",
				textAlign: "center",
				textStyle: {
					color: "#fff",
				},
			},
		],
		tooltip: {
			trigger: "axis",
		},
		legend: {
			x: 300,
			top: "7%",
			textStyle: {
				color: "#ffd285",
			},
			data: ["点星星", "点月亮", "点太阳"],
		},
		grid: {
			left: "1%",
			right: "35%",
			top: "16%",
			bottom: "6%",
			containLabel: true,
		},
		toolbox: {
			show: false,
			feature: {
				saveAsImage: {},
			},
		},
		xAxis: {
			type: "category",
			axisLine: {
				lineStyle: {
					color: "#FF4500",
				},
			},
			axisTick: {
				show: false,
			},
			axisLabel: {
				textStyle: {
					color: "#fff",
				},
			},
			boundaryGap: false,
			data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
		},
		yAxis: {
			axisLine: {
				lineStyle: {
					color: "#fff",
				},
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: "#fff",
				},
			},
			axisTick: {
				show: false,
			},
			axisLabel: {
				textStyle: {
					color: "#fff",
				},
			},
			type: "value",
		},
		series: [
			{
				name: "点星星",
				smooth: true,
				type: "line",
				symbolSize: 8,
				symbol: "circle",
				data: [90, 50, 39, 50, 120, 82, 80],
			},
			{
				name: "点月亮",
				smooth: true,
				type: "line",
				symbolSize: 8,
				symbol: "circle",
				data: [70, 50, 50, 87, 90, 80, 70],
			},
			{
				name: "点太阳",
				smooth: true,
				type: "line",
				symbolSize: 8,
				symbol: "circle",
				data: [290, 200, 20, 132, 15, 200, 90],
			},
			{
				type: "pie",
				center: ["83%", "33%"],
				radius: ["25%", "30%"],
				label: {
					normal: {
						position: "center",
					},
				},
				data: [
					{
						value: 335,
						name: "用户来源分析",
						itemStyle: {
							normal: {
								color: "#ffd285",
							},
						},
						label: {
							normal: {
								formatter: "{d} %",
								textStyle: {
									color: "#ffd285",
									fontSize: 20,
								},
							},
						},
					},
					{
						value: 180,
						name: "占位",
						tooltip: {
							show: false,
						},
						itemStyle: {
							normal: {
								color: "#87CEFA",
							},
						},
						label: {
							normal: {
								textStyle: {
									color: "#ffd285",
								},
								formatter: "\n手机号注册",
							},
						},
					},
				],
			},

			{
				type: "pie",
				center: ["83%", "72%"],
				radius: ["25%", "30%"],
				label: {
					normal: {
						position: "center",
					},
				},
				data: [
					{
						value: 435,
						name: "用户来源分析",
						itemStyle: {
							normal: {
								color: "#ff733f",
							},
						},
						label: {
							normal: {
								formatter: "{d} %",
								textStyle: {
									color: "#ff733f",
									fontSize: 20,
								},
							},
						},
					},
					{
						value: 100,
						name: "占位",
						tooltip: {
							show: false,
						},
						itemStyle: {
							normal: {
								color: "#87CEFA",
							},
						},
						label: {
							normal: {
								textStyle: {
									color: "#FF4500",
								},
								formatter: "\n三方快捷登陆",
							},
						},
					},
				],
			},
		],
	};

	option && myChart.setOption(option);
};
</script>

<style lang="scss" scoped></style>
