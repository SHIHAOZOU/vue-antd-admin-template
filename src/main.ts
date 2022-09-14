import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import 'ant-design-vue/dist/antd.css';
import "./style.css";
// pinia store
import pinia from "@/store/index";
// vue Router
import router from "@/routers/index";
const app = createApp(App);

app.use(pinia).use(router).use(Antd).mount("#app");
