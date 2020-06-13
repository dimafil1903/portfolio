import VueRouter from 'vue-router'
import MainComponent from "./components/MainComponent";


export default new VueRouter({
    routes: [
        {
            path: '/',
            component: MainComponent
        },

    ],
    mode: 'history'
});
