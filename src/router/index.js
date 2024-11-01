import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/',redirect: '/manager/home'},
    {path: '/manager', component: () => import("../views/Manager.vue"), children: [
        {path: 'home', meta:{ title: "主页" }, component: () => import('../views/Home.vue')},
        {path: 'test', meta:{ title: "测试页面" }, component: () => import('../views/Test.vue')},
        {path: 'data', meta:{ title: "数据展示页面" }, component: () => import('../views/Data.vue')},
        {path: 'employee', meta:{ title: "员工信息" }, component: () => import('../views/Employee.vue')},

        ]},
    {path: '/404', name: 'NotFound',meta:{ title: "404找不到页面" }, component: () => import('../views/404.vue')},
    {path: '/:pathMatch(.*)', redirect: '/404' },
  ]
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})

export default router
