import { defineStore } from "pinia";
import { getLocalStorageParse } from "@/utils/storage";

export const UserStore = defineStore({
	id: "UserStore",
	state: () => ({
		userInfo: getLocalStorageParse("UserStore")?.userInfo || {},
	}),
	getters: {},
	actions: {
		setUserInfo(userInfo: object) {
			this.userInfo = userInfo;
		},
	},
	persist: true,
});
