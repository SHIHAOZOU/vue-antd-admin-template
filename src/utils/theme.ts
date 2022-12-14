//默认主题和暗黑主题
import dark from "@/styles/dark.scss";
import defalut from "@/styles/defalut.scss";

// 切换css
const changeTheme = (theme: string) => {
	const head = document.head;
	document.getElementById("theme")?.remove();
	const styleDom = document.createElement("style");
	styleDom.id = "theme";
	styleDom.innerHTML = theme;
	head.appendChild(styleDom);
};

// 改变css变量
const changeCss = (css: string, value: string) => {
	const body = document.body.style;
	body.setProperty(css, value);
};

// 切换暗黑主题或者默认主题
const DarkMode = (isDark: boolean) => {
	if (isDark) {
		changeTheme(dark);
		changeCss("--page-bg-color", "#1f1f1f");
		changeCss("--head-bg-color", "rgba(0, 0, 0, 0.5)");
		changeCss("--line-color", "#2e2e2e");
		changeCss("--content-bg-color", "rgb(255 255 255 / 4%)");
		changeCss("--text-color", "rgba(255, 255, 255, 0.85)");
	} else {
		changeTheme(defalut);
		changeCss("--page-bg-color", "white");
		changeCss("--head-bg-color", "rgba(0, 0, 0, 0.7)");
		changeCss("--line-color", "#e8e8e8");
		changeCss("--content-bg-color", "#f0f2f5");
		changeCss("--text-color", "rgba(0, 0, 0, 0.85)");
		changeCss("--success-color", "yellow");
	}
};

export { DarkMode, changeCss };
