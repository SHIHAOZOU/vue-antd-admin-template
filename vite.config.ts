import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
	css: {
		preprocessorOptions: {
			// less: {
			// 	// modifyVars: getThemeVariables({
			// 	// 	dark: true, // 开启暗黑模式
			// 	// }),
			// 	javascriptEnabled: true,
			// },
		},
	},
	plugins: [
		vue(),
		// 自动引入组件
		Components({
			resolvers: [
				AntDesignVueResolver({
					// importStyle: "less", //动态导入
				}),
			],
		}),
	],
	base:'./'
});
