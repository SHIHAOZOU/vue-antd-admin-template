import { defineStore,createPinia } from "pinia";
// pinia 持久化
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { getLocalStorageParse } from "@/utils/storage";

export const GlobalStore = defineStore({
    id: "GlobalStore",
    state: () => {
        return {
            // token
            token: "",
            // collapsed
            isCollapsed: false,
            // dark theme
            isDark: getLocalStorageParse("GlobalStore")?.isDark || false
        }
    },
    getters: {},
    actions: {
        setToken(token: string){
            this.token = token;
        },
        setCollapsed(){
            this.isCollapsed = !this.isCollapsed;
        },
        setTheme(){
            this.isDark = !this.isDark
        }
    },
    persist: true
})


const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;