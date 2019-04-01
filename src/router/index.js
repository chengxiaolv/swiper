import Vue from 'vue'
import Router from 'vue-router'
import swiper from '@/components/swiper'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'swiper',
        component: swiper
    }]
})