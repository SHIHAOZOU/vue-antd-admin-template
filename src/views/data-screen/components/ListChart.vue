<template>
	<div ref="listChart" style="width: 100%; height: 100%"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
const listChart = ref<HTMLElement | null>(null);
onMounted(() => {
	getListChart();
});
const getListChart = () => {
	var chartDom = listChart.value;
	console.log(chartDom);
	var myChart = echarts.init(chartDom as HTMLElement);
	var option;
	var myColor = [
		"#eb2100",
		"#eb3600",
		"#d0570e",
		"#d0a00e",
		"#34da62",
		"#00e9db",
	];
	option = {
		grid: {
			left: "11%",
			top: "12%",
			right: "0%",
			bottom: "8%",
			containLabel: true,
		},
		xAxis: [
			{
				show: false,
			},
		],
		yAxis: [
			{
				axisTick: "none",
				axisLine: "none",
				offset: "27",
				axisLabel: {
					textStyle: {
						color: "#ffffff",
						fontSize: "16",
					},
				},
				data: [
					"南昌转运中心",
					"广州转运中心",
					"杭州转运中心",
					"宁夏转运中心",
					"兰州转运中心",
					"南宁转运中心",
				],
			},
			{
				axisTick: "none",
				axisLine: "none",
				axisLabel: {
					textStyle: {
						color: "#ffffff",
						fontSize: "16",
					},
				},
				data: ["10", "9", "8", "7", "6", "5"],
			},
			{
				name: "分拨延误TOP 10",
				nameGap: "50",
				nameTextStyle: {
					color: "#ffffff",
					fontSize: "16",
				},
				axisLine: {
					lineStyle: {
						color: "rgba(0,0,0,0)",
					},
				},
				data: [],
			},
		],
		series: [
			{
				name: "条",
				type: "bar",
				yAxisIndex: 0,
				data: [4, 13, 25, 29, 38, 44],
				label: {
					normal: {
						show: true,
						position: "right",
						textStyle: {
							color: "#ffffff",
							fontSize: "16",
						},
					},
				},
				barWidth: 12,
				itemStyle: {
					normal: {
						color: function (params) {
							var num = myColor.length;
							return myColor[params.dataIndex % num];
						},
					},
				},
				z: 2,
			},
			{
				name: "白框",
				type: "bar",
				yAxisIndex: 1,
				barGap: "-100%",
				data: [99, 99.5, 99.5, 99.5, 99.5, 99.5],
				barWidth: 20,
				itemStyle: {
					normal: {
						color: "#0e2147",
						barBorderRadius: 5,
					},
				},
				z: 1,
			},
			{
				name: "外框",
				type: "bar",
				yAxisIndex: 2,
				barGap: "-100%",
				data: [100, 100, 100, 100, 100, 100],
				itemStyle: {
					normal: {
						color: function (params) {
							var num = myColor.length;
							return myColor[params.dataIndex % num];
						},
						barBorderRadius: 5,
					},
				},
				z: 0,
			},
			{
				name: "外圆",
				type: "scatter",
				hoverAnimation: false,
				data: [0, 0, 0, 0, 0, 0],
				yAxisIndex: 2,
				symbolSize: 35,
				itemStyle: {
					normal: {
						color: function (params) {
							var num = myColor.length;
							return myColor[params.dataIndex % num];
						},
						opacity: 1,
					},
				},
				z: 2,
			},
		],
	};

	option && myChart.setOption(option);
};
</script>

<style lang="scss" scoped></style>
