<template>
  <div id="car">
    <!-- 未添加商品时状态 -->
    <div class="iconcar1"  v-if="bus.cars[this.shopid].length<=0">&#xe606;</div>

    <!-- 购物车内容 -->
    <div class="shopcars" style="width:100%">

      <!-- 添加商品时状态 -->
      <div class="iconcar" @click="showcon($event)"  v-if="bus.cars[this.shopid].length>0">&#xe606;
        <p class="tm">{{totalnum}}</p>
      </div> 

      <!-- 全选部分 以及清空购物车-->
    <div class="carhead">
        <div class='checkbox1'><input type='checkbox' id='checkbox1' v-model="allchecked" name='checkboox1[]'> <label for='checkbox1' class="labelbox1" @click="checkedbox1()"></label> </div>
        <span>全选(已选{{bus.cars[shopid].length}}件)</span>
        <p @click="emptyCar" class="empty">清空购物车</p>
    </div> 

    <!-- 商品列表 -->
    <div class="posi">       
      <div class="eachgoods" v-for="(car,index) in bus.cars[shopid]" :key='car.guid'>
        <div class='checkbox'>
          <input type='checkbox' :id='index' name='checkboox[]' v-model="checked" :value="car.guid"><label :for='index' @click="checkbox(car.guid)"></label>
        </div>
        <img :src="car.img" alt="">
        <p class="tit">{{car.title}}</p>
        <div class="button">
          <button @click="subCar(car)">-</button>
          {{car.num}}
          <button @click="addCar(car)">+</button>
        </div>
        <p class="pri">￥{{car.price|currency}}</p>
      </div>
    </div>
  </div>
  <!-- 有商品时状态  -->
  <div class="balance" v-if="bus.cars[this.shopid].length>0">
    <p class="js"><a href="#/accounts">去结算</a></p>
    <p class="topri">￥{{total|currency}}</p>  
  </div>

  <!-- 无商品时状态 -->
  <div class="balance1" v-if="bus.cars[this.shopid].length<=0">
    <p class="js1">去结算</p>
    <p class="topri1">购物车是空的</p>  
  </div>
</div>
</template>
<script>
import "../../static/css/carcss/car.css";
export default {
  props: ["shopid"],
  data() {
    return {
      allchecked:false,
      checked: [],
      n: 0,
      m: 0
    };
  },
  filters: {
    currency(value) {
      value = Number(value);
      return value.toFixed(2);
    }
  },
  computed: {
    //添加了商品总价
    total() {
      var sum = 0;
      for (let i = 0; i < this.bus.cars[this.shopid].length; i++) {
        var gid = this.bus.cars[this.shopid][i].guid;
        if (this.checked.indexOf(gid) == -1) {
          continue;
        }
        sum +=
          this.bus.cars[this.shopid][i].price *
          this.bus.cars[this.shopid][i].num;
      }
      return sum;
    },

    //添加商品的总量
    totalnum() {
      var sum = 0;
      for (let i = 0; i < this.bus.cars[this.shopid].length; i++) {
        sum += this.bus.cars[this.shopid][i].num;
      }
      return sum;
    }
  },
  methods: {
    //购物车点击显示内容
    showcon(event) {
      if (this.n % 2 == 0) {
        this.jQuery(".topri").css({ marginLeft: "12px", transition: "0.5s" });
        this.jQuery(".shopcars").css({ top: "0", transition: "0.5s" });
        this.jQuery(".iconcar").css({ top: "-110px", transition: "0.5s" });
        this.jQuery(".posi").css({ maxHeight: "250px", transition: "0.5s" });
      } else {
        this.jQuery(".topri").css({ marginLeft: "80px", transition: "0.5s" });
        this.jQuery(".shopcars").css({ top: "50px", transition: "0.5s" });
        this.jQuery(".iconcar").css({ top: "-70px", transition: "0.5s" });
        this.jQuery(".posi").css({ maxHeight: "0", transition: "0.5s" });
      }
      this.n++;
    },
    emptyCar() {
      //清空购物车时返回无商品状态
      this.n = 0;
      this.jQuery(".topri").css({ marginLeft: "80px", transition: "0.5s" });
      this.jQuery(".shopcars").css({ top: "50px", transition: "0.5s" });
      this.jQuery(".iconcar").css({ top: "-20px", transition: "0.5s" });
      this.jQuery(".posi").css({ maxHeight: "0", transition: "1s" });
      this.jQuery(".carhead").css({ top: "0px" });
      //清空购物车
      this.$set(this.bus.cars, this.shopid, []);
      this.$set(this.bus, "carnums", {});
    },
    addCar(gd) {
      //添加商品
      var car = this.bus.cars[this.shopid];
      for (var i = 0; i < car.length; i++) {
        if (car[i].guid == gd.guid) {
          if (this.bus.cars[this.shopid][i].num <= gd.store) {
            this.bus.cars[this.shopid][i].num++;
            //从新双向绑定响应数据
            this.bus.cars[this.shopid].splice(
              i,
              1,
              this.bus.cars[this.shopid][i]
            );

            this.$set(
              this.bus.carnums,
              gd.guid,
              this.bus.cars[this.shopid][i].num - 1
            );
          }
          return;
        }
      }
      gd.num = 1; //商品的数量
      if (gd.num >= gd.store) {
        gd.num = gd.store;
      }
      this.bus.cars[this.shopid].push(gd);
      this.$set(this.bus.carnums, gd.guid, gd.num);
    },

    //减少商品数量
    subCar(gd) {
      var car = this.bus.cars[this.shopid];
      for (var i = 0; i < car.length; i++) {
        if (car[i].guid == gd.guid) {
          var num = --this.bus.cars[this.shopid][i].num;
          this.bus.cars[this.shopid].splice(
            i,
            1,
            this.bus.cars[this.shopid][i]
          );

          if (num <= 0) {
            delete this.bus.carnums[gd.guid];
            this.bus.cars[this.shopid].splice(i, 1);
          }
          this.$set(this.bus.carnums, gd.guid, num);
          return;
        }
      }
    },
     //全选
    checkedbox1() {

      for (let i = 0; i < this.bus.cars[this.shopid].length; i++) {
        var gid = this.bus.cars[this.shopid][i].guid;
        if (this.m % 2 == 0) {
          if (this.checked.indexOf(gid) == -1) {
            this.checked.push(gid);
          }
        } else {
          this.checked = [];
        }
      }
      this.m++;
    },
    //单选
    checkbox(id) {
      let index=this.checked.indexOf(id)
      if(index>=0){
        this.checked.splice(index,1)
      }else{
        this.checked.push(id)
      }
      if(this.checked.length== this.bus.cars[this.shopid].length){
        this.allchecked=true
        this.m=1
      }else{
        this.allchecked=false
        this.m=0
      }       
    },
  }
};
</script>

<style>

</style>

