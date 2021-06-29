import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '@/pages/Home'
import Videos from '@/pages/Videos'
import Sobre from '@/pages/Sobre'
import Contato from '@/pages/Contato'


const routes = [
    {
        path:'/',
        components:Home
    },
    {
        path:'/videos',
        components:Videos
    },
    {
        path:'/sobre',
        components:Sobre
    },
    {
        path:'/contato',
        components:Contato
    }    
];

const router = new VueRouter({
    routes,
    mode:'history'
});

export default router;