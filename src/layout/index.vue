<!--
 * @Author: shzou shihaozou@outlook.com
 * @Date: 2022-08-19 14:06:16
 * @LastEditors: shzou shihaozou@outlook.com
 * @LastEditTime: 2022-08-25 14:06:06
 * @FilePath: \uu-admin\src\layout\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-layout class="layout">
    <!-- 左侧菜单 -->
    <SiderBar></SiderBar>
    <a-layout>
        <!-- 顶部栏 -->
        <NavBar></NavBar>
        <TabsBar #item="{content}">
            <!-- 内容区域 -->
            <a-layout-content class="layout-content">
                <router-view v-slot="{ Component }">
                    {{ content }}
                    <component :is="Component" :key="$route.fullPath"/>
                </router-view>
            </a-layout-content>
        </TabsBar>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import SiderBar from '@/layout/siderBar/SiderBar.vue'
import NavBar from '@/layout/navBar/NavBar.vue'
import TabsBar from '@/layout/tabsBar/TabsBar.vue'
</script>

<style scoped lang="scss">
.layout {
    height: 100vh;
}
.layout-content {
    margin: 24px 16px;
    padding: 24px;
    background: #fff;
    min-height: 280px;
}
</style>
