import jquery from 'jquery' //全局引用
export default {
    install(Vue, options) {
        Vue.prototype.jQuery = jquery
        Vue.prototype.apiURL = 'http://115.159.210.35:88'
        Vue.prototype.bus=new Vue({
            data:{
                cars:{

                },
                carnums:{
                    
                }
            }
        })
    }
}
