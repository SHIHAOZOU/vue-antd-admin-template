<template>
    <a-layout-sider v-model:collapsed="globalStore.isCollapsed" :trigger="null" collapsible>
      <div class="logo">uu Admin</div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <template v-for="item in menuList">
          <template v-if="!item.children">
            <a-menu-item :key="item.path">
              <template #icon>
                <VideoCameraOutlined />
              </template>
              <router-link :to="{ path: item.path}">
                <span>{{item.meta.title}}</span>
              </router-link>
            </a-menu-item>
          </template>
          <template v-else>
            <a-sub-menu :key="item.path">
              <template #icon>
                <VideoCameraOutlined />
              </template>
              <template #title>{{item.meta.title}}</template>
              <a-menu-item v-for="children in item.children" :key="children.path">
                <router-link :to="{ path: children.path}">
                  {{children.meta.title}}
                </router-link>
              </a-menu-item>
            </a-sub-menu>
          </template>
        </template>
      </a-menu>
    </a-layout-sider>
</template>

<script setup lang="ts">
import {
  VideoCameraOutlined,
} from '@ant-design/icons-vue';
import { ref,onMounted,computed } from 'vue';
import { GlobalStore } from '@/store/index'
import { MenuStore } from '@/store/modules/menu'
import { MenuOptions } from '@/store/interface/index';
import { useRoute } from "vue-router";

const route = useRoute()
const globalStore = GlobalStore() 
const menuStore = MenuStore()
const selectedKeys = ref<string[]>([route.path])

onMounted( () => {
    menuStore.setMenuList()
})
const menuList = computed((): MenuOptions[] => menuStore.matchList);
</script>

<style scoped lang="scss">
.logo {
    height: 64px;
    text-align: center;
    line-height: 64px;
    font-size: 30px;
    color: #fff;
    // background-color: ;
}
</style>
