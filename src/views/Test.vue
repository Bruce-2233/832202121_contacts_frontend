<template>
  <div>

    <div style="margin-bottom: 20px">
      <el-button type="primary" @click="router.back()">返回主页</el-button>
    </div>

    <div style="margin-bottom: 20px">
      <RouterLink to="/">跳转到Home.vue页面</RouterLink>
    </div>

    <div>
      <el-button type="primary" @click="router.push('/')">跳转到Home页面</el-button>
      <el-button type="primary" @click="router.replace('/')">replace跳转到Home页面</el-button>
    </div>

    <div style="background-color: blue;font-size: 25px;color: aliceblue;font-weight: bold;text-decoration: underline;font-style: italic;margin-bottom: 20px">
      阿米诺斯阿米诺斯
    </div>

    <div style="font-size: 30px;margin-bottom: 20px">
      {{a}} {{b}}
    </div>

    <div style="margin-bottom: 20px">
      {{data.a}}
      {{data.b}}
      {{data.c}}
      {{data.name}}
    </div>

    <div style="margin-bottom: 20px">
      <input v-model="data.a" />
      <input v-model="data.name" />
    </div>

    <div style="margin-bottom: 20px">
      <span style="color: red" v-if="data.name === '原神'">原神</span>
      <span style="color: blue" v-else-if="data.name === '方舟'">方舟</span>
      <span style="color: purple" v-else>快去下载原神和明日方舟！</span>
    </div>

    <div style="display: flex;margin-bottom: 20px">
      <div @click="show(item)" style="width: 300px;height: 300px;text-align: center;line-height: 300px;margin-right: 10px;background-color: sandybrown;font-size: 30px;color: white" v-for="item in data.arr">{{item}}</div>

      <div>
        <select style="width: 200px">
          <option v-for="item in data.ozt">{{item}}</option>
        </select>
      </div>
    </div>

    <div style="margin-bottom: 20px">
      <button @click="click">点我送地狱火</button>
    </div>

    <div style="margin-bottom: 20px">
      <div :style="data.box"></div>
      <div>
        <img :src="data.img" alt="">
      </div>
    </div>

    <div style="margin: 20px">
      <el-button @click="click">Default</el-button>
      <el-button type="primary" loading>Primary</el-button>
      <el-button type="success" plain size="large">Success</el-button>
      <el-button type="info" text :bg="false" >Info</el-button>
      <el-button type="warning" style="color: purple" color="pink">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </div>

    <div style="margin: 20px">
      <el-icon :size="20">
        <Edit />
      </el-icon>
      <span style="margin-left: 30px;color: red">
        <el-icon :size="20" color="red" style="top: 4px"><View /></el-icon>100
      </span>
      <el-button type="danger" :icon="Delete" circle />

      <el-input
          v-model="data.a"
          style="width: 240px"
          placeholder="Type something"
          :prefix-icon="Search"
      />
    </div>

  </div>
</template>

<script setup>
import {reactive, ref, onMounted} from "vue";
import {Delete, Edit, Search, View} from "@element-plus/icons-vue";
import router from "@/router/index.js";

const a=ref(1);
const b=ref("林晃大人帮帮我");

const data=reactive({
  a:666,
  b:"全靠晃爷了",
  c:false,
  name: "原神",
  arr: [1,2,3],
  ozt: ["陈展铭","林晃","陈贤"],
  box: {
    width: '100px',
    height: '100px',
    backgroundColor: 'red'
  },
  img: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.XDIhizOciD0WQeosP1SYogHaHa?w=170&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'
})

onMounted(() =>{
  alert("页面加载完成")
  console.log("页面加载完成")
})

const click = () => {
  alert("继续扣一")
}

const show =(value) => {
  alert(value)
}

</script>

