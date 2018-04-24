<template>
  <div id="all">
    <div id="header">
      <div class="all_icon">
        <p class="icon1">&#xe635;</p>
        <p>&#xe6a5;</p>
      </div>
      <img src="/static/minepic/my_bgnew.png" alt="" style="width:100%;">
      <div class="bg_head">
        <img src="/static/minepic/bg_head_new.png" alt="">
        <div>
          <a href="#/login">{{username}}</a>
          <p>{{phone}}</p>
          </div>
      </div>
      <div class="kei">
        <div class="kei_cla"><img src="/static/minepic/icon_packet.png" alt=""><p>我的钱包</p></div>
        <div class="kei_cla"><p>--</p><p>优惠券</p></div>
        <div class="kei_cla"><p>--</p><p>白条</p></div>
        <div class="kei_cla"><p>--</p><p>鲜豆</p></div>
      </div>
    </div>
    <img src="/static/minepic/5a1b7aadN8268f0a1.png" alt="">
    <div class="all_last">
      <div class="last_pat">
        <img src="/static/minepic/59f861f1Naec07388.png" alt="">
        <p>我的关注</p>
      </div>
      <div class="last_pat">
        <img src="/static/minepic/59f861f4Nb4f14ccb.png" alt="">
        <p>我的评价</p>
      </div>
      <div class="last_pat">
        <img src="/static/minepic/59f86219Na63aa49b.png" alt="">
        <p>我的地址</p>
      </div>
      <div class="last_pat">
        <img src="/static/minepic/5aa11240Ne9946bfd.png" alt="">
        <p>会员减运费</p>
      </div>
      <div class="last_pat">
        <img src="/static/minepic/5a4b618cN592138dc.png" alt="">
        <p>签到有惊喜</p>
      </div>
      <div class="last_pat">
        <img src="/static/minepic/59f86201Nbb2b1e3a.png" alt="">
        <p>退款/售后</p>
      </div>
      <div class="last_pat">
        <img src="/static/minepic/59f8622cNa78b328b.png" alt="">
        <p>客服反馈</p>
      </div>
      <div class="last_pat">
        <img src="/static/minepic/59f8623aN0de96396.png" alt="">
        <p>帮助中心</p>
      </div>
      <div class="last_pat">
        <img src="/static/minepic/59f8623eNf7d1d2ab.png" alt="">
        <p>办公室超市</p>
      </div>
      <div class="last_pat">
        <img src="/static/minepic/59f8625dN1912d473.png" alt="">
        <p>配送员招募</p>
      </div>
      <div class="last_pat">
        <img src="/static/minepic/59f86273N0c5a763c.png" alt="">
        <p>关于我们</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '登录/注册',
      phone: "",
    };
  },
  created() {//获取参数并将手机号加密
    if (this.$route.query.id) {
      this.username=this.$route.query.id
      this.phone=this.$route.query.pwd.substr(0,3)+"****"+this.$route.query.pwd.substr(7)
    }
  }
};
</script>
<style>
#all {
  height: 100%;
  width: 100%;
  background: rgb(244, 244, 244);
  padding-bottom: 100px;
}
#header {
  width: 100%;
  /* height: 100%; */
  background: white;
  position: relative;
}
.all_icon {
  /* width: 100%; */
  height: 40px;
  display: flex;
  position: absolute;
  top: 15px;
  right: 20px;
}
.all_icon p {
  font-size: 25px;
  color: white;
}
.all_icon .icon1 {
  margin-right: 10px;
  font-size: 30px;
}
.bg_head {
  /* width: 60px;
    height: 60px; */
  border-radius: 50%;
  position: absolute;
  top: 30px;
  left: 20px;
}
.bg_head img {
  width: 60px;
  height: 60px;
  float: left;
}
.bg_head div {
  padding: 5px 10px;
  margin-top: 12px;
  background: rgb(105, 197, 117);
  float: left;
  margin-left: 10px;
}
.bg_head div a {
  color: white;
  font-size: 14px;
}
.bg_head div p{
  margin-top: 5px;
  color: white;
}
.kei {
  width: 100%;
  height: 85px;
  background: white;
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  top: -10px;
}
.kei_cla {
  /* height: 100; */
  margin-top: 20px;
  background: white;
  text-align: center;
}
.kei_cla img {
  width: 25px;
  height: 25px;
}
.kei_cla > p {
  margin-bottom: 9px;
  font-size: 14px;
}
#all > img {
  width: 100%;
  margin-top: 10px;
}
.all_last {
  width: 100%;
  background: white;
  overflow: hidden;
}
.last_pat {
  width: 25%;
  float: left;
  text-align: center;
  /* margin-bottom: 20px; */
  padding-bottom: 30px;
  border-bottom: 1px solid rgb(244, 244, 244);
}
.last_pat > img {
  width: 47px;
  height: 47px;
  margin-bottom: 6px;
}
.last_pat > p {
  font-size: 13px;
  color: #323232;
}
</style>
