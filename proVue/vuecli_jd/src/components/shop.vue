<template>
  <div>
    <div id="shophead">
      <img :src="'/static/pictrue/'+src" alt="">
      <p class="icon">&#xe82a;</p>
      <p class="title">{{text}}—{{title}}</p>
      <p class="txt">达达专送 | 44分钟</p>
      <p class="txt">基础运费4元</p>
      <div class="benifit">
        <div class="ben_div1">
          <p class="cli" @click="cli($event)">2个活动<span>&#xe733;</span></p>
          <p>买赠</p><span>购买指定商品,可得赠品（赠完为止）</span>
        </div>
        <div class="ben_div2">
          <p>返券</p><span>实际支付49元,订单完成后返30元优惠券(同一账号每天仅限一次)</span>         
        </div>
         <div class="ben_div3">
          <p>公告</p><span>2公里内30分钟急速配送到家,支持到点自提再省运费,有任何问题联系<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;门店17715265129。</span>         
        </div>
      </div>
      <div class="cen">
        <span>————————</span>&nbsp;&nbsp;店铺优惠券&nbsp;&nbsp;<span>————————</span>
      </div>
      <div class="mon">
        <p class="mon_rig">领劵</p>
        <p class="mon_lef">60元</p>
        <p class="mon_txt fir">满120元可用</p>
        <p class="mon_txt">适用于部分商品</p>
        <p class="mon_txt">领取后当日有效</p>
      </div>
       <div class="mon">
        <p class="mon_rig">领劵</p>
        <p class="mon_lef">30元</p>
        <p class="mon_txt fir">满60元可用</p>
        <p class="mon_txt">适用于部分商品</p>
        <p class="mon_txt">领取后当日有效</p>
      </div>
       <div class="mon">
        <p class="mon_rig">领劵</p>
        <p class="mon_lef">30元</p>
        <p class="mon_txt fir">满69元可用</p>
        <p class="mon_txt">仅限VIP会员使用</p>
        <p class="mon_txt">领取后当日有效</p>
      </div>
       <div class="mon">
        <p class="mon_rig">领劵</p>
        <p class="mon_lef">20元</p>
        <p class="mon_txt fir">满40元可用</p>
        <p class="mon_txt">水果蔬菜专用</p>
        <p class="mon_txt">领取后当日有效</p>
      </div>
      <div class="cen cen2">
        <span>————————-</span>&nbsp;&nbsp;店铺评价&nbsp;&nbsp;<span>————————</span>
      </div>
      <div class="assess">
        <div class="num">
          <div class="num_left">
            <p class="numb">4.9</p>
            <p class="str">综合评分</p>
          </div>
          <div class="num_left">
            <p class="numb numb2">2244</p>
            <p class="str str2">评论数</p>
          </div>
        </div>
        <div class="hpt">
          <p class="ht">2018-04-01 13:39:58</p>
          <p class="hp"></p>
          <p class="hn">j****s</p>
          <p class="hs">★★★★★</p>
        </div>
        <div class="qwe">
          <p class="icona">&#xe61e;</p>
          <p>【满40减20... </p>
          <p>【满40减20... </p>
          <p>【满40减20... </p>
        </div>
        <p class="last">查看用户全部评价></p>
      </div>
      <div class="cen cen2">
        <span>————————</span>&nbsp;&nbsp;店铺信息&nbsp;&nbsp;<span>—————————</span>
      </div>
      <div class="msg">
        <p>商品数量:1184件</p>
        <p>月销售量:3253</p>
        <p>关注人数</p>
        <p>营业时间:1420</p>
        <p>门店地址:南京市秦淮区小全福巷10号101室</p>
        <p>门店电话:17715265129</p>
        <p class="msg_txt1">举报商家得红包</p>
        <p class="msg_txt2">最高奖100元</p>
      </div>
      <div class="footer" @click="slide()" v-show="false">
        <p>&#xe613;</p>
        <p>点击继续购物</p>
      </div>
    </div>
    <div class="sear">
          <div class="bor">
            <p>&#xe71e;</p>
            <input type="text" placeholder="搜索店内商品">
          </div>
      </div>
    <div id="shop">
        
        <div class="left">
          <ul >
              <li v-for="(ctg,index) in ctgs" :key="ctg.guid">
                <p @click.prevent="showchild(index)" class="showcli">{{ctg.text[index]}}</p>
                <ul v-show="false">
                  <li v-for="child in ctg.children" :key="child.guid" @click.prevent="showGoods(child.text,$event)" class="showc">{{child.text}}</li>
                </ul>
              </li>                  
          </ul>     
        </div>
        <div class="right">
          <div class="ctgtxt">
            {{ctgtext}}({{count}})
          </div>
          <div class="prod" v-for="gd in goods" :key="gd.guid">
             
              <img :src="gd.img" alt="">
              <div class="gd_right">
                <router-link :to="'/detail'+gd.title+gd.img+'/'+gd.price+'/'+text+'/'+title+'/'+guid">
                  <p class="title">{{gd.title}}</p>
                  <p>月售{{gd.numb}}件 | 好评{{gd.discu}}%</p>
                  <p>库存{{gd.store}}</p>
                </router-link>         
                <p class="btn">
                  <span v-show="bus.carnums[gd.guid]">
                    <button @click="subCar(gd)">-</button>
                    {{bus.carnums[gd.guid]}}
                  </span>
                  <button @click="addCar(gd)">+</button>
                </p>
                <p class="price">&yen;{{gd.price}}</p>
                <div class="pop_up" v-if="bus.carnums[gd.guid]>=gd.store">
                  <p class="pop_txt">购买商品数量已超最大库存</p>
                  <p>[30210]</p>
                </div>
              </div>  
                 
          </div>
          
        </div>
    </div>
    <div>
      <car :shopid="guid"></car>
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
  </div>
</template>

<script>
import "../../static/css/shopcss/shop.css";
import car from "./car";
export default {
  props: ["guid","text", "title","src"],
  data() {
    return {
      ctgs: [],
      goods: [],
      ctgtext: "",
      count:""
    };
  },
  components: {
    car
  },
  created() {
    if (!this.bus.cars[this.guid]) {
      this.$set(this.bus.cars, this.guid, []);
    }
    this.jQuery.get(this.apiURL + "/ctgs", result => {
      if (result.errcode == 0) {
        this.ctgs = result.data;
      }
    });
    this.jQuery.get(this.apiURL + "/goods", result => {
        if (result.errcode == 0) {
          this.goods = result.data;
          this.ctgtext = result.ctgtext;
          this.count = result.count;
        }
      });
  },
  //默认打开第一个二级菜单
  // updated(){
  //   this.jQuery('.showc').eq(0).parent().css({"display":"block"})
  //   this.jQuery('.showc').eq(0).addClass('aborder')
  // },
  //默认首次请求
  methods: {
    showGoods(text, event) {
      //显示分类
      
      this.jQuery(".showc").css({
        color: "#666",
        borderLeft: "3px solid white"
      });
      this.jQuery(event.target)
        .css({ color: "#47b34f", borderLeft: "3px solid #47b34f" })
        .parent()
        .siblings(".showcli")
        .removeClass("aborder");
      this.jQuery.get(this.apiURL + "/goods", { ctgtext: text }, result => {
        if (result.errcode == 0) {
          this.goods = result.data;
          this.ctgtext = result.ctgtext;
          this.count = result.count;
        }
      });
    },
    // 商店头部展开与收起
    slide() {
      this.jQuery('.footer').css({"display":"none"})
      this.jQuery("#shophead").css({ height: "120px" });
      this.jQuery(".cli").css({ display: "block" });
    },
    cli(event) {
      this.jQuery('.footer').css({"display":"block"})
      this.jQuery("#shophead").css({ height: "auto" });
      this.jQuery(event.target).css({ display: "none" });
    },

    //显示二级菜单
    showchild(index, text) {
      //选择显示
      this.jQuery.get(this.apiURL + "/goods", { ctgtext: text }, result => {
        if (result.errcode == 0) {
          this.goods = result.data;
          this.ctgtext = result.ctgtext;
          this.count = result.count;
        }
      });
      //二级菜单的显示与变色
      this.jQuery(".showcli").removeClass("aborder");
      this.jQuery(".showcli")
        .eq(index)
        .addClass("aborder");
      this.jQuery('.showcli').not( this.jQuery(".showcli")
        .eq(index)).siblings().slideUp()
      this.jQuery(".showcli")
        .eq(index).siblings().slideToggle()
    },
    addCar(gd) {
      //添加商品
      var car = this.bus.cars[this.guid];
      for (var i = 0; i < car.length; i++) {
        if (car[i].guid == gd.guid) {
          if (this.bus.cars[this.guid][i].num <= gd.store) {
            this.bus.cars[this.guid][i].num++;
            this.bus.cars[this.guid].splice(i, 1, this.bus.cars[this.guid][i]);
            //重新双向绑定
            this.$set(
              this.bus.carnums,
              gd.guid,
              this.bus.cars[this.guid][i].num - 1
            );
          }
          return;
        }
      }
      if (gd.store == 0) {
        return;
      }
      gd.num = 1; //商品的数量
      if (gd.num >= gd.store) {
        gd.num = gd.store;
      }
      this.bus.cars[this.guid].push(gd);
      this.$set(this.bus.carnums, gd.guid, gd.num);
      // if(this.bus.carnums[gd.guid]>=gd.store){
      //   this.str='opacity=0;transition: opacity 0.5s linear 0'
      // }
    },
    subCar(gd) {
      var car = this.bus.cars[this.guid];
      for (var i = 0; i < car.length; i++) {
        if (car[i].guid == gd.guid) {
          var num = --this.bus.cars[this.guid][i].num;
          this.bus.cars[this.guid].splice(i, 1, this.bus.cars[this.guid][i]);
          if (num <= 0) {
            delete this.bus.carnums[gd.guid];
            this.bus.cars[this.guid].splice(i, 1);
          }
          this.$set(this.bus.carnums, gd.guid, num);
          return;
        }
      }
    },
    toggle(){
      this.jQuery('.toggle').toggleClass('nb')
    }
  }
};
</script>

<style>
  .hash{
    position: fixed;
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

