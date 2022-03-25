import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import SignUp from "../views/SignUp.vue";
import Invoice from "../views/Invoice.vue";

const routes = [
    {
        path: "/",
        name: "Anasayfa",
        component: Home,
        meta: {
            title: "Anasayfa"
        }
    },
    {
        path: "/signup",
        name: "Kayıt Ol",
        component: SignUp,
        meta: {
            title: "Kayıt Ol"
        }
    },
    {
        path: "/invoice",
        name: "Fatura",
        component: Invoice,
        meta: {
            title: "Fatura"
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

export default router;