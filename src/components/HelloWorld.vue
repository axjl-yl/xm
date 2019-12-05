<template xmlns:el-col="http://www.w3.org/1999/html">
  <div id="Container">
    <router-view></router-view>
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-row class="tac">
            <el-col :span="12">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                style="left: 115px">
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title" @click="infunlei(1)">手机</span>
                </el-menu-item>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title" @click="infunlei(2)">电脑</span>
                </el-menu-item>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title" @click="infunlei(3)">配件</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon-menu"></i>
                  <span slot="title" @click="infunlei(4)">电器</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-menu"></i>
                  <span slot="title" @click="infunlei(5)">书籍</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-menu"></i>
                  <span slot="title" @click="infunlei(6)">娱乐</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-menu"></i>
                  <span slot="title" @click="infunlei(7)">运动</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-menu"></i>
                  <span slot="title" @click="infunlei(8)">代步</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <div class="Shuffling">
            <!--<span class="demonstration">Click 指示器触发</span>-->
            <el-carousel trigger="click" height="200px">
              <el-carousel-item v-for="(item,index) in imgs" :key="index">
                <img :src=item.pic style="width: 600px;height: 200px ;border-radius:5px">
              </el-carousel-item>
            </el-carousel>
          </div>
          <div style="background-color: #ffffff;height: 50px;line-height:50px">
            <el-row>
              <el-col :span="2">
                <div @click="tuijian(1)">推荐</div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-purple-dark" @click="zuixin()">最新</div>
              </el-col>
              <el-col :span="4" :offset="16">
                <div class="grid-content bg-purple-dark"><i class="el-icon-circle-plus-outline"></i> 发布信息</div>
              </el-col>
            </el-row>
          </div>
        </div>
        <el-row style="top: 20px">
          <el-col :span="8" v-for="(good,index) in goods" :key="index" @click="ingoods(this.goods.id)">
            <!---v-for-->
            <div>
              <el-row>
                <div style="background-color: #ffffff">
                  <el-col :span="24">
                    <img
                      :src="good.img"
                      width="100%" height="100%"/>
                    <div>{{good.goodsname}}</div>
                  </el-col>
                  <div>
                    <el-row>
                      <el-col :span="6">
                        <div style="color: red;font-style:oblique">{{good.newPrice}}</div>
                      </el-col>
                      <el-col :span="12" :offset="6">
                        <div style="color: grey;size: 6px">发布于7天前</div>
                      </el-col>
                    </el-row>
                  </div>
                </div>

              </el-row>

            </div>

          </el-col>
        </el-row>
        <div class="block" style="top: 50px;">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </el-col>


      <el-col :span="4">
        <!--  <div class="grid-content bg-purple-light"></div>-->
        <div>
          <div style="background-color: #ffffff">
            <el-row>
              <el-col :span="5">
                <div style="top: 20px;"><img src="http://www.taoertao.com/images/web/weibo.png" width="100%"></div>
                <div><img src="http://www.taoertao.com/images/web/weixin.png" width="100%" height="100%"/></div>
              </el-col>
              <el-col :span="19">
                <div><img src="http://www.taoertao.com/images/web/weixin_code.jpg" width="100%" height="100%"></div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <div style="size: 14px;color: #11CD6E">手机APP下载</div>
              </el-col>
            </el-row>
            <div>
              <el-row>
                <el-col :span="24">
                  <div style="size: 14px;color: green;border: green 3px solid;">Download</div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div style="top:20px;background-color: #ffffff">
            <el-row>
              <el-col :span="24">
                <div style="color: green;size: 50px;width: auto"><h3>优惠卷</h3></div>
              </el-col>
              <el-col :span="24">
                <div style="color: #11CD6E;size: 50px;width: auto;border:#000 solid 1px;height: 50px;line-height: 50px">
                  二手网
                </div>
              </el-col>
              <el-col :span="24">
                <div
                  style="color: #11CD6E;size: 50px;width: auto;border: #000 solid 1px;height: 50px;line-height: 50px">
                  大学生二手网
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <div>
                  <img
                    src="http://res.new.taoertao.com/upload/goods/201911/upload_f4aff76a2d23404f8eb96761fc74013b.jpg?imageView2/1/w/500/h/500/q/100"
                    width="100%" height="100%"/>
                  <div>鞋子</div>
                  <el-row>
                    <el-col :span="8" style="color: #f00;border: #f00 solid 1px">￥26.80</el-col>
                    <el-col :span="12" style="color: grey;text-decoration: line-through">$168.00</el-col>
                    <el-col :span="4" style="border: dashed 1px #f00;color: #f00">领券</el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>

  <!--尾部-->


</template>

<script>
  import axios from 'axios'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        imgs: [],
        goods: []
      }
    }, created: function () {
      this.$emit('header', true);
      this.$emit('footer', true);
    }, methods: {
      tuijian: function (res) {
        var _this = this
        axios.get("http://localhost:8000/tuijian/").then(function (res) {
          _this.goods = res.data;

        });
      },
      zuixin: function (res) {
        var _this = this
        axios.get("http://localhost:8000/zuixin").then(function (res) {
          _this.goods = res.data;
        });
      }, ingoods: function (res) {
        alert(res);
        this.$router.push("/goods/" + res);
      }, infunlei: function (res) {
        this.$router.push("/shang/" + res);
      }
    }
    , mounted() {
      this.tuijian(1);
      var _this = this;
      axios.get("http://localhost:8000/lbt").then(function (res) {
        alert(res.data);
        _this.imgs = res.data;
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #Container {
    background-color: #F2F2F2;
  }
</style>
