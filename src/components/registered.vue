<template xmlns:el-col="http://www.w3.org/1999/html">
  <div>
    <el-row style="background-color: #11CD6E;height: 150px"/>
    <el-row style="background-color: #11CD6E">
      <el-col :span="4" :offset="2">
        <div><img src="http://www.taoertao.com/images/web/new-logo.png" width="100%"></div>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
    <el-row style="background-color: #11CD6E;height: 100px"/>
    <!--第4层 主要部分-->
    <el-row>
      <!--左部分-->
      <el-col :span="6">
        <!--左上部分-->
        <el-row style="background-color: #11CD6E ;height: 200px;"/>
        <!--左下部分-->
        <el-row style="background-color: #F2F2F2;"/>

      </el-col>
      <!--主要部分-->
      <!--主要部分 左部分-->
      <el-col :span="7">
        <el-row style="top: 120px;color: #11CD6E;">
          <el-col :span="12" :offset="2" style="font-size: 25px ;">手机号注册</el-col>
        </el-row>
        <el-row style="top: 130px;">
          <el-col :span="10" :offset="2" style="background-color: #11CD6E;height: 3px ;top: 230px;"></el-col>
          <el-col :span="10" style="background-color: #000;height: 1px ;top: 2px;"></el-col>
        </el-row>
        <el-row style="top: 150px;">
          <div class="form">
            <el-form :label-position="labelPosition" label-width="80px" :model="user">
              <el-form-item>
                <el-input v-model="user.tel" placeholder="请输入常用手机号"></el-input>
              </el-form-item>

              <el-form-item>

                <el-row>
                  <el-col :span="12">
                    <el-input v-model="user.yzm" placeholder="请输入图形验证码"></el-input>
                  </el-col>
                  <el-col :span="12"><img :src=imgurl @click="getVerificode"></el-col>
                </el-row>
              </el-form-item>
              <el-form-item>


                <el-row>
                  <el-col :span="12">
                    <el-input v-model="user.telyam" placeholder="请输入短信验证码"></el-input>
                  </el-col>
                  <el-col :span="12">
                    <button
                      style="background-color: #11CD6E ;color: #fff;width: 100%;height: 100%;border: solid 10px #11CD6E;font-size: 15px">
                      获取验证码
                    </button>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item>
                <el-input v-model="user.pass" placeholder="请输入密码"></el-input>
              </el-form-item>
              <el-row>

                <el-col :span="24">
                  <el-checkbox/>
                  我已阅读并同意《淘二淘用户协议》
                </el-col>
              </el-row>
              <el-form-item>
                <el-row style="top: 20px">
                  <el-button type="primary" @click="onSubmit" style="width: 100%;background-color: #11CD6E;">注册
                  </el-button>
                </el-row>
              </el-form-item>
            </el-form>
          </div>
        </el-row>
      </el-col>
      <!--主要部分 右部分-->
      <el-col :span="5">
        <el-row style="top: 200px">
          <div style="font-size: 20px">已有淘二淘账号：</div>
        </el-row>
        <el-row style="top: 200px">
          <div style="font-size:20px;color: #11CD6E;">
            <router-link :to="{name:'login'}" style="text-decoration: none">立即登陆</router-link>
          </div>
        </el-row>
      </el-col>
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
  import axios from 'axios'

  export default {
    name: "registered",
    data() {
      return {
        user: {tel: '', yzm: '', telyam: '', pass: ''},
        yzm: {img: ''},
        dxyzm: {},
        imgurl: 'http://localhost:8000/getVerifiCode',
      }
    }, created: function () {
      this.$emit('header', false);
      this.$emit('footer', false);
    }, methods: {
      getVerificode: function () {
        var num = Math.ceil(Math.random() * 10);//生成一个随机数（防止缓存）
        this.imgurl = "http://localhost:8000/getVerifiCode?" + num;
      },
      onSubmit: function () {
        alert(this.user.yzm);
        alert(this.user.telyam);
        var params = new URLSearchParams();
        params.append("tel", this.user.tel);
        params.append("yzm", this.user.yzm);
        params.append("telyam", this.user.telyam);
        params.append("pass", this.user.pass)
        axios.post("http://localhost:8000/regist",params).then(function (res) {
          alert(res.data);
        })
      }
    }

  }
</script>

<style scoped>

</style>
