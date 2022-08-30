/*
 * @Author: shzou shihaozou@outlook.com
 * @Date: 2022-08-17 17:13:16
 * @LastEditors: shzou shihaozou@outlook.com
 * @LastEditTime: 2022-08-19 12:12:26
 * @FilePath: \uu-admin\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import '@/styles/var.scss';"
      }
    }
  },
  plugins: [
    vue(),
    // 自动引入组件
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ]
})
