import Home from "@/pages/Home.vue";
import User from "@/pages/User.vue";
import Main from "@/pages/Main.vue";
import Mall from "@/pages/Mall.vue";
import Vue from "vue";
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            name: 'Main', path: '/', component: Main, redirect: '/home',
            children: [
                { name: 'Home', path: '/home', component: Home },
                { name: 'User', path: '/user', component: User },
                { name: 'Mall', path: '/mall', component: Mall },
            ]
        },
    ]
})

export default router