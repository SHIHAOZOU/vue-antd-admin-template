<template>
	<a-layout-sider
		v-model:collapsed="globalStore.isCollapsed"
		:trigger="null"
		collapsible
	>
		<div class="logo">
			<img src="@/assets/uadmin.png" />
			<span v-if="!globalStore.isCollapsed">uu Admin</span>
		</div>
		<a-menu theme="dark" mode="inline">
			<template v-for="item in menuList">
				<template v-if="item.children?.length === 1">
					<a-menu-item :key="item.path">
						<template #icon>
							<VideoCameraOutlined />
						</template>
						<router-link :to="{ path: item.path }">
							<span>{{ item.meta.title }}</span>
						</router-link>
					</a-menu-item>
				</template>
				<template v-else>
					<sub-menu :menu-info="item" :key="item.path" />
				</template>
			</template>
		</a-menu>
	</a-layout-sider>
</template>

<script setup lang="ts">
import { VideoCameraOutlined } from "@ant-design/icons-vue";
import { onMounted, computed } from "vue";
import { GlobalStore } from "@/store/index";
import { MenuStore } from "@/store/modules/menu";
import { MenuOptions } from "@/store/interface/index";
import SubMenu from "./components/SubMenu.vue";
import { RouteRecordNormalized } from "vue-router";

const globalStore = GlobalStore();
const menuStore = MenuStore();
const selectedKedys = defineProps(["selectedKeys"]);

onMounted(() => {
	menuStore.setMenuList();
});
const menuList = computed((): MenuOptions[] =>
	menuStore.matchList.filter((path) => path["name"] !== "login")
);
</script>

<style scoped lang="scss">
.logo {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 64px;
	font-size: 30px;
	color: #fff;
	img {
		width: 45px;
		padding: 5px;
	}
}
</style>
