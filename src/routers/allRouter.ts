export const allRouter = [
	{
		path: "/datascreen",
		name: "datascreen",
		redirect: "/datascreen",
		// component: () => import("@/layout/index.vue"),
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
	{
		path: "/toolkit",
		name: "toolkit",
		redirect: "/downloadUpload",
		component: () => import("@/layout/index.vue"),
		meta: {
			title: "工具集合",
		},
		children: [
			{
				path: "/downloadUpload",
				name: "download-upload",
				component: () => import("@/views/toolkit/downloadUpload.vue"),
				meta: {
					title: "下载上传",
				},
			},
			{
				path: "/bigFileUpload",
				name: "big-file-upload",
				component: () => import("@/views/toolkit/bigFileUpload.vue"),
				meta: {
					title: "大文件上传",
				},
			},
			{
				path: "/virtualList",
				name: "virtual-list",
				component: () => import("@/views/toolkit/virtualList.vue"),
				meta: {
					title: "虚拟列表",
				},
			}
		],
	},
];
