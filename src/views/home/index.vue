<template>
	<div class="home-content">
		<div class="home-left">
			<a-card :hoverable="false" :bordered="false" style="width: 100%">
				<a-card-meta title="欢迎，体验 uu Admin">
					<template #description
						>vue-antd-admin-template一款开箱即用的开源后台管理系统解决方案，基于
						Vue3 和 Ant Design Vue 实现，使用了最新的前端技术栈 Setup语法糖 &
						Ant Design Vue & Pinia & TypeScript 。</template
					>
				</a-card-meta>
			</a-card>
		</div>
		<div class="home-right">
			<img style="width: 100%" src="@/assets/wellcome.png" alt="" />
		</div>
	</div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
.home-content {
	display: flex;
	justify-content: space-around;
	.home-left {
		width: 49%;
	}
}
</style>
