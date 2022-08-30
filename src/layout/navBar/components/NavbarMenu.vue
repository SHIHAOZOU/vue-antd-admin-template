<template>
    <div class="navbar-menu">
        <!-- 全屏 -->
        <span class="navbar-menu-item" @click="toggle">
            <fullscreen-outlined v-show="!isFullscreen"/>
            <fullscreen-exit-outlined v-show="isFullscreen"/>
        </span>
        <!-- 头像信息 -->
        <a-dropdown class="navbar-menu-item">
            <div class="users-info" @click.prevent>
                <a-avatar>
                    <template #icon>
                        <UserOutlined />
                    </template>
                </a-avatar>
                <span class="username">{{userStore.userInfo.username}}</span>
                <down-outlined />
            </div>
            <template #overlay>
                <a-menu>
                    <a-menu-item>
                    <a href="javascript:;">账号信息</a>
                    </a-menu-item>
                    <a-menu-item>
                    <a @click="logout">退出登录</a>
                    </a-menu-item>
                </a-menu>
            </template>
        </a-dropdown>
    </div>
</template>
<script setup lang="ts">
import router from "@/routers";
import { UserOutlined, DownOutlined, FullscreenOutlined, FullscreenExitOutlined } from "@ant-design/icons-vue";
import { GlobalStore } from "@/store";
import { UserStore } from "@/store/modules/user"
import { useFullscreen } from '@vueuse/core'

const userStore = UserStore()
const { isFullscreen, toggle } = useFullscreen()
const globalStore = GlobalStore()

const logout = () => {
    globalStore.setToken("");
    userStore.setUserInfo({});
    window.localStorage.removeItem("MenuStore");
    router.replace({ path:"/login" });
}
</script>
<style scoped lang="scss">
.navbar-menu {
    float: right;
    .navbar-menu-item {
        height: 64px;
        display: inline-block;
        padding: 0 10px;
            &:hover {
            cursor: pointer;
            background: rgba(155, 153, 153, 0.1)!important;
        }
    } 
}
.users-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    float: right;
    .username {
        padding: 0 5px;
    }
}
</style>