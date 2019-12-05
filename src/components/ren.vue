<template>
  <div class="output">
    <div class="header"></div>
    <div class="main">
      <div class="left"></div>
      <div class="middle">
        <div class="left1">
          <div class="user">
            <div class="user_pic">
              <img src="http://res.new.taoertao.com/upload/goods/20194/upload_d68187f5710ee1f91968fc32733bc579.jpg?imageView2/1/w/500/h/500/q/100" style="border-radius: 65px" width="130px" >
            </div>
            读取用户名
          </div>
          <div class="mulu">
            <router-link to="/personal" style='text-decoration:none;color:black'>我发布的</router-link>
          </div>
          <div class="mulu">
            <!--<a href="/want" class="active" style='text-decoration:none' >我想要的</a>-->
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


        </div>
      </div>
    </div>
    <div class="foot"></div>
  </div>
</template>

<script>
    export default {
        name: "ren",
      data(){
          return{
            arr:{"1":2014}
          }
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
    background: rgba(0, 0, 0, 0.09);;
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
    width: 135px;
    height:135px;
    border:1px solid #fff;
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
    height:163px;
    border:1px solid #fff;
    margin-left: 20px;
    float:left;
  }
  .r_top{
    width: 850px;
    height:41px;
    border:1px solid #fff;
    margin-top: -20px;
    margin-left: -40px;
    background: white;
  }
  .foot{
    width: 1879px;
    height:182px;
    border:1px solid #fff;
  }
  a:link{
    color:#000;
  }
</style>
