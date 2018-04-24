<template>
    <div id="accounts">
        <div id="ac_Head">
            <div class="ac_addr">
                +&nbsp;新建收货地址
            </div>
        </div>
         <div class="ac_send">
            <p class="send1">达达专送</p>
            <p class="send2">立即送达 16:30-17:00 ></p>
        </div>
        <div class="ac_shop">
            <p class="ac_name">沃尔玛—秦淮店</p>
            <div class="ac_goods" v-for="god in gods" :key="god.id">
                <img :src="god.img" alt="">
                <div class="ac_right">
                    <p class="ac_sen">{{god.sen}}</p>
                    <p class="ac_flo">&yen;{{god.price}}</p>
                    <p class="ac_pri">&yen;{{god.price}}×1</p>
                </div>
            </div>
        </div>
        <div class="ac_cli">
            <div class="ac_son" @click="ac_cli()">
                <span>共10件/4.33kg</span> <i>&#xe733;</i>
            </div>
        </div>
        <div class="ac_txt">
            <div class="mon">
                <p class="mon_ri">￥338.1</p>
                <p>商品金额</p>
                
            </div>
            <div class="mon">
                <p class="mon_ri">￥4.5</p>
                <p>配送费</p>
                
            </div>
            <div class="bene">
                <p class="bene_p">优惠券</p>
                <div class="xq">
                    <p class="xq_p1"><span>20</span> 元</p>
                    <p class="xq_p2">优选极速达40减20<br>满减券满40元可用<br>2018.04.10~2018.04.14</p>
                </div>
            </div>
            <p class="tot">实付金额 ￥<span>342.6</span></p>
            <div class="vip">
                <img src="/static/minepic/newVip_2x.png" alt="">
                <div class="vip_pri">
                    <p class="vip_p2">￥9.9</p>
                    <p class="vip_p3"><del>￥35.0</del></p>
                </div>
                <p class="vip_p1">开通VIP会员，本单立减 <span>4元</span>运费</p>
                <p class="vip_p4">VIP会员天天减免运费，每月最高省124元</p>
            </div>
            <p class="addof">添加订单备注</p>
        </div>
        <div class="ac_footer">提交订单</div>
        <div class="ac_he">+ 新建收货地址</div>
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
export default {
  data() {
    return {
      gods: [],
      n: 0
    };
  },
  created() {
    this.jQuery.get(this.apiURL + "/goods", result => {
      if (result.errcode == 0) {
        this.gods = result.data;
      }
    });
    var $ = this.jQuery;
    $(window).scroll(function(event) {
      var top = $(window).scrollTop() / 100;
      if (top > 0.1) {
        $(".ac_he").css({ top: "0" });
      } else {
        $(".ac_he").css({ top: "-42px" });
      }
    });
  },
  methods: {

    toggle(){
      this.jQuery('.toggle').toggleClass('nb')
    },

    ac_cli() {
      if (this.n % 2 == 0) {
        this.jQuery(".ac_shop").css({ height: "auto" });
        this.jQuery("i").html("&#xe613;");
        this.n = 1;
      } else {
        this.jQuery(".ac_shop").css({ height: "200px" });
        this.jQuery("i").html("&#xe733;");
        this.n = 0;
      }
    }
  }
};
</script>
<style>
.ac_son i {
  font-family: "iconfont";
  font-style: normal;
  color: #999;
}
#accounts {
  width: 100%;
  height: 100%;
  background: rgb(243, 243, 243);
  position: relative;
}
#ac_Head {
  width: 100%;
  height: 130px;
  background: #49b34d;
  overflow: hidden;
  position: relative;
}
.ac_addr {
  width: 50%;
  padding: 5px 0;
  text-align: center;
  border: 1px solid white;
  border-radius: 20px;
  color: white;
  margin: 40px auto;
}
.ac_send {
  width: 95%;
  padding: 20px 8px;
  position: relative;
  top: -28px;
  color: rgb(36, 134, 255);
  margin: 0 auto;
  background: white;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
}
.ac_send .send1 {
  background: rgb(36, 134, 255);
  padding: 0px 3px;
  border-radius: 3px;
  color: white;
  font-size: 13px;
}
.ac_send .send2 {
  color: rgb(36, 134, 255);
  font-size: 13px;
}
.ac_shop {
  width: 95%;
  margin: 0 auto;
  background: white;
  border-radius: 3px;
  height: 200px;
  overflow: hidden;
}
.ac_name {
  width: 100%;
  text-align: center;
  color: #333;
  font-size: 13px;
  padding: 10px 0;
}
.ac_goods {
  width: 95%;
  margin: 0 auto;
  padding: 10px 0;
}
.ac_goods img {
  width: 52px;
  height: 52px;
  float: left;
  margin-right: 10px;
}
.ac_right {
  line-height: 30px;
}
.ac_sen {
  font-size: 13px;
  color: #333;
}
.ac_flo {
  font-size: 13px;
  color: #333;
  float: right;
}
.ac_pri {
  font-size: 13px;
  color: #333;
}
.ac_cli {
  width: 95%;
  margin: 0 auto;
  background: white;
}
.ac_son {
  width: 95%;
  margin: 0 auto;
  text-align: center;
  line-height: 20px;
  padding: 5px 0px;
  overflow: hidden;
  background: rgb(243, 243, 243);
}
.ac_son span {
  font-size: 13px;
  color: #888;
}
.ac_son i {
  position: relative;
  top: 7px;
}
.ac_txt {
  width: 95%;
  margin: 0 auto;
  background: white;
  padding-bottom: 50px;
}
.mon {
  width: 95%;
  margin: 0 auto;
  padding-top: 10px;
}
.mon p {
  font-size: 13px;
  /* color: #333; */
}
.mon_ri {
  float: right;
}
.bene {
  width: 95%;
  margin: 0 auto;
  margin-top: 10px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
}
.bene_p {
  font-size: 13px;
}
.xq {
  width: 100%;
  height: 100px;
  background: rgb(248, 248, 248);
  display: flex;
  margin-top: 10px;
}
.xq_p1 {
  height: 100%;
  line-height: 100px;
  padding: 0 20px;
  color: #999;
}
.xq_p1 span {
  font-size: 25px;
  color: #999;
}
.xq_p2 {
  margin: auto 0;
  color: #999;
  font-size: 12px;
  border-left: 1px solid #ddd;
  padding-left: 10px;
}
.tot {
  width: 95%;
  margin: 0 auto;
  padding: 20px 0;
  text-align: right;
  font-size: 13px;
}
.tot span {
  font-size: 23px;
  font-weight: bold;
}
.vip {
  width: 100%;
  padding-bottom: 20px;
  background: rgb(250, 250, 250);
}
.vip_p1 {
  color: rgb(164, 136, 74);
  font-size: 13px;
  text-indent: 30px;
}
.vip_p1 span {
  color: red;
}
.vip_p4 {
  text-indent: 30px;
  font-size: 13px;
  padding: 5px 0;
  color: rgb(178, 178, 178);
}
.vip_pri {
  height: 100%;
  float: right;
  margin: 35px;
}
.vip_p3 {
  color: rgb(178, 178, 178);
}
.addof {
  width: 100%;
  padding: 30px 0;
  text-align: center;
  background: rgb(244, 244, 244);
  color: #999;
}
.ac_footer {
  width: 95%;
  text-align: center;
  padding: 15px 0;
  background: rgb(71, 179, 79);
  color: white;
  border-radius: 5px;
  font-size: 20px;
  position: fixed;
  bottom: 0px;
  left: 2.5%;
}
.ac_he {
  width: 100%;
  color: white;
  text-align: center;
  padding: 10px 0;
  background: rgb(71, 179, 79);
  position: fixed;
  top: -42px;
  transition: 0.5s;
}
.hash {
  position: fixed;
  z-index: 1;
  right: 0;
  bottom: 100px;
  overflow: hidden;
}
.hash .dott {
  width: 40px;
  height: 40px;
  float: right;
  margin-top: 5px;
  background: rgba(0, 0, 0, 0.8);
  line-height: 15px;
  color: white;
  text-align: center;
  font-size: 40px;
  border-radius: 3px;
}
.toggle {
  display: none;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid #757575;
}
.toggle div {
  width: 100px;
  height: 40px;
  padding: 10px;
  border-bottom: 1px solid #4b4b4b;
}
.toggle div p {
  color: white;
  float: left;

  font-size: 16px;
  margin-top: 3px;
}
.toggle div span {
  margin-left: 10px;
  color: white;
}
.nb {
  display: block;
}
</style>

