<template>
  <div>
    <div style="margin-bottom: 20px">
      <RouterLink to="/manager/test">跳转到Test.vue页面</RouterLink>
    </div>

    <div>
      <el-button type="primary" @click="router.push('/manager/test')">跳转到Test页面</el-button>
      <el-button type="primary" @click="router.replace('/manager/test')">replace跳转到Test页面</el-button>
    </div>

    <div style="margin-bottom: 20px">
      <el-input clearable v-model="data.input" style="width: 240px" placeholder="Please input" :prefix-icon="Search" :suffix-icon="Calendar"/> {{data.input}}
      <el-input type="textarea" v-model="data.descr" style="width: 300px" placeholder="请输入一段描述"></el-input>
    </div>

    <div style="margin-bottom: 20px">
      <el-input v-model="data.a" style="width: 240px" placeholder="Please input" readonly disabled/>
      <el-select
          clearable
          multiple
          value-key="id"
          v-model="data.value"
          placeholder="选择水果"
          size="large"
          style="width: 240px"

      >
        <el-option
            v-for="item in data.option"
            :key="item.id"
            :label="item.label"
            :value="item.name"
        />
      </el-select> {{data.value}}
    </div>

  </div>

  <div style="margin-bottom: 20px">
    <el-radio-group v-model="data.sex">
      <el-radio value="男">男</el-radio>
      <el-radio value="女">女</el-radio>
    </el-radio-group> <span style="margin-left: 20px">{{data.sex}}</span>

    <el-radio-group style="margin-left: 20px" v-model="data.tag" size="large">
      <el-radio-button label="点赞" value=1 />
      <el-radio-button label="收藏" value=2 />
      <el-radio-button label="转发" value=3 />
    </el-radio-group> <span style="margin-left: 20px">{{data.tag}}</span>
  </div>

  <div style="margin-bottom: 20px">
    <el-checkbox-group v-model="data.checkList">
      <el-checkbox v-for="item in data.option" :key="item.id" :label="item.label" :value="item.name"/>
    </el-checkbox-group> <span style="margin-left: 20px">{{data.checkList}}</span>
  </div>

  <div style="margin-bottom: 20px">
    <img src="@/assets/075533yqieemgj2jydauq2.jpg" alt="" style="width: 300px">
    <el-image :src="img" style="width: 100px; margin-left: 100px" :preview-src-list="[img, 'https://tse2-mm.cn.bing.net/th/id/OIP-C.fd1TLavhYwL2KYzGjiaaawHaEK?w=295&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7']"/>
  </div>

  <div style="margin-bottom: 20px; display: flex">
    <el-carousel height="400px" style="width: 500px" >
      <el-carousel-item v-for="item in data.imgs" :key="item">
        <img style="width: 100%; height: 400px" :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
    <el-carousel height="400px" style="width: 500px" >
      <el-carousel-item v-for="item in data.imgs" :key="item">
        <img style="width: 100%; height: 400px" :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>

  <div style="margin-bottom: 20px">
    <el-date-picker
        v-model="data.date"
        type="date"
        placeholder="选择日期"
        style="width: 200px; margin-left: 50px"
        format="YYYY-MM-DD"
        value-format="YYYY-MM-DD"
    /> {{data.date}}

    <el-date-picker
        style="width: 200px; margin-left: 50px"
        v-model="data.date1"
        type="datetime"
        placeholder="选择日期"
        format="YYYY-MM-DD HH:mm:ss"
        value-format="YYYY-MM-DD HH:mm:ss"
    /> {{data.date1}}

    <el-date-picker
        style="width: 450px; margin-left: 50px"
        v-model="data.daterange"
        type="daterange"
        range-separator="To"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        format="YYYY-MM-DD"
        value-format="YYYY-MM-DD"
    /> {{data.daterange?.length ? data.daterange[0] : ""}} {{data.daterange?.length ? data.daterange[1] : ""}}
  </div>

  <div>
    <el-table :data="data.tableData" style="width: 100%" stripe>
      <el-table-column prop="date" label="日期" width="180" />
      <el-table-column prop="name" label="名字" width="180" />
      <el-table-column prop="address" label="地址" />
      <el-table-column label="操作" >
        <template #default="scope">
          <el-button circle type="primary" @click="edit(scope.row) ">
            <el-icon><Edit /></el-icon>
          </el-button>
          <el-button circle type="danger" @click="del(scope.row.id) ">
            <el-icon><Delete /></el-icon>
          </el-button>


        </template>
      </el-table-column>
    </el-table>

    <div style="margin-left: 20px">
      <el-pagination
          v-model:current-page="data.currentPage"
          v-model:page-size="data.pageSize"
          :page-sizes="[5, 10, 15, 20]"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="data.tableData.length"
      />
    </div>
  </div>

  <el-dialog v-model="data.dialogTableVisible" title="编辑行对象" width="500">
    <div style="padding: 20px">
      <div style="margin-bottom: 10px">日期：{{data.row.date}}</div>
      <div style="margin-bottom: 10px">名字：{{data.row.name}}</div>
      <div style="margin-bottom: 10px">地址：{{data.row.address}}</div>
    </div>

  </el-dialog>

</template>


<script setup>
import {reactive} from "vue";
import {Calendar, Delete, Edit, Search} from "@element-plus/icons-vue";
import img from "@/assets/logo.svg"
import router from "@/router/index.js";
import request from "@/utils/request.js";


const data = reactive({
  input: null,
  a: "不能修改",
  descr: "健康游戏忠告：抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间 ...",
  value: "",
  option: [{id: 1, label: "香蕉", name: "香蕉1"}, {id: 2, label: "苹果", name: "苹果"}, {id: 3, label: "橘子", name: "橘子"},{id: 4, label: "香蕉", name: "香蕉2"}],
  sex: "",
  tag: null,
  checkList: [],
  imgs: [img,'https://tse4-mm.cn.bing.net/th/id/OIP-C.68TdwfpGPKwa4eDVfuuTTQAAAA?w=242&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' ,'https://img.onlinedown.net/download/202209/163713-6336aab961eb2.png' ,'https://tse1-mm.cn.bing.net/th/id/OIP-C.8Q56tSs49JS_sUxdZPotFwHaDR?w=310&h=154&c=7&r=0&o=5&dpr=1.5&pid=1.7'],
  date: "",
  date1: "",
  daterange: [],
  tableData: [
    {id: 1, date: "1", name: "aaa", address: "AAA"},
    {id: 2, date: "2", name: "bbb", address: "BBB"},
    {id: 3, date: "3", name: "ccc", address: "CCC"},
  ],
  currentPage: 1,
  pageSize: 5,
  dialogTableVisible: false,
  row: null,

  employeeList: [],

})

request.get('/employee/selectAll').then(res => {
  console.log(res)  // 打印数据
  data.employeeList = res.data   //  res.data就是员工的列表数据  是一个数组
  console.log(data.employeeList)
})




const  del = (id) => {
  alert("删除ID="+id+" 的数据")
}
const  edit = (row) => {
  data.row=row
  data.dialogTableVisible=true
}

</script>