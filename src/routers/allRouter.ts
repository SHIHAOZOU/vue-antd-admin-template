export const allRouter = [
	{
		path: "/datascreen",
		name: "datascreen",
		redirect: "/datascreen",
		component: () => import("@/layout/index.vue"),
		meta: {
			title: "数据大屏",
		},
		children: [
			{
				path: "/datascreen",
				name: "datascreen",
				component: () => import("@/views/data-screen/index.vue"),
				meta: {
					title: "数据大屏",
				},
			},
		],
	},
	{
		path: "/form",
		name: "form",
		redirect: "/formbase",
		component: () => import("@/layout/index.vue"),
		meta: {
			title: "表单组件",
		},
		children: [
			{
				path: "/formbase",
				name: "form-base",
				component: () => import("@/views/form/form-base/index.vue"),
				meta: {
					title: "基础表单",
				},
			},
			{
				path: "/advancedform",
				name: "form-advanced",
				component: () => import("@/views/form/form-advanced/index.vue"),
				meta: {
					title: "高级表单",
				},
			},
		],
	},
	{
		path: "/table",
		name: "table",
		redirect: "/tablebase",
		component: () => import("@/layout/index.vue"),
		meta: {
			title: "表格组件",
		},
		children: [
			{
				path: "/tablebase",
				name: "table-base",
				component: () => import("@/views/table/table-base/index.vue"),
				meta: {
					title: "基础表格",
				},
			},
			{
				path: "/advancedtable",
				name: "table-advanced",
				component: () => import("@/views/table/table-advanced/index.vue"),
				meta: {
					title: "高级表格",
				},
			},
		],
	},
];
