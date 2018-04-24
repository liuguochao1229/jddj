<template><!--底部导航-->
    <div>
        <!-- <div>
            <router-view></router-view>
        </div> -->
        <div id="footer">
            <router-link to="index">
    
                    <p @click="cli($event)" class="son">&#xe644;</p>
                    <p>首页</p>

            </router-link>
            
        
            <router-link to="classify">

                    <p @click="cli($event)" class="son">&#xe604;</p>
                    <p>分类</p>
                
            </router-link>
            <router-link to="shopcar">
    
                    <p @click="cli($event)" class="son">&#xe606;</p>
                    <p>购物车</p>

            </router-link>
        
            <router-link to="orderform">

                    <p @click="cli($event)" class="son">&#xe667;</p>
                    <p>订单</p>

            </router-link>
            <router-link to="my">

                    <p @click="cli($event)" class="son">&#xe67a;</p>
                    <p>我的</p>

            </router-link>
        
        </div>  
    </div>
   
</template>
<script>
export default {
  data() {
    return {

    };
  },
  methods:{
      cli(){
          
      }
  },
  mounted(){
      this.jQuery('#footer a').eq(0).addClass('color')
  }
};
</script>

<style>
.color{
    color: rgb(71,179,79);
}
.router-link-active:hover{
    text-decoration: none;
    color: rgb(71,179,79);

}
#footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  z-index: 1000;
  background: white;
  font-family: 'iconfont';
  border-top: 1px solid rgb(236,236,236);
  padding: 5px 0;
}
a {
    text-align: center;
    text-decoration: none;
    flex: 1;
    color: #555;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
.son {
    font-size:1.2rem;
    margin:3px 0;
}
</style>

