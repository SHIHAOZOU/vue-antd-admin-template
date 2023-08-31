<template>
	<a-button type="primary" @click="downloadFile">下载文件</a-button>
</template>
<script setup lang="ts">
import request from '@/api/index';
const downloadFn = (res:any, filename:string) => {
	let blob = new Blob([res.data]);
	const aLink = document.createElement('a');
	aLink.download = filename;
	aLink.style.display = 'none';
	aLink.href = URL.createObjectURL(blob);
	document.body.appendChild(aLink);
	aLink.click();
	URL.revokeObjectURL(aLink.href); // 移除链接
	document.body.removeChild(aLink)
}
const downloadFile = () => {
	const res = request.GET('http://localhost/download/0');
	console.log(res)
	downloadFn(res,'filename')
}
</script>
