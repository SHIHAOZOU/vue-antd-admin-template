
import { createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';
// import { MenuStore } from "@/store/modules/menu";
// 在router中使用pinia（getActivePinia was called with no active Pinia. Did you forget to install pinia）报错解决
// import pinia from '@/store/index'
// const menuStore = MenuStore(pinia);
import Layout from "@/layout/index.vue"


export const routes:RouteRecordRaw[] = [
    {
        path:"/",
        redirect: '/home',
        component:Layout,
        meta: {
            title: '首页',
        },
        children: [
            {
                path: '/home',
                name: 'home',
                component:() => import("../views/home/index.vue"),
                meta: {
                    title: '首页',
                }
            },
            // {
            //     path: '/datascreen',
            //     name: 'datascreen',
            //     component:() => import("@/views/data-screen/index.vue"),
            //     meta: {
            //         title: '数据大屏',
            //     }
            // },
            // ...menuStore.matchList
        ]
    },
    {
        path:"/login",
        name:"login",
        component:()=>import("../views/login/index.vue"),
        meta:{
			auth: false,
            title:"登录页",
            key:"login"
        }
    }
    // {
    //     path:"/home",
    //     name:"home",
    //     component:()=>import("@/views/home/index.vue"),
    //     meta:{
	// 		requiresAuth: false,
    //         title:"主页",
    //         key:"home"
    //     }
    // }
]
    export const notFound = [
        {
            path: '/nofound',
            name: 'NoFound',
            component: () => import('../views/notfound.vue'),
            meta: {
              title: '404'
            }
          },
          {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: () => import('../views/notfound.vue'),
            meta: {
              title: '404'
            }
          }
    ]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    strict:false
})

export default router