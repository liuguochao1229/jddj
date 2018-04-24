<template>
    <div>
        <div class="regist_head">
          <p class="regist_icon" @click="back()">&#xe613;</p>
          <p class="regist_txt">京东注册</p>
        </div>
        <div id="container">
          <el-form id="registform" :status-icon="true" :rules="rules" label-position="left" ref="form"
              :model="form" label-width="80px">
              <el-form-item label="用户名" prop="username">
                  <el-input v-model="form.username" name="username"></el-input>
              </el-form-item>

              <el-form-item label="密码" prop="password">
                  <el-input type="password" v-model="form.password" name="password"></el-input>
              </el-form-item>

              <el-form-item label="确认密码" prop="password2">
                  <el-input type="password" v-model="form.password2"></el-input>
              </el-form-item>

              <el-form-item label="邮箱" prop="email">
                  <el-input v-model="form.email" name="email"></el-input>
              </el-form-item>
              <el-form-item label="手机" prop="phone">
                  <el-input v-model="form.phone" name="phone"></el-input>
              </el-form-item>
              <el-form-item label="性别">
                  <el-radio-group v-model="form.sex">
                      <el-radio name="sex" label="1">男</el-radio>
                      <el-radio name="sex" label="2">女</el-radio>
                  </el-radio-group>
              </el-form-item>
              <el-form-item>
                  <el-button @click="regist()" type="primary">立即注册</el-button>
              </el-form-item>
          </el-form>
      </div>
      <div class="regist_zzc"> 
        <div class="zzc_con">
          <p class="zp1">注册协议及隐私政策</p>      
          <div class="zzc_cen">
            <p class="zp2">在您注册成为京东用户的过程中，您需要完成我们的注册流程并
              通过点击同意的形式在线签署一下协议， <a href="">请您
                务必仔细阅读、充分理解协议中的条款内容以后再点击同意
                （尤其是以粗体并下划线标识的条款，因为这些条款可能会
                明确您应履行的义务或您的权利有所限制）：
              </a>
            </p>
            <p class="zp3">《京东用户注册协议》</p>
            <p>《用户隐私政策》</p>
            <p class="zp4">《订单共享与安全》</p>
            <p class="zp5"><a href="">【请您注意】如果您不同意上诉协议或其中的
              如何条款约定，请您停止注册。您停止注册后将可以浏览我们的商品信息但无法享受我们的产品服务
              。如您按照注册流程提示填写信息、阅读并点击同意上诉协议且完成全部注册
              流程后，并标明您也同意京东可以依据以上的隐私政策内容来处理您的
              个人信息。</a>如您对以上协议内容有任何疑问，您可随时与京东客服
              联系。
              </p>
            
          </div>
          <div class="zzc_last">
              <p class="zp6">点击同意即表示您已阅读并同意<a href="">《京东用户注册协议》</a>与<a href="">《京东隐私政策》</a>并将您的订单信息共享给为完成订单所必须的第三方合作方。关于<a href="">《订单共享与安全》</a></p>
              <div class="idea">
                <p class="idea_agi" @click="agi()">不同意</p>
                <p class="idea_agr" @click="agr()">同意</p>
              </div>
          </div>
        </div>     
      </div>
    </div>
     
</template>
<script>
export default {
  data: function() {
    var _this = this;
    return {
      form: {
        username: "",
        password: "",
        password2: "",
        email: "",
        phone: "",
        sex: "1"
      },
      rules: {
        username: [
          {//用户名验证
            validator: function(rule, value, callback) {
              var usernamereg = /^[a-zA-Z0-9_-]{4,16}$/;
              if (value.trim() == "") {
                callback(new Error("请输入用户名"));
              } else if (!usernamereg.test(value)) {
                callback(new Error("4到16位（字母，数字，下划线，减号）"));
              } else {
                callback();
              }
            },
            trigger: "blur"
          }
        ],
        password: [//密码验证
          {
            validator: function(rule, value, callback) {
              if (value.trim() == "") {
                callback(new Error("请输入密码"));
              } else if (
                !/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/.test(
                  value
                )
              ) {
                callback(
                  new Error("最少6位,至少1大写,1小写,1数字,1特殊字符")
                );
              } else {
                _this.$refs.form.validateField("password2");
                callback();
              }
              trigger: "blur";
            }
          }
        ],
        password2: [//二次验证
          {
            validator: function(rule, value, callback) {
              if (value.trim() == "") {
                callback(new Error("请输入确认密码"));
              } else if (value == _this.form.password) {
                callback();
              } else {
                callback(new Error("输入密码不一致"));
              }
            }
          }
        ],
        email: [//邮箱验证
          {
            validator: function(rule, value, callback) {
              if (value.trim() == "") {
                callback(new Error("请输入邮箱"));
              } else if (
                !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(
                  value
                )
              ) {
                callback(new Error("邮箱格式不正确"));
              } else {
                callback();
              }
            },
            trigger: "blur"
          }
        ],
        phone: [//手机号验证
          {
            validator: function(rule, value, callback) {
              if (value.trim() == "") {
                callback(new Error("请输入手机号"));
              } else if (
                !value.match(
                  /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/
                )
              ) {
                callback(new Error("手机号格式不正确"));
              } else {
                callback();
              }
              trigger: "blur";
            }
          }
        ]
      }
    };
  },
  methods: {
    
    regist() {
      var _this=this
      //验证全部通过 方可提交
      this.$refs.form.validate(function(valid) {
        if (valid) {
          window.open("#/login?id="+_this.form.username+"&&pwd="+_this.form.password+"&&phone="+_this.form.phone+"", "_self")
        }
      });
    },
    back(){ 
      window.open("#/login","_self")
    },
    agi(){
      window.open("#/login","_self")
    },
    agr(){
      this.jQuery('.regist_zzc').css({"display":"none"})
    }
  }
};
</script>
<style>
* {
  padding: 0px;
  margin: 0px;
  font-size: 14px;
  box-sizing: border-box;
}
.regist_head {
  width: 100%;
  height: 40px;
  background: rgb(249, 249, 249);
  border-bottom: 1px solid #ddd;
  text-align: center;
  line-height: 40px;
  position: relative;
}
.regist_txt {
  font-size: 16px;
  color: #616161;
}
.regist_icon {
  font-size: 25px;
  position: absolute;
  left: 10px;
  color: #999;
  transform: rotateZ(-90deg);
}

#container {
  padding: 20px;
}

.h1 {
  font-size: 1.5rem;
  padding: 1rem 0;
  margin: 1rem 0;
  color: rgba(0, 0, 0, 0.7);
}

a {
  color: rgba(0, 0, 0, 0.5);
}

a:hover {
  color: rgba(0, 0, 0, 0.8);
}
.regist_zzc {
  width: 100%;
  height: 100%;
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
}
.zzc_con {
  width: 100%;
  background: white;
  position: absolute;
  bottom: 0;
  border-radius: 5px;
}
.zp1 {
  width: 100%;
  font-weight: bold;
  font-size: 20px;
  padding: 15px 0;
  text-align: center;
  border-bottom: 1px solid #999;
}
.zzc_cen {
  width: 100%;
  height: 200px;
  overflow: auto;
  padding:10px;
  letter-spacing: 3px;
}
.zp2 a{
  font-size: 13px;
  color: black;
  font-weight: bold;
  text-decoration: underline;
}
.zp3{
  margin-top: 10px;
}
.zp4{
  margin-bottom: 10px;
}
.zp5 a{
  font-weight: bold;
  color: black;
}
.zzc_last{
  padding: 10px;
}
.zp6{
  font-weight: bold;
}
.zp6 a{
    text-decoration: underline;
    color: #E93B3D;
}
.idea{
  width: 100%;
  display: flex;
  padding: 10px 0;
  justify-content: space-around;
}
.idea p{
  width: 40%;
  padding: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
}
.idea_agr{
  background: #E93B3D;
  color: white;
}
</style>

