<template>
    <el-header class="header-top">
      <div class="header-inner">
        <h1 class="logo">
          <!-- 可以用图片或文本替换 -->
        </h1>
        <el-menu mode="horizontal" background-color="#ffffff" text-color="#000" active-text-color="#409EFF">
          <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
          <el-menu-item index="2"><router-link to="/movies">电影</router-link></el-menu-item>
          <el-menu-item index="3">影院</el-menu-item>
          <el-menu-item index="4">榜单</el-menu-item>
        </el-menu>
        <el-input placeholder="找影视剧、影人、影院" class="search" suffix-icon="el-icon-search"></el-input>
      </div>
    </el-header>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>
  
  <style scoped>
  .header-top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 50px;
    box-shadow: 0 2px 12px rgba(0,0,0,.1);
  }
  .logo {
    font-size: 1.5em;
    color: #409EFF;
  }
  .search {
    width: 300px;
  }
  </style>
  