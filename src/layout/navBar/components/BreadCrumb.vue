<template>
	<a-breadcrumb>
		<a-breadcrumb-item v-for="route in routerList" :key="route.path">
			<router-link :to="{ path: route.path }">
				{{ route.meta.title }}
			</router-link>
		</a-breadcrumb-item>
	</a-breadcrumb>
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute, RouteRecordNormalized } from "vue-router";

const router = useRoute();
const routerList = ref([] as RouteRecordNormalized[]);

onMounted(() => {
	routerList.value = router.matched;
	console.log(routerList.value);
});

watch(
	() => router.matched,
	(newMatched) => {
		routerList.value = newMatched;
	}
);
</script>
