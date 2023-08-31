<template>
	虚拟列表
	<div class="v-container">
		<div ref="listRef" class="infinite-list-container" @scroll="scrollEvent($event)">
			<div class="infinite-list-phantom" :style="{ height: listHeight + 'px' }"></div>
			<div class="infinite-list" :style="{ transform: getTransform }">
				<div ref="items"
					class="infinite-list-item"
					v-for="item in visibleData"
					:key="item.id"
					:style="{ height: itemSize + 'px',lineHeight: itemSize + 'px' }"
				>{{ item.value }}</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { reactive, ref, computed, onBeforeMount, onMounted } from "vue";
let d = [];
for (let i = 0; i < 1000; i++) {
  d.push({ id: i, value: i });
}

const listRef = ref()
//所有列表数据
const listData = ref(d)
//每项高度
const itemSize = ref(100)

//可视区域高度
const screenHeight = ref(0)
//偏移量
const startOffset = ref(0)
//起始索引
const start = ref(0)
//结束索引
const end = ref(0)

//列表总高度
let listHeight = computed(()=>{
	return listData.value.length * itemSize.value;
})
//可显示的列表项数
let visibleCount = computed(()=>{
	return Math.ceil(screenHeight.value / itemSize.value)
})
//偏移量对应的style
let getTransform = computed(()=>{
	return `translate3d(0,${startOffset.value}px,0)`;
})
//获取真实显示列表数据
let visibleData = computed(()=>{
	return listData.value.slice(start.value, Math.min(end.value,listData.value.length));
})

onMounted(()=>{
    screenHeight.value = listRef.value.clientHeight;
    end.value = start.value + visibleCount.value;
})

function scrollEvent() {
	//当前滚动位置
	let scrollTop = listRef.value.scrollTop;
	//此时的开始索引
	start.value = Math.floor(scrollTop / itemSize.value);
	//此时的结束索引
	end.value = start.value + visibleCount.value;
	//此时的偏移量
	startOffset.value = scrollTop - (scrollTop % itemSize.value);
}
</script>

<style scoped>
.v-container {
	width: 500px;
	height: 500px;
}

.infinite-list-container {
  height: 100%;
  overflow: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
}

.infinite-list-phantom {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
}

.infinite-list {
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  text-align: center;
}

.infinite-list-item {
  padding: 10px;
  color: #555;
  box-sizing: border-box;
  border-bottom: 1px solid #999;
}
</style>