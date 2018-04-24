import Vue from 'vue'
import Router from 'vue-router'
import index from './components/index.vue'
import shop from './components/shop.vue'
import foot from './components/footer.vue'
import classify from './components/classify.vue'
import orderform from './components/orderform.vue'
import shopcar from './components/shopcar.vue'
import my from './components/my.vue'
import detail from './components/detail.vue'
import login from './components/login.vue'
import regist from './components/regist.vue'
import accounts from './components/accounts.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            redirect:'/index',
        },
        {
            path:'/index',//首页
            components:{
                default:index,
                a:foot
            }
        },
        {
            path:'/shop:guid/:text/:title/static/pictrue/:src',
            component:shop,//进入商店
            props:true
        },
        {
            path:'/classify',//分类
            components:{
                default:classify,
                a:foot
            }
        },
        {
            path:'/orderform',//订单
            components:{
                default:orderform,
                a:foot
            }
        },
        {
            path:'/shopcar',//购物车
            components:{
                default:shopcar,
                a:foot
            }
        },
        {
            path:'/my',//我的
            components:{
                default:my,
                a:foot
            }
        },
        {
            path:'/detail:title1/static/pictrue1/:img/:price/:text/:title2/:guid',
            component:detail,//商品详情
            props:true
        },
        {
            path:'/login',
            component:login,//登录
        },
        {
            path:'/regist',
            component:regist,//注册
        },
        {
            path:'/accounts',//结算
            component:accounts,
        },
    ]
})