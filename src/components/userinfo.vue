<template>
  <div class="output">
    <div class="header"></div>
    <div class="main">
      <div class="left"></div>
      <div class="middle">
        <div class="left1">
          <div class="user">
            <div class="user_pic">
              <img src="http://res.new.taoertao.com/upload/goods/20194/upload_d68187f5710ee1f91968fc32733bc579.jpg?imageView2/1/w/500/h/500/q/100"style="width: 132px;height: 132px">
            </div>
            读取用户名
          </div>
          <div class="mulu">
            <router-link to="/personal" style='text-decoration:none;color:black'>我发布的</router-link>
          </div>
          <div class="mulu">
            <router-link to="/want" style='text-decoration:none;color:black'>我想要的</router-link>
          </div>
          <div class="mulu">
            <router-link to="/message" style='text-decoration:none;color:black'>我的留言</router-link>
          </div>
          <div class="mulu">
            <router-link to="/userinfo" style='text-decoration:none;color:black'>个人信息</router-link>
          </div>
          <div class="mulu">
            <router-link to="/ren" style='text-decoration:none;color:black'>实名认证</router-link>
          </div>
          <div class="mulu">
            <router-link to="/help" style='text-decoration:none;color:black'>意见反馈</router-link>
          </div>

        </div>
        <div class="right">
          <el-form :model="user" status-icon :rules="rules" ref="user" label-width="100px" class="demo-ruleForm">
          <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple" style="line-height: 102px"></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">
              <el-form-item lable="头像" prop="photo">
                <input v-model="imageUrl" STYLE="height: 102px;width: 102px"></input>
                <el-upload
                  class="avatar-uploader"
                  action="api/add/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
            </div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">

            </div></el-col>
          </el-row>

            <div class="ni">
              <el-input type="hidden" name="id" v-modle="user.id"></el-input>
            <el-form-item label="昵称" prop="name">

              <el-input type="text" name="name" v-model="user.name" autocomplete="off"></el-input>
            </el-form-item>
            </div>
            <div class="ge">
            <el-form-item label="个性签名" prop="sign">
              <el-input type="text"  v-model="user.sign" name="sign" autocomplete="off"></el-input>
            </el-form-item>
            </div>
            <div class="xing">
            <el-form-item label="性别" prop="sex">
              <el-radio v-model="user.sex" label="男" name="sex" >男</el-radio>
              <el-radio v-model="user.sex" label="女" name="sex" >女</el-radio>
            </el-form-item>
            </div>
            <div class="bao">
            <el-form-item>
              <el-button type="primary" @click="submitForm('user')">保存</el-button>
            </el-form-item>
            </div>
          </el-form>
        </div>
      </div>
    </div>
    <div class="foot"></div>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {

      name: "userinfo",
      data() {
        return {
          input: '',
          input1: '',
          sex: '',
          value1: '',
          imageUrl: '',
          user:{}
        }

      },
      methods: {
      handleAvatarSuccess(res, file)
      {
        this.imageUrl = URL.createObjectURL(file.raw);
        alert(this.imageUrl)
      },

      beforeAvatarUpload(file)
      {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
        submitForm:function (formName) {
        alert(this.user.name)
          axios.post("http://localhost:8000/addtou",this.user).then(res=>{
            a=res.data;
            alert(a)

          })
        },
        findbyid:function (uid) {
          axios.get("http://localhost:8000/findbyid/"+16).then(res=>{
           this.user= res.data
          })
        }
      },
      mounted(){
        this.findbyid()
      }
    }

</script>

<style scoped>
  .header{
    width: 1879px;
    height:60px;
    border:1px solid #fff;
  }
  .main{
    width: 1879px;
    height:584px;
    border:1px solid #fff;
    background: rgba(0, 0, 0, 0.09);
  }
  .left{
    width: 390px;
    height:584px;
    border:1px solid #fff;
    float:left;
  }

  .middle{
    width: 1100px;
    height:584px;
    border:1px solid #fff;
    float:left;
    background: rgba(0, 0, 0, 0.09);
  }
  .left1{
    width: 222px;
    height:554px;
    border:1px solid #fff;
    float:left;
    background: white;
  }
  .user{
    width: 180px;
    height:208px;
    border:1px solid #fff;
    margin-left: 19px;
  }
  .user_pic{
    width: 132px;
    height:132px;
    border:1px solid rgba(0, 0, 0, 0.25);
    margin-left: 22px;
  }
  .mulu{
    width: 180px;
    height:42px;
    border:1px solid #fff;
    line-height: 42px;
    margin-left: 19px;
  }

  .right{
    width: 853px;
    height:554px;
    border:1px solid #fff;
    margin-left: 20px;
    background: white;
    float:left;
  }
  .text{
    width: 853px;
    height:554px;
    border:1px solid #fff;
  }
  .pic{
    width: 102px;
    height:102px;
    border:1px solid rgba(0, 0, 0, 0.19);
    margin-left: 10px;
  }

  .foot{
    width: 1879px;
    height:182px;
    border:1px solid #fff;
  }
  a:link{
    color: #000;
  }
  .el-row {
    margin-bottom: 10px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #fff;
  }
  .bg-purple {
    background: #fff;
  }
  .bg-purple-light {
    background: #fff;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 102px;
  }
  .grid-content1 {
    border-radius: 4px;
    min-height: 38px;
  }
  .grid-content2 {
    border-radius: 4px;
    min-height: 102px;
  }
  .row-bg {
    padding: 10px;
    background-color: #f9fafc;
  }
  .el-button{
    background-color: #0cf37f;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 102px;
    height: 102px;
    line-height: 102px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .ni{
    width: 300px;
    height: 40px;
    border:1px solid #fff;
  }
  .ge{
    width: 500px;
    height: 40px;
    margin-top: 20px;
    border:1px solid #fff;
  }
  .xing{
    width: 300px;
    height: 40px;
    margin-top: 20px;
    border:1px solid #fff;
  }
  .bao{
    width: 170px;
    height: 40px;
    margin-top: 20px;
    border:1px solid #fff;
  }

</style>
