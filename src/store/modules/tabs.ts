import { defineStore } from "pinia";
import { tabsOption } from "@/store/interface/index";
import { string } from "vue-types";

// interface tabsOptionInterface {
//     title:string,
//     key:string,
//     closable:boolean
// }
export const TabsStore = defineStore({
	id: "TabsStore",
	state: () => ({
		tabsOption: [
			{
				key: "/home",
				title: "首页",
				closable: false,
			},
		],
	}),
	getters: {},
	actions: {
		addTab(title: string, path: string, closable: boolean) {
			this.tabsOption.push({
				title: title,
				key: path,
				closable: closable,
			});
		},
		setTab(newTabsOption) {
			this.tabsOption = newTabsOption;
		},
	},
});
