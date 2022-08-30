<template>
    <!-- 控制左侧菜单显示隐藏 -->
    <menu-unfold-outlined
      v-if="globalStore.isCollapsed"
      class="trigger"
      @click="globalStore.setCollapsed()"
    />
    <menu-fold-outlined
      v-else
      class="trigger"
      @click="globalStore.setCollapsed()"
    />
</template>

<script setup lang="ts">
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import { GlobalStore } from "@/store";
// const { isCollapsed,setCollapsed } = GlobalStore() 
// Pinia中的store是一个用reactive包装的对象，不能直接通过 ES6 规范进行解构，因为这样做会使状态不具有响应性。
const globalStore = GlobalStore()

</script>