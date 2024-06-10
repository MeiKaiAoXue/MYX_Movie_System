<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import tabbar from './layout/tabbar/index.vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { ref } from 'vue'
const locale = ref(zhCn)
</script>


<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<style scoped>
h1 {
  color: red;
}
</style>
