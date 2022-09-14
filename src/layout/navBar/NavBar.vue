<template>
  <a-layout-header class="navbar">
    <!-- 控制左侧菜单显示隐藏 -->
    <CollapsedMenu/>
    <!-- 面包屑导航 -->
    <BreadCrumb class="bread-crumb"/>
    <!-- 右侧按钮 -->
    <NavbarMenu/>
  </a-layout-header>
</template>

<script setup lang="ts">
import CollapsedMenu from "@/layout/navBar/components/CollapsedMenu.vue"
import NavbarMenu from "@/layout/navBar/components/NavbarMenu.vue"
import BreadCrumb from "@/layout/navBar/components/BreadCrumb.vue"
</script>

<style scoped lang="scss">
.navbar {
  background: var(--page-bg-color);
  padding:0 16px 0 16px;
  .bread-crumb{
    padding-left: 16px;
    display: inline-block;
  }
}
</style>
