import { defineStore } from "pinia";

export const UserStore = defineStore({
	id: "UserStore",
	state: () => ({
		userInfo: {}
	}),
	getters: {},
	actions: {
		setUserInfo(userInfo) {
			this.userInfo = userInfo;
		},
	},
});
