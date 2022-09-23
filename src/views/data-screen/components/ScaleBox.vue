<template>
	<div>
		<div class="header">
			<div class="header-left">
				<span>{{ time }}</span>
			</div>
			<div class="header-title">
				<h1>数据大屏基础模板</h1>
			</div>
			<div class="header-right"></div>
		</div>
		<div class="main">
			<div class="main-left">
				<DataScreenCard>
					<h2>饼图</h2>
					<PieChart></PieChart>
				</DataScreenCard>
				<DataScreenCard>
					<h2>仪表图</h2>
					<DashboardChart></DashboardChart>
				</DataScreenCard>
			</div>
			<div class="main-center">
				<MapChart></MapChart>
			</div>
			<div class="main-right">
				<DataScreenCard>
					<h2>列表图</h2>
					<ListChart></ListChart>
				</DataScreenCard>
				<DataScreenCard>
					<h2>折线图</h2>
					<LineChart></LineChart>
				</DataScreenCard>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import PieChart from "./PieChart.vue";
import DataScreenCard from "@/components/dataScreen/DataScreenCard.vue";
import DashboardChart from "./DashboardChart.vue";
import ListChart from "./ListChart.vue";
import LineChart from "./LineChart.vue";
import MapChart from "./MapChart.vue";
const time = ref<string | null>(null);
onMounted(() => {
	getTime();
});
const getTime = () => {
	setInterval(() => {
		let date = new Date();
		let YY = date.getFullYear();
		let MM = date.getMonth() + 1;
		let DD = date.getDate();
		let hh = date.getHours();
		let mm = date.getMinutes().toString().padStart(2, "0");
		let ss = date.getSeconds().toString().padStart(2, "0");
		time.value = `${YY}-${MM}-${DD} ${hh}:${mm}:${ss}`;
	}, 1000);
};
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	height: 88px;
	color: #fff;
	// background-color: pink;
	.header-left,
	.header-right {
		// flex:1;
		// background-color: red;
		width: 400px;
	}
	.header-left {
		line-height: 88px;
		text-align: center;
		letter-spacing: 2px;
		font-size: 24px;
	}
	.header-title {
		flex: auto;
		background: url(@/assets/title.gif) no-repeat;
		background-size: 100%;
		h1 {
			color: #fff;
			text-align: center;
			font-weight: normal;
			font-size: 50px;
		}
	}
}
// main 部分
.main {
	display: flex;
	height: 992px;
	// background-color: pink;
	.main-left,
	.main-right {
		width: 500px;
		// background-color: #000;
	}
	.main-center {
		flex: auto;
	}

	h2 {
		position: absolute;
		width: 89%;
		color: #fff;
		top: -8px;
		text-align: center;
	}
}
</style>
