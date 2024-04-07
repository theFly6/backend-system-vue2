import Home from "@/pages/Home.vue";
import User from "@/pages/User.vue";
import Main from "@/pages/Main.vue";
import Mall from "@/pages/Mall.vue";
import Vue from "vue";
import VueRouter from 'vue-router'
import Login from "@/pages/Login.vue";
import Cookies from "js-cookie";


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
        { name: 'Login', path: '/login', component: Login }
    ]
})

router.beforeEach((to, from, next) => {
    const token = Cookies.get('token')
    if (!token && to.name !== 'Login') {
        return next({ name: 'Login' })
    } else if (token && to.name === 'Login') {
        return next({ name: 'Home' })
    } else {
        return next()
    }
})
export default router