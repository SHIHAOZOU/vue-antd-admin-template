<template>
    <a-tabs v-model:activeKey="activeKey" hide-add type="editable-card" @edit="onEdit" @change="changeTabs">
      <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable">
        <slot name="item" v-bind="pane"></slot>
      </a-tab-pane>
    </a-tabs>
</template>
<script setup lang="ts">
import { ref, watch} from 'vue';
import { TabsStore } from "@/store/modules/tabs"
import router from "@/routers/router";
import { useRoute } from 'vue-router';

const route = useRoute()
const tabsStore = TabsStore();
const panes = ref(tabsStore.tabsOption);
const activeKey = ref(route.path);
const routerRp = ()=>router.replace({ path:activeKey.value });
const changeTabs = () => routerRp()

watch(()=>route.path,(newValue,oldValue)=>{
    activeKey.value = newValue
})

const remove = (targetKey: string) => {
    let lastIndex = 0;
    panes.value.forEach((pane, i) => {
    if (pane.key === targetKey) {
        lastIndex = i - 1;
    }
    });
    panes.value = panes.value.filter(pane => pane.key !== targetKey);
    tabsStore.setTab(panes.value)
    if (panes.value.length && activeKey.value === targetKey) {
        if (lastIndex >= 0) {
            activeKey.value = panes.value[lastIndex].key;
            routerRp();
        } else {
            activeKey.value = panes.value[0].key;
            routerRp();
        }
    }
};

const onEdit = (targetKey: string) => {
    remove(targetKey);
};
</script>
<style lang="scss">  
@import "@/styles/common.scss";
</style>