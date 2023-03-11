import { createRouter, createWebHashHistory } from "vue-router";

import { StorageSerializers, useStorage } from "@vueuse/core";

const routes = [
    {
        name:'home',
        path: "/",
        component: () => import("@/views/home/index.vue"),
        meta: {
            requiresAuth: true,
            layout: "default"
        }
    },
    {
        name:'about',
        path: "/about",
        component: () => import("@/views/about/index.vue"),
        meta: {
            requiresAuth: true,
            layout: "default"
        }
    },
    {
        name:'login',
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
    const currentuser = useStorage('currentuser', null, undefined, { serializer: StorageSerializers.object })
    
    if (to.name !== 'login' && !currentuser.value) next({ name: 'Login' })
    else if (to.name == 'login' && currentuser.value) next({name:from.name})
    else next()
})

export default router;
