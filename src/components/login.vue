<template xmlns:el-col="http://www.w3.org/1999/html">
  <div>
    <el-row style="background-color: #11CD6E;height: 150px"/>
    <el-row style="background-color: #11CD6E">
      <el-col :span="4" :offset="2">
        <div><img src="http://www.taoertao.com/images/web/new-logo.png" width="100%"></div>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
    <el-row style="background-color: #11CD6E;height: 80px"/>
    <!--第4层 主要部分-->
    <el-row>
      <!--左部分-->
      <el-col :span="6">
        <!--左上部分-->
        <el-row style="background-color: #11CD6E ;height: 150px;"/>
        <!--左下部分-->
        <el-row style="background-color: #F2F2F2;"/>

      </el-col>
      <!--主要部分-->
      <!--主要部分 左部分-->
      <el-col :span="7">

        <el-row style="top: 80px;">
          <div class="form">
            <el-form :label-position="labelPosition" label-width="80px" :model="user">
              <el-form-item>
                <el-input v-model.number="user.tel" placeholder="请输入手机号/邮箱"></el-input>

              </el-form-item>

              <el-form-item>
                <el-input v-model="user.pass" placeholder="请输入密码" show-password="true"></el-input>
              </el-form-item>
              <el-row>
                <el-col :span="5" :offset="19" style="color: #11CD6E">忘记密码？</el-col>
              </el-row>
              <el-form-item>
                <el-row style="top: 20px">
                  <el-button type="primary" @click="onSubmit" style="width: 100%;background-color: #11CD6E;">登陆
                  </el-button>
                </el-row>
              </el-form-item>
            </el-form>
          </div>
        </el-row>
      </el-col>
      <!--主要部分 右部分-->
      <div style="border-left: solid 1px #000 ;">
        <el-col :span="5">
          <el-row style="top: 200px">
            <div style="font-size: 20px">没有淘二淘账号：</div>
          </el-row>
          <el-row style="top: 200px">
            <div style="font-size:20px;color: #11CD6E;">
              <router-link :to="{name:'registered'}" style="text-decoration: none;">立即注册</router-link>

            </div>
          </el-row>
        </el-col>
      </div>
      <!--右部分-->
      <el-col :span="6">
        <!--右上部分-->
        <el-row style="background-color: #11CD6E ;height: 200px;"/>
        <!--右下部分-->
        <el-row style="background-color: #F2F2F2;"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ElColorPickerDropdown from "element-ui/packages/color-picker/src/components/picker-dropdown";
  import axios from "axios"

  export default {
    name: "login",
    data() {
      return {
        user: {
          tel: "",
          pass: ""
        },
        yzm: {img: ''}

      }
    }, compouted: {
      errors() {
        console.log(this.$vuerify);
        return this.$vuerify.$errors;//显示错误信息
      }
    }, vuerify: {
      'user.pass': {
        test: /\w{6,}/,
        message: '至少6位字符',
      },
      'user.tel': 'tel',
    },
    created: function () {
      this.$emit('header', false);
      this.$emit('footer', false);
    }
    ,
    methods: {
      onSubmit: function () {

        if (!(/^1[34578]\d{9}$/.test(this.user.tel))) {
          alert("手机号格式不正确");
          return false;
        }
        if (this.user.pass == null) {
          alert("密码必填");
          return false;
        }
        /*alert(this.user.tel); */
        var params = new URLSearchParams();
        params.append('tel', this.user.tel);
        params.append('pass', this.user.pass)
        axios.post("http://localhost:8000/login", params).then(function (res) {
            alert(res.data.success);
            if (res.data.success == 'true') {
              alert("hello");
              this.$router.push({naem:'topsearch'});
              //this.$router.push({path:'/'});
            } else {
              alert(res.data.error);
            }
          }
        )
      }
    }

  }
</script>

<style scoped>

</style>
