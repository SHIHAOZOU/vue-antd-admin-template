<template>
	<div class="card">
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.card {
	position: relative;
	box-sizing: border-box;
	width: 500px;
	height: 395px;
	margin-top: 30px;
	padding: 20px;
	background: url("@/assets/card.gif") no-repeat;
	background-size: 100%;
}
.card::before {
	position: absolute;
	display: inline-block;
	content: "";
	left: 68px;
	top: -20px;
	width: 350px;
	height: 55px;
	background: url("@/assets/card-title.png") no-repeat;
	background-size: 100%;
}
</style>
