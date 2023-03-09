import { createRouter, createWebHashHistory } from "vue-router";

import Cookies from 'js-cookie'

const routes = [
    {
        path: "/",
        component: () => import("@/views/home/index.vue"),
        meta: {
            requiresAuth: true,
            layout: "default"
        }
    },
    {
        path: "/about",
        component: () => import("@/views/about/index.vue"),
        meta: {
            requiresAuth: true,
            layout: "default"
        }
    },
    {
        path: "/auth",
        component: () => import("@/components/login.vue"),
        meta: {
            requiresAuth: false,
            ayout: "none"
        }
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});




router.beforeEach(async (to, from, next) => {
    console.log(Cookies.get('Authorization'));
    next()

})

export default router;
