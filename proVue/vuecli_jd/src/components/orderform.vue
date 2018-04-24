<template>
  <div id="orderform">
      <div class="shopN">
        <p class="finish">已完成</p>
        <p class="sn_name">百果园-磊公巷店 ></p>    
      </div>
      <div class="deta" v-for="ord in orderform" :key="ord.id">
        <img :src="ord.cpic" alt="">
      </div>
      <div class="pne">
        <p class="pne_p">￥20.1</p>
        <p class="pne_n">共4件</p>
        <p class="pne_e">达达专送</p>
      </div>
      <div class="of_time">
        <p class="buyag">再次购买</p>
        <p class="ym">03-13 18:29</p>
      </div>

      <div class="shopN">
        <p class="finish">已完成</p>
        <p class="sn_name">沃尔玛-秦淮店 ></p>    
      </div>
      <div class="deta" v-for="ord in orderform" :key="ord.id">
        <img :src="ord.cpic" alt="">
      </div>
      <div class="pne">
        <p class="pne_p">￥20.1</p>
        <p class="pne_n">共4件</p>
        <p class="pne_e">达达专送</p>
      </div>
      <div class="of_time">
        <p class="buyag">再次购买</p>
        <p class="ym">03-13 18:29</p>
      </div>
  </div>
</template>
<script>
 export default{
    data(){
      return {
        orderform:[]
      }
    },
    created(){
        this.jQuery.get(this.apiURL + "/goods", result => {
        this.orderform = result.scar;
    });
    }
  }
</script>
<style>
  #orderform{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .shopN{
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    margin: 0 auto;
    border-bottom: 1px solid #ddd;
   
  }
  .sn_name{
    color: #333;
  }
  .finish{
    float: right;
     font-size: 16px;
     color: #333;
  }
  .deta{
    float: left;
    padding: 15px 0;
    margin-left: 10px;
  }
  .deta img{
    width: 53px;
    height: 53px;
  }
  .pne{
    float: right;
    margin-top: 10px;
    margin-right: 10px;
    text-align: right;
    margin-bottom: 10px;
  }
  .pne_p{
    color: rgb(255,87,87);
    font-size: 16px;
  }
  .pne_n{
    color: #333;
    font-size: 13px;
    margin: 10px 0;
  }
  .pne_e{
    border: 1px solid rgb(22,169,255);
    font-size: 13px;
    border-radius: 3px;
    color:rgb(22,169,255);
    padding: 0 3px;
  }
  .of_time{
    clear: both;
    width: 100%;
    height: 50px;
    border: 1px solid #ddd;
    margin-bottom: 20px;
    line-height: 50px;
  }
  .buyag{
    height: 30px;
    margin-top: 10px;
    line-height: 30px;
    padding: 0 10px;
    border-radius: 3px;
    margin-right: 10px;
    float: right;
    font-size:16px;
    color: #333;
    border: 1px solid #ddd;
  }
  .ym{
    font-size: 14px;
    text-indent: 10px;
  }
</style>
