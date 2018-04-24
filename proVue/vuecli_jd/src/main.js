
import Vue from 'vue'

import router from './router.js'

import config from './config.js'
Vue.use(config)

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

new Vue({
    el: "#app",
    router,
    template:
    `      
        <div>
            <router-view></router-view>  
            <router-view name="a"></router-view>         
        </div>
    `
})