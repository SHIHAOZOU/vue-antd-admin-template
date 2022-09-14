<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
  
import { onBeforeMount } from "vue";
import { DarkMode } from "@/utils/theme";
import { getLocalStorageParse } from "@/utils/storage";

onBeforeMount(() => {
	let val = getLocalStorageParse("GlobalStore")?.isDark;
	if (val) DarkMode(val);
});
</script>
<style scoped>
</style>
