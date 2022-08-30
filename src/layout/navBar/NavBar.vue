<!--
 * @Author: shzou shihaozou@outlook.com
 * @Date: 2022-08-19 14:28:01
 * @LastEditors: shzou shihaozou@outlook.com
 * @LastEditTime: 2022-08-22 09:36:27
 * @FilePath: \uu-admin\src\layout\navBar\NavBar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-layout-header class="navbar">
    <!-- 控制左侧菜单显示隐藏 -->
    <CollapsedMenu/>
    <!-- 右侧按钮 -->
    <NavbarMenu/>
  </a-layout-header>
</template>

<script setup lang="ts">
import CollapsedMenu from "@/layout/navBar/components/CollapsedMenu.vue"
import NavbarMenu from "@/layout/navBar/components/NavbarMenu.vue"
</script>

<style scoped lang="scss">
.navbar {
  background: #fff;
  padding:0 16px 0 16px;
}
</style>
