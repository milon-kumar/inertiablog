import {createRouter,createWebHistory} from "vue-router"
// import Home from "../src/view/home.vue"
// import About from  "../src/view/about.vue"
// import Argentina from "../src/view/Argenting.vue"
const router =createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/",
            name:"Home",
            component:()=>import("../src/view/home.vue"),
        },
        {
            path:"/about",
            name:"About",
            component:()=>import("../src/view/about.vue"),
        },
        {
            path:"/argentina",
            name:"Argentina",
            component:()=>import("../src/view/Argentina.vue"),
        }
    ]
});

export default router;