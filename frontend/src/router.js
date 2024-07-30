import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Home from './components/Home.vue';

const routes = [
    { path: '/home', name: 'Home', component: Home , meta:{requiresAuth: true}},
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Thêm guard để kiểm tra trạng thái đăng nhập trước khi chuyển hướng
router.beforeEach((to, from, next) => {
    // debugger
    if (to.matched.some(record => record.meta.requiresAuth)) {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        console.log(isLoggedIn);
        if (!isLoggedIn) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
