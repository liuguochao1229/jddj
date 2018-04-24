<template>
  <div><!--商品详情-->
    <div id="detail">
        <img :src="'/static/pictrue1/'+img" alt="">
        <p class="goodname">{{title1}}</p>
        <div class="pri">
            <p class="price">￥<span>{{price}}</span></p>
            <p class="add">加入购物车</p>
        </div>
        <div class="seller">
           <div class="sel_top">
                <p class="sel_left">&#xe60f;&nbsp;<span>{{text}}—{{title2}}</span></p>
                <p class="sel_right">&#xe618;&nbsp;<span>联系商家</span></p>
           </div>
           <div class="sel_bot">
               <p class="num">商品评价<span>（共2人评价）</span></p>
               <div class="dics"><p class="line"></p><p class="txt">好评100%</p></div>
           </div>
        </div>
        <div class="swiper">
            <p class="swi_tt">也许你还喜欢</p>
             <div class="swiper-container">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide">
                        <div class="frut" v-for="picc in pics" :key="picc.guid">
                            <img :src="picc.cpic" alt="">
                            <p class="picc_txt">{{picc.txt}}</p>
                            <p class="plus">+</p>
                            <p class="picc_pri">￥{{picc.pri}}</p> 
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="frut" v-for="picc in pics" :key="picc.guid">
                            <img :src="picc.cpic" alt="">
                            <p class="picc_txt">{{picc.txt}}</p>
                            <p class="plus">+</p>
                            <p class="picc_pri">{{picc.pri}}</p>   
                        </div>
                    </div>
                    <div class="swiper-slide">
                       <div class="frut" v-for="picc in pics" :key="picc.guid">
                            <img :src="picc.cpic" alt="">
                            <p class="picc_txt">{{picc.txt}}</p>
                            <p class="plus">+</p>
                            <p class="picc_pri">{{picc.pri}}</p>
                        </div>
                    </div>
                </div>
                <!-- If we need pagination -->
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>
    <div class="hash">
      <div class="toggle">
        <div>
          <a href="#/index">
            <p>&#xe644;</p>
            <span>首页</span>
          </a>      
        </div>
        <div>
          <a href="#/classify">
            <p>&#xe604;</p>
            <span>分类</span>
          </a>
        </div>
        <div>
          <a href="#/shopcar">
            <p>&#xe606;</p>
            <span>购物车</span>
          </a>
        </div>
        <div>
          <a href="#/orderform">
            <p>&#xe667;</p>
            <span>订单</span>
          </a>
        </div>
        <div>
          <a href="#/my">
            <p>&#xe67a;</p>
            <span>我的</span>
          </a>
        </div>
      </div>
      <p class="dott" @click="toggle()">…</p>
    </div>
    <div>
      <car :shopid="guid"></car>
    </div>
  </div>
    
</template>
<script>
import "swiper/dist/css/swiper.min.css";
import car from "./car";
import Swiper from "Swiper";
import "../../static/iconfont/iconfont.css";
export default {
  props: ["guid","img", "title1", "price", "text", "title2"],
  data() {
    return {
      pics: []
    };
  },
  components: {
    car
  },
  created() {
     if (!this.bus.cars[this.guid]) {
      this.$set(this.bus.cars, this.guid, []);
    }
    this.jQuery.get(this.apiURL + "/goods", result => {
      this.pics = result.pic;
    });
    var $ = this.jQuery;
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      // Optional parameters
      // loopAdditionalSlides:2,
      loop: true,
      //  autoplay: {
      //   delay: 2000,
      //   stopOnLastSlide: false,
      //   disableOnInteraction: false
      // },
      pagination: {
        el: ".swiper-pagination"
      }
    });
  },
  methods:{
    toggle(){
      this.jQuery('.toggle').toggleClass('nb')
    }
  }
};
</script>

<style>
#detail {
  width: 100%;
  height: 100%;
  background: rgb(244, 244, 244);
}
#detail img {
  width: 100%;
  height: auto;
}
#detail .goodname {
  width: 100%;
  text-align: center;
  background: white;
}
.pri {
  width: 100%;
  height: 60px;
  background: white;
  line-height: 60px;
  margin-bottom: 10px;
}
.pri .price {
  float: left;
  font-size: 20px;
  color: #ff3434;
}
.price span {
  font-size: 30px;
}
.pri .add {
  width: 90px;
  height: 33px;
  margin-top: 13px;
  float: right;
  border-radius: 3px;
  background: rgb(71, 179, 79);
  color: white;
  text-align: center;
  line-height: 33px;
  font-size: 13px;
}

.seller {
  width: 100%;
  background: white;
}
.sel_top {
  width: 95%;
  height: 50px;
  line-height: 50px;
  margin-left: 10px;
  font-size: 13px;
  color: #333;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
}
.sel_bot {
  width: 95%;
  margin-left: 10px;
  height: 80px;
  background: white;
  overflow: hidden;
}
.sel_bot .num {
  margin-top: 10px;
}
.num span {
  color: #999;
  font-size: 12px;
}
.sel_bot .dics {
  width: 100%;
  height: 30px;
  line-height: 30px;
  margin-top: 20px;
  background: white;
  display: flex;
  justify-content: space-between;
}
.line {
  width: 82%;
  height: 3px;
  background: rgb(71, 179, 79);
  margin-top: 13px;
  border-radius: 3px;
}
.txt {
  font-size: 13px;
  color: rgb(71, 179, 79);
}
.swiper {
  width: 100%;
  background: white;
  margin-top: 10px;
  overflow: hidden;
  margin-bottom: 50px;
  margin-top: 10px;
}
.swi_tt {
  color: #333;
  font-size: 13px;
  margin-left: 10px;
  margin-top: 10px;
}
.swiper-container {
  width: 100%;
}
.swiper-slide {
  overflow: hidden;
}
.frut {
  width: 30%;
  height: 30%;
  margin-left: 10px;
  float: left;
  margin-bottom: 20px;
}
.picc_txt {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  font-size: 13px;
  color: #333;
  width: 95%;
  margin-left: 3px;
}
.picc_pri {
  font-size: 15px;
  color: #ff3434;
  margin-top: 10px;
}
.plus {
  width: 20px;
  height: 20px;
  float: right;
  margin-top: 10px;
  border-radius: 50%;
  text-align: center;
  line-height: 18px;
  font-size: 20px;
  color: rgb(71, 179, 79);
  border: 1px solid #ddd;
}
  .hash{
    position: fixed;
    z-index: 1;
    right: 0;
    bottom: 100px;
    overflow: hidden;
  }
  .hash .dott{
    width: 40px;
    height: 40px;
    float: right;
    margin-top: 5px;
    background: rgba(0,0,0,0.8);
    line-height: 15px;
    color: white;
    text-align: center;
    font-size: 40px;
    border-radius: 3px;
  }
  .toggle{
    display: none;
    background: rgba(0,0,0,0.8);
    border: 1px solid #757575;
  }
  .toggle div{
    width: 100px;
    height: 40px;
    padding: 10px;
    border-bottom: 1px solid #4b4b4b;
  }
  .toggle div p{
    color:white;
    float: left;
   
    font-size: 16px;
    margin-top: 3px;
  }
  .toggle div span{
    margin-left: 10px;
    color: white;
  }
  .nb{
    display: block;
  }
</style>


