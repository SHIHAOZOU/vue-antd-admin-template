export const allRouter = [
    // {
    //     path: '/home',
    //     name: 'home',
    //     component:() => import("@/views/home/index.vue"),
    //     meta: {
    //         title: '首页',
    //     }
    // },
    {
        path: '/datascreen',
        name: 'datascreen',
        redirect: "/datascreen",
        component:() => import("@/layout/index.vue"),
        meta: {
            title: '数据大屏',
        },
        children:[
            {
                path: '/datascreen',
                name: 'datascreen',
                component:() => import("@/views/data-screen/index.vue"),
                meta: {
                    title: '数据大屏',
                },
            }
        ]
    },
    {
        path: '/form',
        name: 'form',
        redirect: "/form1",
        component:() => import("@/layout/index.vue"),
        meta: {
            title: '表单',
        },
        children:[
            {
                path: '/form1',
                name: 'form1',
                component:() => import("@/views/form/form1.vue"),
                meta: {
                    title: 'form1',
                },
            },
            {
                path: '/form2',
                name: 'form2',
                component:() => import("@/views/form/form2.vue"),
                meta: {
                    title: 'form2',
                },
            }
        ]
    }
]