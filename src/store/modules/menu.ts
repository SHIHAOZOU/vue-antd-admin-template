import { defineStore } from "pinia";
import { getMenuList } from '@/api/loginApi/loginFormApi';
import matchRouter from "@/routers/permissionList"
import { allRouter } from "@/routers/allRouter"
import router from "@/routers";
import {routes,notFound} from "@/routers/router";

export const MenuStore = defineStore({
    id:"MenuStore",
    state: () => ({
        // 后端传的菜单列表
        menuList:[],
        // 过滤后的菜单列表
        matchList:[],
        // 
        storageRouter:[],
    }),
    getters: {},
    actions: {
        async setMenuList() {
            // 获取后端请求路由
            const getRouter = await getMenuList();
            // 与前端动态路由表过滤
            const arr = matchRouter(allRouter,getRouter.data);
            // 合并公共路由表
            const routerList = routes.concat(arr);
            routerList.forEach(route => {
                const routeName:any = route.name
                if ( !router.hasRoute(routeName) ) {
                    // 动态添加到路由中
                    router.addRoute(route)
                }
            })
            notFound.forEach((notFound)=>router.addRoute(notFound))
            
            // 保存菜单列表
            this.matchList = routerList;
            // 保存缓存路由
            this.storageRouter = routerList;
            // test
		}
    },
    persist: {
        key: "MenuStore",
        storage: localStorage,
        paths: ['storageRouter']
    }
})
