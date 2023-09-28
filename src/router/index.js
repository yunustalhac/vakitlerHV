import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    // {
    //     name:"loginPage",
    //     path :"/",
    //     components:()=>import()
    // }
];

const router = createRouter({
    routes,
    history: createWebHashHistory()
});
export default router;
