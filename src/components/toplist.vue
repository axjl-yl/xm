<template>
  <div class="bigbox">
<div class="box">
  <div class="left">
    <img src="http://www.taoertao.com/images/web/new-logo.png">
  </div>
  <ul class="list">
    <li>首页</li>
    <li >优惠券</li>
    <li >拼多多券</li>
    <li >爱淘宝</li>
    <li class="a">大学生创业技术支持</li>
  </ul>
  <div>
    <span>登录</span>
    <span>注册</span>
  </div>
</div>
  </div>
</template>

<script>
    export default {
        name: "toplist",
      data(){
          return{

          }
      }
    }
</script>

<style scoped>
  .bigbox{
    width: 100%;
    background:#11cd6e ;
  }
  .list .a{
    width:150px;

  }
  .box{
    psdding:0 200px;
    width: 80%;
    margin: 0 auto;
    box-sizing: border-box;
    background-color: #11cd6e;
    height: 60px;
    display: flex;       /*  弹性盒*/
    align-items: center;
    justify-content: space-around;

  }
  .left{
    width: 20%;
  }
  .list{
    width: 50%;
    display: flex;
    justify-content:space-around;
    list-style: none;
  }
  .list li{
    width: 100px;
    line-height: 80px;
    text-align: center;
    font-size: 16px;
    color: #fff;
  }
  li:hover{
    background: #12dd76;
  }
  img{
    width: 110%;
    height:50px;
  }
  span{
    width: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    margin-left: 20px;
  }
</style>

