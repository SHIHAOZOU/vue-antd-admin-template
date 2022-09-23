<template>
	<div class="container">
		<div
			class="ScaleBox"
			ref="scaleBoxRef"
			:style="{ width: width + 'px', height: height + 'px' }"
		>
			<ScaleBox></ScaleBox>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import ScaleBox from "./components/ScaleBox.vue";
let scale = ref(0);
let width = ref<number>(1920);
let height = ref<number>(1080);
let scaleBoxRef = ref<HTMLElement | null>(null);
const getScale = () => {
	let ww = window.innerWidth / width.value;
	let wh = window.innerHeight / height.value;
	return ww < wh ? ww : wh;
};
const setScale = () => {
	scale.value = getScale();
	(scaleBoxRef.value as HTMLElement).style.setProperty("--scale", scale.value as any);
};
onMounted(() => {
    setScale()
    window.addEventListener("resize", setScale);
})
</script>

<style scoped>
* {
	margin: 0px;
	overflow: hidden;
}
.container {
	width: 100vw;
	height: 100vh;
	background-image: url(@/assets/bg.png);
	background-repeat: no-repeat;
	background-position: 0% 0%;
	background-size: 100% 100%;
}
.ScaleBox {
	--scale: 1;
}
.ScaleBox {
	position: absolute;
	transform: scale(var(--scale)) translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	transform-origin: 0 0;
	left: 50%;
	top: 50%;
	transition: 0.3s;
	z-index: 999;
}
</style>
