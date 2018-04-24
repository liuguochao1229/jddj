<template>
  <div>
    <div class="cla-box">
      <div class="cla-ser">
        <span>&#xe71e;</span>
        <div>搜索附近的商家、商品</div>
      </div>
    </div>
     <div class="classify">
       <div class="cla-left">
         <ul>
           <li class="kinds" v-for="(list,index) in lists" :key="list.guid" @click="showGoods(list,index)">
             <router-link to="" class="rout">{{list}}</router-link>
           </li>
         </ul>
       </div>
       <div class="cla-right">
         <ul class="load">
           <li v-for="cls in clses" :key="cls.guid">
             <p class="right-tit">{{cls.title}}</p>
             <ul class="right-m">
               <li class="right-mo" v-for="child in cls.children" :key="child.guid">
                 <div><img :src="child.img" alt=""></div>
                 <p>{{child.text}}</p>
               </li>
             </ul>
           </li>
         </ul>
       </div>
     </div>
  </div>
</template>

<script>
import '../../static/css/classifycss/classify.css';
export default {
  data(){
      return{
        clses:[],
        lists:['水果蔬菜','肉禽蛋奶','冷热速食','休闲食品','酒水饮料','粮油调味','清洁日化','家居用品','鲜花蛋糕','医药健康'],
      }
  },
  created(){
  //首次请求
    this.jQuery.get(this.apiURL + "/classify",result => {
          if (result.errcode == 0) {
          this.clses = result.data;
          }
    });

  },
  mounted(){
    this.jQuery('.kinds').eq(0).addClass('border');
  },
  methods:{
    //点击展示商品
      showGoods(text,index){
          this.jQuery.get(this.apiURL + "/classify",{clstext:text},result => {
               if (result.errcode == 0) {
                this.clses = result.data;               
                }
          })       
          //点击改变颜色 
          this.jQuery('.kinds').eq(index).addClass('border').siblings().removeClass('border')
      }
  },
  
}
</script>

<style>

</style>
