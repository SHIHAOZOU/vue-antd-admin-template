import router from "@/routers/router";
import { GlobalStore } from "@/store/index";
import { MenuStore } from "@/store/modules/menu";
import { TabsStore } from "@/store/modules/tabs";

/**
 * 路由拦截
 */
router.beforeEach((to, from, next) => {
	// 判断当前路由是否需要访问权限
	const tabsStore = TabsStore();

	const hasTabs = tabsStore.tabsOption.findIndex((tab) => tab.key === to.path) > -1;

	if (!hasTabs && to.matched.length > 0) {
		const path = to.path === "/login" || to.name === "not-found";
		if (!path) {
			tabsStore.addTab(to.meta.title, to.path);
		}
	}
	const globalStore = GlobalStore();
	if (globalStore.token !== "") {
		if (to.name == "login") {
			next();
		} else {
			if (to.matched.length > 0) {
				next();
			} else {
				const menuStore = MenuStore();
				menuStore.setMenuList().then(() => {
					next({ ...to, replace: true });
				});
			}
		}
	} else {
		if (to.path == "/login") {
			next();
		} else {
			next({
				path: "/login",
				query: {
					redirect: to.fullPath,
				},
			});
		}
	}
});

export default router;
