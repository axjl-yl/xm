<template>
  <div class="output" v-model="arr">
    <div class="header"></div>
    <div class="main">
      <div class="left"></div>
      <div class="middle">
        <div class="left1">
          <div class="user">
            <div class="user_pic">
              <img :src="arr.photo" style="border-radius: 65px" width="130px" >
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
          <ul>
            <li v-for="(item,index) in arr.list" style=list-style-type:none>

              <div class="r_middle">
                <div class="r_top">
                  <div class="time">发布时间:{{item.gtime}}</div>
                </div>

                <div class="goods_pic">
                <img :src="item.img"
                width="100px">
                </div>
                <div class="goods_info">
                <div class="goods_name">{{item.goodsname}}</div>
                <div class="good_price">￥:{{item.newprice}}
                </div>
                </div>
                <div class="del"><el-button plain @click="open(uid,item.id)">删除</el-button></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="foot"></div>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "personal",
      data(){
          return{
            arr:{
              photo:'',
              list:[]
            }
          }
      },
      methods:{
        finduser:function (uid) {
          var _this=this
          axios.get("http://localhost:8000/touxiang/"+1).then(res=>{
            _this.arr=res.data
          })
        },
        open:function (uid,gid) {

          var _this = this
          this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            axios.get("http://localhost:8000/delfabu/" + "1" + "/" + gid).then(function (res) {
              _this.finduser()
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        }
      },
      mounted(){
        this.finduser()
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
  .active{
    line-height: 42px;
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
    height:20px;
    border:1px solid #fff;
    margin-top: -20px;

    background: white;
  }
  .time{
    width: 199px;
    height:19px;
    border:1px solid #fff;

    margin-left: 15px;

  }
  .r_middle{
    width: 850px;
    height:122px;
    border:1px solid #fff;
    margin-left: -40px;
    float: left;
    background: white;
  }
  .goods_pic{
    width: 102px;
    height:102px;
    border:1px solid #fff;
    margin-top: 10px;
    margin-left: 8px;
    float: left;
  }
  .goods_info{
    width: 120px;
    height:100px;
    border:1px solid #fff;
    margin-top: 10px;
    margin-left: 128px;
  }
  .goods_name{
    width: 100px;
    height:20px;
    margin-top: 10px;
    border:1px solid #fff;
    float: left;
  }
  .good_price{
    width: 100px;
    height:27px;
    margin-top: 70px;
    border:1px solid #fff;
  }
.del{
  width: 150px;
  height:100px;
  margin-top: -105px;
  margin-left: 700px;
  border:1px solid #fff;
  float: left;
  line-height: 100px;
}
  .foot{
    width: 1879px;
    height:182px;
    border:1px solid #fff;
  }
  a:link{
    color:#fff;
    text-decoration: none;
  }
</style>
