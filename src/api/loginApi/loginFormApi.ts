import request from '@/api/index'
import {LoginForm} from '@/api/interface/index'

// 登录
export const loginApi = (params:LoginForm) => {
    return request.POST('/login',params)
}

// 获取权限菜单
export const getMenuList = () => {
    return request.GET('/list')
}