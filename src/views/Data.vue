<template>
  <div>

    <div class="card" style="margin-bottom: 5px">
        <el-input v-model="data.name" style="width: 240px; margin-right: 10px" placeholder="请输入名称查询" prefix-icon="Search"></el-input>
        <el-button type="primary">查询</el-button>
        <el-button type="warning">重置</el-button>
    </div>

    <div class="card" style="margin-bottom: 5px">
      <el-button type="primary">新增</el-button>
      <el-button type="warning">删除</el-button>
      <el-button type="info">导入</el-button>
      <el-button type="success">导出</el-button>
    </div>

    <div  class="card" style="margin-bottom: 5px">
      <el-table :data="data.tableData" stripe>
        <el-table-column label="日期" prop="date" />
        <el-table-column label="名称" prop="name" />
        <el-table-column label="地址" prop="address" />
      </el-table>

      <div  class="card" style="margin-top: 15px">
        <el-pagination
            v-model:current-page="data.pageNum"
            v-model:page-size="data.pageSize"
            :page-sizes="[5, 10, 15, 20]"
            background
            layout="total, sizes, prev, pager, next, jumper"
            :total="data.total"
        />
      </div>

    </div>


  </div>
</template>

<script setup>
import {reactive} from "vue";
import {Search} from "@element-plus/icons-vue";

const data = reactive({
  name: null,
  tableData: [
    {id: 1, date: "1", name: "aaa", address: "AAA"},
    {id: 2, date: "2", name: "bbb", address: "BBB"},
    {id: 3, date: "3", name: "ccc", address: "CCC"},
  ],
  pageNum: 1,
  pageSize: 10,
  total: 47,

})

</script>