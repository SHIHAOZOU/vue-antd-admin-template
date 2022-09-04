import router from "@/routers"
import { GlobalStore } from "@/store"
import axios,{AxiosRequestConfig,AxiosError,AxiosResponse} from "axios"
import { message } from 'ant-design-vue';

// 默认请求地址
axios.defaults.baseURL= 'https://mock.apifox.cn/m1/1492640-0-default/api'
// 设置超时时间
axios.defaults.timeout=5000
// 跨域时允许携带凭证
axios.defaults.withCredentials=true
/**
 * @description: 请求拦截器
 * @return {*}
 */
axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // 全局store
        const {token} = GlobalStore()
        return {...config, headers:{...config.headers, "Authorization": token}};
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
)

/**
 * @description: 响应拦截器
 * @return {*}
 */
axios.interceptors.response.use(
    (response: AxiosResponse) => {
        const { data, config } = response;
        if (data.code === 500) {
            const globalStore = GlobalStore();
            globalStore.setToken("");
            router.replace({ path:"/login" });
            message.error(data.msg);
            return Promise.reject(data)
        }
        // 请求成功返回
        return data;
    },
    (error) => {
        return error;
    }
)

/**
 * @description: 常用请求方法
 * @return {*}
 */
const request = {
    GET:(url:string,params?:object) => {
        return axios.get(url,params)
    },
    POST:(url:string,params?:object) => {
        return axios.post(url,params)
    },
    PUT:(url:string,params?:object) => {
        return axios.put(url,params)
    },
    DELETE:(url:string,params?:object) => {
        return axios.delete(url,params)
    }
}

export default request