<template>
	<div class="login">
		<div class="login-left">
			<div class="login-left-info">
				<span>UU ADMIN</span>
				<span
					>vue-antd-admin-template后台管理系统解决方案，基于 Vue3 和 Ant Design
					Vue 实现，使用了最新的前端技术栈 Setup语法糖 & Ant Design Vue & Pinia
					& TypeScript 。</span
				>
			</div>
		</div>
		<div class="login-right">
			<div class="login-right-btn">
				<a-button shape="circle" @click="switchTheme()">
					<template #icon>
						<BulbFilled v-if="isDark == false" /><BulbOutlined
							v-if="isDark == true"
						/>
					</template>
				</a-button>
			</div>
			<a-form
				:model="formState"
				name="normal_login"
				class="login-form"
				@finish="onFinish"
				@finishFailed="onFinishFailed"
			>
				<h4>uu Admin</h4>
				<a-form-item name="username" :rules="loginRules.username">
					<a-input v-model:value="formState.username">
						<template #prefix>
							<UserOutlined class="site-form-item-icon" />
						</template>
					</a-input>
				</a-form-item>

				<a-form-item name="password" :rules="loginRules.password">
					<a-input-password v-model:value="formState.password">
						<template #prefix>
							<LockOutlined class="site-form-item-icon" />
						</template>
					</a-input-password>
				</a-form-item>

				<a-form-item>
					<a-form-item name="remember" no-style>
						<a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
					</a-form-item>
					<a class="login-form-forgot" href="">忘记密码</a>
				</a-form-item>

				<a-form-item>
					<a-button :disabled="disabled" type="primary" block @click="login()">
						登录
					</a-button>
				</a-form-item>

			</a-form>
			<p class="info">© UU ADMIN beta</p>
		</div>
	</div>
</template>
<script setup lang="ts">
import { reactive, computed, onBeforeMount } from "vue";
import { message } from "ant-design-vue";
import {
	UserOutlined,
	LockOutlined,
	BulbOutlined,
	BulbFilled,
} from "@ant-design/icons-vue";
import MD5 from "js-md5";
import { FormState, LoginForm } from "@/api/interface/index";
import { loginApi } from "@/api/loginApi/loginFormApi";
import { GlobalStore } from "@/store/index";
import router from "@/routers";
import { UserStore } from "@/store/modules/user";
import { DarkMode } from "@/utils/theme";

const globalStore = GlobalStore();
const userStore = UserStore();
const isDark = computed(() => globalStore.isDark);
const switchTheme = () => {
	DarkMode(!isDark.value);
	globalStore.setTheme();
};
const loginRules = reactive({
	username: [{ required: true, message: "请输入密码！" }],
	password: [{ required: true, message: "请输入用户名！" }],
});
const formState = reactive<FormState>({
	username: "user",
	password: "123456",
	remember: true,
});
const onFinish = (values: any) => {
	console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
	console.log("Failed:", errorInfo);
};
const disabled = computed(() => {
	return !(formState.username && formState.password);
});
// 登录
const login = async () => {
	console.log(formState);
	const loginForm: LoginForm = {
		username: formState.username,
		password: MD5(formState.password),
	};
	const res = await loginApi(loginForm);
	console.log(res.data?.token);
	globalStore.setToken(res.data?.token);
	userStore.setUserInfo(res.data.userInfo);
	message.success("登录成功");
	router.push({ name: "home" });
};
</script>
<style scoped lang="scss">
@import "@/views/login/index.scss";
</style>
