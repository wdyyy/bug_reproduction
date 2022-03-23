<template>
    <a-layout>
        <a-layout-header style="padding: 0;">
            <a-menu v-model:selectedKeys="current" mode="horizontal">
                <a-sub-menu key="sub1">
                    <template #title>Navigation</template>
                    <a-menu-item-group title="Item 1">
                        <a-menu-item key="setting:1">Option 1</a-menu-item>
                        <a-menu-item key="setting:2">Option 2</a-menu-item>
                    </a-menu-item-group>
                    <a-menu-item-group title="Item 2">
                        <a-menu-item key="setting:3">Option 3</a-menu-item>
                        <a-menu-item key="setting:4">Option 4</a-menu-item>
                    </a-menu-item-group>
                </a-sub-menu>
            </a-menu>
        </a-layout-header>
    </a-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// 导航菜单的选中
const current = ref<string[]>(['mail']);
</script>

<style scoped lang="less">
</style>
