/*
 * @Author: shzou shihaozou@outlook.com
 * @Date: 2022-08-20 15:24:54
 * @LastEditors: shzou shihaozou@outlook.com
 * @LastEditTime: 2022-08-20 15:28:32
 * @FilePath: \uu-admin\src\api\interface\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 登录模块
export interface LoginForm {
    username: string;
    password: string;
}
export interface FormState extends LoginForm {
    remember: boolean;
}