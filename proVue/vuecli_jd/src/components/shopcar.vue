<template>
  <div id="scar">
      <div class="addr">
        <div class="out">
          <p><i>&#xe6d9;</i>&nbsp;弓箭坊40号<span>(当前位置)</span></p>
        </div>
      </div>
      <div class="difcar">
        <p class="car_jt">></p>
        <p class="car_tit">优选急速达-夫子庙</p>
        
        <div class="cargoods" v-for="god in scar" :key="god.guid">
          <img :src="god.cpic" alt="">
          <p class="car_pri">￥{{god.pri}}</p>
        </div>
        <p class="car_more">...</p>
        <p class="car_num">共5件</p>
      </div>
      <div class="difcar">
        <p class="car_jt">></p>
        <p class="car_tit">沃尔玛-秦淮店</p>
        
        <div class="cargoods" v-for="god in scar" :key="god.guid">
          <img :src="god.cpic" alt="">
          <p class="car_pri">￥{{god.pri}}</p>
        </div>
        <p class="car_more">...</p>
        <p class="car_num">共13件</p>
      </div>
      <div class="difcar">
        <p class="car_jt">></p>
        <p class="car_tit">南京鲜丰水果-省中医院店</p>
        
        <div class="cargoods" v-for="god in scar" :key="god.guid">
          <img :src="god.cpic" alt="">
          <p class="car_pri">￥{{god.pri}}</p>
        </div>
        <p class="car_more">...</p>
        <p class="car_num">共6件</p>
      </div>
      <div class="zzc">
        <div class="zzc_cont">
          <img src="/static/minepic/unlogin.png" alt="">
          <p class="zzc_txt">购物车还空空如也哦~ <br> 登录后将同步购物车中商品</p>
          <a class="zzc_btn" href="javascript:" @click="close">立即登录</a>
        </div>
      </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        scar:[]
      }
    },
    created(){
        this.jQuery.get(this.apiURL + "/goods", result => {
        this.scar = result.scar;
    });
    },
   methods:{
     close(){
       this.jQuery('.zzc').css("display","none")
      //  setTimeout(function(){
      //    window.open('http://localhost:8080/#/login',"_self")
      //  },100)
     }
   }
  }
</script>
<style>
  #scar{
    width: 100%;
    height: 100%;
    background: rgb(244,244,244);
    padding-bottom: 100px;
    overflow: hidden;
  }
  #scar .addr{
    width: 60%;
    height: 40px;
    border-radius: 20px;
    background: rgb(209,231,211);
    margin: 20px auto;
    overflow: hidden;
  }
  #scar .addr p{
    width: 95%;
    height: 30px;
    background:rgb(71,179,79);
    border-radius: 20px;
    margin: 5px auto; 
    line-height:30px;
    text-align: center; 
    font-size: 18px;
  }

  #scar .addr p i{
    font-size: 16px;
  }
  #scar .addr p span{
    font-size: 16px;
  }
  .difcar{
    width: 95%;
    margin: 0 auto;
    background: white;
    overflow: hidden;
    border-radius: 5px;
    margin-bottom: 20px;
    
  }
  .car_tit{
    width: 100%;
    height: 40px;
    border-bottom: 1px solid rgb(246,246,246);
    line-height: 40px;
    text-indent: 10px;
    font-size: 13px;
    color: #333;
  } 
  .car_jt{
    float: right;
    color: #999;
    font-size: 16px;
    line-height:40px;
    margin-right: 10px;
  }
  .cargoods{
    float: left;
    background: white;
    text-align: center;
    margin-left: 5px;
    margin-bottom: 10px;
  }
  .cargoods img{
    width: 53px;
    height: 53px;
  }
  .car_pri{
    font-size: 12px;
    color: #333;
  }
  .car_more{
    width: 53px;
    height:50px;
    line-height:50px;
    text-align: center;
    font-size: 30px;
    color: #ddd;
    float: left; 
  }
  .car_num{
    height: 50px;
    line-height: 68px;
    float: right;
    font-size: 13px;
    color: #333;
    margin-right:10px;
  }
  .zzc{
    width: 100%;
    height: 100%;
    background: white;
    position: absolute;
    top: 0;
  }
  .zzc .zzc_cont{
    position: absolute;
    margin-top: 50%;
    margin-left: 28%;
    text-align: center; 
  }
  .zzc_cont img{
    width: 100px;
    height: 100px;
  }
  .zzc_cont p{
    font-size: 14px;
    color: #666;
  }
  .zzc_btn{
    display: inline-block;
    background: rgb(71,179,79);
    color: white;
    font-size: 14px;
    margin-top: 10px;
    padding: 5px;
    border-radius: 3px;
  }
</style>
