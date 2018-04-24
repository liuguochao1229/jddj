<template>
    <div><!--首页-->
        <div id="head">
            <div class="top">
                <span class="icon1"><i>&#xe609;</i></span> <span class="addr">弓箭坊40号</span> <span><i class="icon2">&#xe629;</i></span>
                <div class="right">
                    <span><i>&#xe7f3;</i></span>
                    <span><i>&#xe60a;</i></span>
                </div>
            </div>
            <div class="search">
                <div class="inp" @click="showSer"><i class="icon3">&#xe60a;</i><span>酸奶</span></div>
                <div class="hotword">
                    <a href="">牛奶</a>
                    <a href="">饼干</a>
                    <a href="">饮料</a>
                    <a href="">薯片</a>
                    <a href="">方便面</a>
                    <a href="">快乐</a>
                    <a href="">养胃颗粒</a>
                    <a href="">巧克力</a>
                </div>
            </div>
        </div>
        <div id="gif">
            <img src="static/pictrue/gif.gif" alt="">
        </div>
        <div id="vol">
            <div class="voltage" v-for="img in imgs" :key="img.src">
                <img :src="img.src" alt="">
                <p>{{img.txt}}</p>
            </div>
        </div>
        <!-- 轮播 -->
        <div class="swiper-container">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper" style="width:95%;margin-left:10px">
                <!-- Slides -->
                <div class="swiper-slide"><img src="static/pictrue/1.png" alt=""></div>
                <div class="swiper-slide"><img src="static/pictrue/2.jpg" alt=""></div>
                <div class="swiper-slide"><img src="static/pictrue/3.png" alt=""></div>
                <div class="swiper-slide"><img src="static/pictrue/4.png" alt=""></div>
                <div class="swiper-slide"><img src="static/pictrue/5.png" alt=""></div>
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>
        </div>
        <div id="part">
            <div class="top">
                <img src="static/pictrue/pat1.jpg" alt="">
                <img src="static/pictrue/pat2.jpg" alt="">
            </div>
            <div class="bottom">
                <div class="pic">
                    <p>出游季</p>
                    <p class="pic_p2">40减12</p>
                    <img src="static/pictrue/wal.png" alt="">
                </div>
                <div class="pic">
                    <p>30-12</p>
                    <p class="pic_p2">酸奶低至20</p>
                    <img src="static/pictrue/ous.png" alt="">
                </div>
                <div class="pic">
                    <p>先声再康</p>
                    <p class="pic_p2">49减20</p>
                    <img src="static/pictrue/xk.png" alt="">
                </div>
                <div class="pic">
                    <p>出游季</p>
                    <p class="pic_p2">香梨6.9元</p>
                    <img src="static/pictrue/yh.png" alt="">
                </div>
            </div>
        </div>
        <div class="more"><img src="static/pictrue/limitT.jpg" alt=""><p>更多></p></div>
        <div style="overflow:auto">
            <div class="swiper-container-b">
                <div class="swiper-wrapper">
                    <div class="swiper-slide drop" style="width:80px;">
                        <img src="static/pictrue/lit1.jpg" alt="" class="ms">
                        <p class="p1">南京鲜丰...</p>
                        <p class="p2">￥9.9</p>
                        <p class="p3">￥17.9</p>
                    </div>
                    <div class="swiper-slide drop" style="width:80px;">
                        <img src="static/pictrue/lit2.jpg" alt="" class="ms">
                         <p class="p1">鲜家-新街口</p>
                        <p class="p2">￥9.9</p>
                        <p class="p3">￥17.9</p>
                    </div>
                    <div class="swiper-slide drop" style="width:80px;">
                        <img src="static/pictrue/lit3.jpg" alt="" class="ms">
                        <p class="p1">宜蔬鲜-蔬菜</p>
                        <p class="p2">￥9.9</p>
                        <p class="p3">￥17.9</p>
                    </div>
                    <div class="swiper-slide drop" style="width:80px;">
                        <img src="static/pictrue/lit4.jpg" alt="" class="ms">
                        <p class="p1">阳光菜园-爱家会计师</p>
                        <p class="p2">￥9.9</p>
                        <p class="p3">￥17.9</p>
                    </div>
                    <div class="swiper-slide drop" style="width:80px;">
                        <img src="static/pictrue/lit5.jpg" alt="" class="ms">
                        <p class="p1">妙生鲜-阿老师看见的垃圾收</p>
                        <p class="p2">￥9.9</p>
                        <p class="p3">￥17.9</p>
                    </div>
                    <div class="swiper-slide drop" style="width:80px;">
                        <img src="static/pictrue/lit6.jpg" alt="" class="ms">
                        <p class="p1">农鲜生-氨基酸的</p>
                        <p class="p2">￥9.9</p>
                        <p class="p3">￥17.9</p>
                    </div>
                    <div class="swiper-slide drop" style="width:80px;">
                        <img src="static/pictrue/lit7.jpg" alt="" class="ms">
                         <p class="p1">阳光菜园-卡时间段</p>
                        <p class="p2">￥9.9</p>
                        <p class="p3">￥17.9</p>
                    </div>
                    <div class="swiper-slide drop" style="width:80px;">
                        <img src="static/pictrue/lit8.jpg" alt="" class="ms">
                       <p class="p1">农鲜生-啊可接受的</p>
                        <p class="p2">￥9.9</p>
                        <p class="p3">￥17.9</p>
                    </div>
                    <div class="swiper-slide drop" style="width:80px;">
                        <img src="static/pictrue/lit9.jpg" alt="" class="ms">
                       <p class="p1">妙生鲜-卡接收到</p>
                        <p class="p2">￥9.9</p>
                        <p class="p3">￥17.9</p>
                    </div>
                    <div class="swiper-slide drop" style="width:80px;">
                        <img src="static/pictrue/lit10.jpg" alt="" class="ms">
                        <p class="p1">阳光菜园-啊可接受的</p>
                        <p class="p2">￥9.9</p>
                        <p class="p3">￥17.9</p>
                    </div>
                     <div class="swiper-slide drop" style="width:80px;">
                        <img src="static/pictrue/lit11.jpg" alt="" class="ms">
                       <p class="p1">农鲜生-手机打卡</p>
                        <p class="p2">￥9.9</p>
                        <p class="p3">￥17.9</p>
                    </div>
                     <div class="swiper-slide drop" style="width:80px;">
                        <img src="static/pictrue/lit12.jpg" alt="" class="ms">
                        <p class="p1">妙生鲜-萨科技的</p>
                        <p class="p2">￥9.9</p>
                        <p class="p3">￥17.9</p>
                    </div>
                     <div class="swiper-slide drop" style="width:80px;">
                        <img src="static/pictrue/lit13.jpg" alt="" class="ms">
                        <p class="p1">阳光菜园-按时间段</p>
                        <p class="p2">￥9.9</p>
                        <p class="p3">￥17.9</p>
                    </div>
                     <div class="swiper-slide drop" style="width:80px;">
                        <img src="static/pictrue/lit14.jpg" alt="" class="ms">
                        <p class="p1">南京鲜丰</p>
                        <p class="p2">￥9.9</p>
                        <p class="p3">￥17.9</p>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
        <div class="swiper-container">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper" style="width:95%;margin-left:10px">
                <!-- Slides -->
                <div class="swiper-slide"><img src="static/pictrue/lb1.png" alt=""></div>
                <div class="swiper-slide"><img src="static/pictrue/lb2.png" alt=""></div>
                <div class="swiper-slide"><img src="static/pictrue/lb3.png" alt=""></div>
            
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>
        </div>
        <div id="title">
            <p>———<span>附近的店铺</span>———</p>
        </div>
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
            <div v-for="(shop,index) in shops" :key="shop.guid" id="shops">
                <img :src="shop.src" alt="">
                <div class="shops_right">
                    <router-link style="font-family:'隶书'" :to="'/shop'+shop.guid+'/'+shop.text+'/'+shop.title+'/'+shop.src" class="rl"><span>{{shop.text}}</span> - <span>{{shop.title}}</span></router-link>
                    <p class="finTime">达达专送-<span>{{shop.num1}}</span>分钟</p>
                    <p class="star"><span class="star_sp1">{{shop.star}}</span>|&nbsp;<span class="txt">月售</span><span class="star_sp2">{{shop.num2}}</span><span class="txt">单</span></p>
                    <p class="range">0元起送,距离 <span>{{shop.range}}</span>,基础运费4元</p>
                    <div class="favour">
                        <p class="fav_icon" v-show="shop.sale.length>0"><i v-show="boo1" @click="iconCli1(index)" class="fav_icon1">&#xe733;</i><i v-show="boo2" @click="iconCli2(index)" class="fav_icon2">&#xe613;</i></p>
                        <p class="fav_p1"><span class="fav_p1_sp1">领劵</span><span class="fav_p1_sp2">满120减60,满60减30,满89减30,满40减20...</span></p>
                        <p class="fav_p1"><span class="fav_p1_sp1">首单</span><span class="fav_p1_sp2">立减2</span></p>
                        <p class="fav_p1" v-for="fav in shop.sale" :key="fav.id"><span class="fav_p1_sp1">{{fav.tit}}</span><span class="fav_p1_sp2">{{fav.txt}}</span></p>
                    </div>
                </div>
            </div>
        </div> 

        <div id="covSer">
            <div class="cov_head">
                <p class="Hleft" @click="hideSer">＜</p>
                <div class="Hcenter">
                    <i class="ser">&#xe71e;</i>
                    <input type="text" placeholder="酸奶">
                    </div>    
                <p class="Hright">搜索</p>
            </div> 
            <div id="hots">
                <i>&#xe61e;</i>
                <span>热门搜索</span>
            </div>
            <div id="sock">
                <div v-for="sock in socks" :key="sock.id" class="sock_child" style="width:20%;height:30px;float:left;margin-left:3.5%;margin-top:5px;border-radius:5px;border:1px solid #ddd;text-align:center;line-height:30px;color:#555">
                    {{sock.id}}
                </div>    
            </div>  
            <div id="history">
                <i>&#xe638;</i>
                <span>&nbsp;搜索历史</span>
            </div> 
        </div>       
    </div>
</template>
<script>
// import foot from "./footer";
import "../../static/css/indexcss/index.css";
import "swiper/dist/css/swiper.min.css";
import Swiper from "Swiper";
import infiniteScroll from "vue-infinite-scroll";
export default {
    //滚动加载
  directives: { infiniteScroll: infiniteScroll },
  data() {
    return {
      shops: [],
      busy: false,
      boo1: true,
      boo2: false,
      socks: [
        { id: "酸奶" },
        { id: "牛奶" },
        { id: "零食" },
        { id: "黑胡椒酱" },
        { id: "泡吧" },
        { id: "方便面" },
        { id: "养胃颗粒" },
        { id: "饼干" },
        { id: "泡打扮" },
        { id: "饮料" },
        { id: "盐酸" },
        { id: "梅子" }
      ],
      imgs: [
        { src: "static/pictrue/vol1.png", txt: "超市生鲜" },
        { src: "static/pictrue/vol2.png", txt: "新鲜水果" },
        { src: "static/pictrue/vol3.png", txt: "美食烘焙" },
        { src: "static/pictrue/vol4.png", txt: "鲜花蛋糕" },
        { src: "static/pictrue/vol5.png", txt: "医药健康" },
        { src: "static/pictrue/vol6.png", txt: "新人专享" },
        { src: "static/pictrue/vol7.png", txt: "VIP会员" },
        { src: "static/pictrue/vol8.png", txt: "帮助中心" },
        { src: "static/pictrue/vol9.png", txt: "分享有礼" },
        { src: "static/pictrue/vol10.png", txt: "签到" }
      ]
    };
  },
//   components: {
//     foot
//   },
  methods: {
      //加载更多
    loadMore() {
      this.busy = true;
      this.jQuery.get(this.apiURL + "/shops", result => {
        this.shops = this.shops.concat(result.data);
        this.busy = false;
      });
    },
    //优惠券展示
    iconCli1(index) {
      this.jQuery(".fav_icon1")
        .eq(index)
        .css({ display: "none" });
      this.jQuery(".fav_icon2")
        .eq(index)
        .css({ display: "block" });
      this.jQuery(".favour")
        .eq(index)
        .css({ height: "auto" });
    },
    //优惠券收起
    iconCli2(index) {
      this.jQuery(".fav_icon1")
        .eq(index)
        .css({ display: "block" });
      this.jQuery(".fav_icon2")
        .eq(index)
        .css({ display: "none" });
      this.jQuery(".favour")
        .eq(index)
        .css({ height: "37px" });
    },
    //搜索
    showSer() {
      this.jQuery("#covSer").css({ display: "block" });
    },
    hideSer() {
      this.jQuery("#covSer").css({ display: "none" });
    }
  },
  created() {
    this.jQuery.get(this.apiURL + "/shops", result => {
      this.shops = result.data;
    });
    var $ = this.jQuery;
    //头部隐藏与出现
    $(window).scroll(function(event) {
      var top = $(window).scrollTop() / 100;
      if (top >= 1) {
        return;
      }
      if (top > 0.1) {
        $(".right").css({ marginRight: "0" });
      } else {
        $(".right").css({ marginRight: "-30px" });
      }
      $(".top").css({ background: "rgba(75,199,84," + top + ")" });
      $("#head").css({ background: "rgba(75,199,84," + (1 - top) + ")" });
    });
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      // If we need pagination
      pagination: {
        el: ".swiper-pagination"
      }
    });
    var mySwiper = new Swiper(".swiper-container-b", {
      slidesPerView: "auto",
      loopedSlides: 9
    });
  }
};
</script>
<style>

</style>
