<template>
  <div><!--登录-->
      <div class="login_head">
          <p class="login_icon" @click="back()">&#xe613;</p>
          <p class="login_txt">京东登录</p>
      </div>
      <div class="methods">
          <div class="met_btn" @click="change1($event)">账号密码登录</div>
          <div @click="change2($event)">短信验证码登录</div>
      </div>
      <div class="inp">
          <div class="login1" v-if="login1">
            <div class="login1_un">
                <label for="username">账号</label>
                <input type="text" id="username" v-model="un" @blur="out($event)" @focus="insert($event)"  placeholder="用户名/邮箱/已验证手机">
                <span class="cuo" v-show="false" @click="del($event)">×</span>
            </div>
            <div class="login1_pw">
                <label for="password">密码</label>
                <input type="password" id="password" v-model="ps" @blur="out($event)" @focus="insert($event)" placeholder="请输入密码">
                <span class="cuo" v-show="false" @click="del($event)">×</span>
            </div>
          </div>
          <div class="login2" v-if="login2">
              <div class="login2_un">
                  <span class="ex">+86</span><input type="text" v-model="iphone" id="phone" placeholder="请输入手机号" @blur="out($event)" @focus="insert($event)">
                  <span class="cuo cha" v-show="false" @click="del($event)">×</span>
                  <span class="yzm" @click="get">{{time}}</span>
              </div>
              <div class="login2_pw">
                <input type="text" id="yzm" v-model="yzm" placeholder="请输入收到的验证码" @blur="out($event)" @focus="insert($event)">
                <span class="accept"></span>
                <span class="cuo cuo1" v-show="false" @click="del($event)">×</span>  
                
              </div>
          </div>
          <div class="titi"></div>
      </div>
      <div class="log">
          <div class="log1" @click="login()">登录</div>
          <div class="log2"><a href="#/index">一键登录</a></div>
      </div>
      <div class="secre">
        <p>&#xe65c;<span>忘记密码</span></p>
        <p class="secre_p2">&#xe64f;<a href="#/regist">手机快速注册</a></p>
      </div>
      <div class="quick_login">
        <p class="meth">其他登录方式</p>
        <div class="ql_icon">
          <p>&#xe603;</p>
          <p class="icon_p2">&#xe628;</p>
        </div>
        <p class="agreen">登录即代表您已同意<a href="">京东隐私政策</a></p>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    var _this=this
    return {
      username:'',
      password:'',
      login1: true,
      login2: false,
      un: "",
      ps: "",
      iphone: "",
      yzm: "",
      timer: "",
      time: "获取验证码",
      titi: [//错误提示
        '账号或密码不正确,若您为海外手机号,请在手机号前加四位国家代码,不足则补0,如"0001"、"0355"',
        "您的账号因安全原因被暂时封锁,请将账号和联系方式发送到shensu@jd.com等待处理",
        "账号或密码不正确"
      ]
    };
  },
  created(){
    //获取url参数
    console.log(this.$route.query.id,this.$route.query.pwd,this.$route.query.phone)
    if(this.$route.query.id){
      this.username=this.$route.query.id
      this.password=this.$route.query.pwd
    }else{
      //默认username和password
      this.username='a12345'
      this.password='liuguochao'
    }
    
  },
  updated() {
    //控制登录按钮的背景色
    if (
      (this.un != "" && this.ps != "") ||
      (this.iphone != "" && this.yzm != "")
    ) {
      this.jQuery(".log1").css({
        background: "rgb(242,48,48)",
        color: "white"
      });
    }
    var reg = /^1[3578]\d{9}$/;
    if (reg.test(this.iphone) == true && this.yzm != "") {
      this.jQuery(".log1").css({
        background: "rgb(242,48,48)",
        color: "white"
      });
    }
  },
  methods: {
    back() {
      window.open("#/my", "_self");
    },
    //登录方式切换时底边颜色
    change1(event) {
      this.jQuery(event.target)
        .css({ borderBottom: "2px solid #f23030" })
        .siblings()
        .css({ borderBottom: "2px solid white" });
      (this.login1 = true), (this.login2 = false);
    },
    change2(event) {
      this.jQuery(event.target)
        .css({ borderBottom: "2px solid #f23030" })
        .siblings()
        .css({ borderBottom: "2px solid white" });
      (this.login1 = false), (this.login2 = true);
    },
    //失去光标时 × 消失
    out(event) {
      var $ = this.jQuery;
      setTimeout(function() {
        $(event.target)
          .siblings(".cuo")
          .css({ display: "none" });
      }, 100);
    },
    //获取光标时 × 出现
    insert(event) {
      this.jQuery(event.target)
        .siblings(".cuo")
        .css({ display: "block" });
    },
  //点击清空输入框的内容
    del(event) {
      this.jQuery(event.target)
        .siblings("input")
        .val("");
      this.jQuery(".log1").css({
        background: "rgb(238,238,238)",
        color: "#848689"
      });
    },
    //登录时验证并传参
    login() {
      var _this=this
      if (this.un != "" && this.ps != "") {
        if ((this.username == this.un||this.un == 'a12345') && (this.password == this.ps||this.ps=='liuguochao')) {
            if(_this.$route.query.phone==undefined){
              window.open("#/my?id=Gloomywgt&&pwd=18856980176", "_self");
            }else{
              window.open("#/my?id=Gloomywgt&&pwd="+_this.$route.query.phone+"", "_self");
            }
        } else {//随机从titi中取出一个错误提示
          this.jQuery(".titi").html(this.titi[Math.floor(Math.random() * 3)]);
        }
      } else if (this.iphone != "" && this.yzm != "") {
        var reg = /^1[3578]\d{9}$/;//手机号格式正确并且验证码输入正确方可登录
        if (!reg.test(this.iphone)) {
          this.jQuery(".titi").html("手机号或验证码不正确！");
        } else if (this.yzm == this.jQuery(".accept").html()) {
          clearTimeout(this.timer);
          this.jQuery(".yzm").html("获取验证码");
          this.jQuery(function() {
            window.open("#/my?id=Gloomywgt&&pwd="+_this.iphone+"", "_self");
          });
        }
      }
    },
    get() {//正确输入手机号获取验证码
      var $ = this.jQuery;
      var time = 120;
      var reg = /^1[3578]\d{9}$/;
      if (reg.test(this.iphone)) {
        this.timer = setInterval(function() {
          $(".yzm").html(time);
          time--;
          if (time <= 0) {
            clearInterval(this.timer);
            $(".yzm").html("重新获取");
          }
        }, 1000);
        var str = "";//随机产生四个数
        for (var i = 0; i < 4; i++) {
          str += parseInt(Math.random() * 10);
        }
        $(".accept").html(str);
      }
    }
  }
};
</script>
<style>
.login_head {
  width: 100%;
  height: 40px;
  background: rgb(249, 249, 249);
  border-bottom: 1px solid #ddd;
  text-align: center;
  line-height: 40px;
  position: relative;
}
.login_txt {
  font-size: 16px;
  color: #616161;
}
.login_icon {
  font-size: 25px;
  position: absolute;
  left: 10px;
  color: #999;
  transform: rotateZ(-90deg);
}
.methods {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  line-height: 40px;
  border-bottom: 1px solid #ddd;
}
.methods div {
  font-size: 13px;
  border-bottom: 2px solid white;
  padding: 0 7px;
}
.methods .met_btn {
  border-bottom: 2px solid #f23030;
}

.inp {
  width: 90%;
  margin: 0 auto;
}
label {
  font-size: 13px;
  color: #333;
}
.inp .login1_un,
.login1_pw {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #ddd;
  line-height: 40px;
  /* overflow: hidden; */
}
.login1_un input,
.login1_pw input {
  width: 80%;
  height: 30px;
  outline: none;
  border-style: none;
  font-size: 13px;
  text-indent: 20px;
}
.cuo {
  display: block;
  float: right;
  line-height: 20px;
  text-align: center;
  color: white;
  font-size: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgb(216, 216, 216);
  margin-top: 10px;
  margin-right: 10px;
}
#yzm {
  width: 60%;
}
.cuo1 {
  margin-right: 50px;
}
.accept {
  display: block;
  float: right;
  margin-right: 10px;
}
.login2_un {
  width: 90%;
  height: 40px;
  border-bottom: 1px solid rgb(226, 226, 226);
  margin: 0 auto;
  line-height: 40px;
  position: relative;
}
.login2_un .ex {
  font-size: 15px;
  color: #333;
}
.login2_un input {
  width: 40%;
  height: 30px;
  font-size: 13px;
  text-indent: 10px;
  outline: none;
  border-style: none;
}
.login2_un .yzm {
  display: block;
  float: right;
  height: 20px;
  line-height: 20px;
  margin-top: 10px;
  padding-left: 10px;
  border-left: 1px solid #ddd;
  font-size: 13px;
  color: #333;
  margin-right: 15px;
}
.login2_pw {
  width: 90%;
  margin: 0 auto;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid rgb(226, 226, 226);
}
.login2_pw input {
  height: 30px;
  outline: none;
  border-style: none;
  font-size: 13px;
}
.cha {
  position: absolute;
  top: 0;
  left: 60%;
}
.titi {
  margin: 0 auto;
  font-size: 13px;
  color: rgb(242, 48, 48);
  line-height: 30px;
}
.log {
  width: 90%;
  margin: 20px auto;
}
.log1,
.log2 {
  width: 100%;
  height: 40px;
  font-size: 13px;
  color: #848689;
  text-align: center;
  line-height: 40px;
  border-radius: 3px;
  background: #eee;
  letter-spacing: 3px;
}
.log2 {
  border: 1px solid rgb(241, 82, 82);
  background: white;
  margin-top: 10px;
}
.log2 a {
  font-size: 13px;
  text-decoration: none;
  color: rgb(247, 84, 84);
}
.secre {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.secre p {
  font-size: 25px;
  color: #999;
}
.secre p span {
  display: block;
  font-size: 13px;
  float: right;
  margin-top: 3px;
}
.secre .secre_p2 {
  font-size: 20px;
}
.secre_p2 a {
  display: block;
  font-size: 13px;
  float: right;
  margin-top: 3px;
  color: #999;
  text-decoration: none;
}
.quick_login {
  width: 90%;
  margin: 0 auto;
  border-top: 1px solid #ddd;
  position: relative;
  top: 100px;
  text-align: center;
}
.meth {
  font-size: 15px;
  color: #bfbfbf;
  position: absolute;
  top: -12px;
  left: 50%;
  margin-left: -45px;
  padding: 0px 10px;
  background: white;
}
.ql_icon {
  display: flex;
  justify-content: space-around;
  padding: 40px;
}
.ql_icon p {
  font-size: 22px;
  color: #08c;
}
.ql_icon .icon_p2 {
  font-size: 25px;
  color: rgb(57, 202, 105);
}
.agreen {
  font-size: 14px;
  color: #333;
}
.agreen a {
  font-size: 14px;
  color: #333;
}
</style>

