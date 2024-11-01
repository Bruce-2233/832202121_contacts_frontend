<template>
  <div>

    <div style="height: 100px; background-color: #6254a3; display: flex; align-items: center">
      <div style="width: 400px; display: flex; align-items: center; padding-left: 20px">
        <img style="width: 70px" src="https://tse3-mm.cn.bing.net/th/id/OIP-C.naD4MR2X90vb30VUyzPTEAHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="">
        <span style=" font-size: 24px; color: #e6ecf7; margin-left: 10px">阿米诺斯后台管理系统</span>
      </div>

      <div style="flex: 1"></div>
      <div style="display: flex; width: fit-content; margin-right: 10px; align-items: center">
        <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" alt="" style="width: 40px; height: 40px">
        <span style="color: #e6ecf7; margin-left: 5px">伟大的晃爷</span>
      </div>


    </div>


    <div style="display: flex">

      <div style="width: 300px; border-right: 1px solid black; min-height: calc(100vh - 60px)" >
        <el-menu router :default-active="router.currentRoute.value.path" style="border: 0">
          <el-menu-item index="/manager/home">
            <el-icon><House /></el-icon>
            系统首页（测试）
          </el-menu-item>

          <el-menu-item index="/manager/data">
            <el-icon><DataAnalysis /></el-icon>
            数据统计（测试）
          </el-menu-item>

          <el-sub-menu index="1">
            <template #title>
              <el-icon><user /></el-icon>
              <span>用户管理</span>
            </template>

            <el-menu-item>管理员信息</el-menu-item>
            <el-menu-item index="/manager/employee">员工信息</el-menu-item>
          </el-sub-menu>

          <el-menu-item index="">
            <el-icon><UserFilled /></el-icon>
            个人信息
          </el-menu-item>

          <el-menu-item index="">
            <el-icon><SwitchButton /></el-icon>
            退出登录
          </el-menu-item>

        </el-menu>
      </div>

      <div style="flex: 1; width: 0; background-color: #ece9fa; padding: 10px">
        <RouterView/>

      </div>

    </div>



  </div>
</template>

<script setup>

import {DataAnalysis, House, SwitchButton, User, UserFilled} from "@element-plus/icons-vue";
import router from "@/router/index.js";
</script>

<style>
.el-menu .is-active {
  background-color: #e6ecf7 !important;
}
</style>

