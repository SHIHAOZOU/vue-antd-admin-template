import { defineStore,createPinia } from "pinia";
// pinia 持久化
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export const GlobalStore = defineStore({
    id: "GlobalStore",
    state: () => {
        return {
            // token
            token: "",
            // collapsed
            isCollapsed: false,
        }
    },
    getters: {},
    actions: {
        setToken(token: string){
            this.token = token;
        },
        setCollapsed(){
            this.isCollapsed = !this.isCollapsed;
        }
    },
    persist: true
})


const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;