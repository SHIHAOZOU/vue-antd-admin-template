import { RouteRecordRaw } from "vue-router"
// 后端获取菜单路由与前端路由匹配
const matchRouter = function (routerList:RouteRecordRaw[],getRouter:RouteRecordRaw[]=[]) {
    const macthArray:RouteRecordRaw[] = [];
    routerList.forEach(item => {
        getRouter.forEach(val => {
            if( val.path == item.path ) {
                if ( val["children"] && val.children.length>0 ) {
                    matchRouter(val.children,item.children)
                }
                macthArray.push(item)
            }
        })
    });
    return macthArray;
}

export default matchRouter;