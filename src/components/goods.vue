<template>
  <div id="lay" style="width: 1200px; height: 1200px; " v-model="gq">
    <div id="lay1" style="width: 800px;float: left">
      <div id="ceng1" style="margin-left: -644px;margin-bottom: 9px">发布于:{{gq.goods.gtime}}<div style="margin-left: 600px;margin-top: -19px">想要</div></div>

      <div style="border-bottom: lightgray 1px solid"></div>
      <div style="height: 350px">
        <div id="div1" style="width: 350px;height: 300px;margin-top:20px;border: #11CD6E 1px solid;float: left">

          <el-carousel height="300px">
            <el-carousel-item v-for="(items,index) in gq.list" :key="index">
              <img :src="items" style="width:350px;height: 300px"/>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div style="height: 350px">
          <div style="margin-left: 50px"><h3>{{gq.goods.goodsname}}</h3></div>
          <div style="margin-right: 109px"><h6>价格&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;￥{{gq.goods.newprice}}</h6></div>
          <div style="margin-right: 109px"><h6>原价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;￥{{gq.goods.oldprice}}</h6></div>
          <div style="margin-right: 85px"><h6>交易地址&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{gq.goods.addr}}</h6></div>
          <div style="margin-right: 109px"><h6>卖家&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{gq.user.name}}</h6></div>
          <div style="margin-right: 85px"><h6>交易方式&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;线下交易</h6></div>
          <div style="margin-right: 85px">
            <el-popover placement="top" width="456" :trigger="hy"  >
            <el-table :data="lianxi">
              <el-table-column width="150" property="tel" label="手机号"></el-table-column>
              <el-table-column width="150" property="qq" label="QQ号"></el-table-column>
              <el-table-column width="150" property="wei" label="微信号"></el-table-column>
            </el-table>
            <el-button slot="reference"  type="text" @click="open"
              style="width: 140px;height: 50px;background-color: #11CD6E;color: white;font-size: 20px">联系卖家
            </el-button>
            </el-popover>
          </div>
          <div style="margin-right: -237px;margin-top: -49px">
            <el-button @click="onSubmit"
              style="width: 140px;height: 50px;background-color: #11CD6E;color: white;font-size: 20px">想要
            </el-button>
          </div>
        </div>
      </div>
      <div id="ceng2" style="height: 150px;margin-top: 60px">
        <div style="margin-left: -700px">
          <h3>商品描述</h3>
        </div>
        <div style="border-bottom: #11CD6E 2px solid;width: 800px"></div>
        <div style="width:500px;margin-top: 10px;color: darkgray;font-size: 16px">{{gq.goods.gdesc}}</div>
      </div>
      <div id="ceng3">
        <div style="margin-left: -700px">
          <h3>商品留言</h3>
        </div>
        <div v-model="message" style="border-bottom: #11CD6E 2px solid;width: 800px"></div>
        <textarea v-model="message.mess" placeholder="请输入留言内容"
                  style="width: 500px;height: 150px;border: #11CD6E 1px solid;margin-top: 30px;margin-left: -240px"></textarea>
      </div>
      <button @click="onSubmit1"
        style="margin-left: -649px;width: 80px;height: 40px;background-color: #11CD6E;outline: none;color: white">提交
      </button>
    </div>
    <div id="lay2">
<!--<img style="width: 300px;height: 800px" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3658916988,1031756248&fm=26&gp=0.jpg">-->
       <div id="lay2-1">
         <div style="height:101px;margin-bottom:15px;margin-top:15px;" class="row">
           <a href="http://www.so.com/s?src=lm&amp;ls=sm2254546&amp;lmsid=e875ddf01911c582&amp;lm_extend=ctype%3A7%7Clmbid%3A201%7Cjt%3A2%7Cmaxbid%3A4456453%2C4456961%2C4456982%2C4456457%2C4390929%2C4390931%2C4390951%7Csadspace%3A&amp;q=%E4%BA%8C%E6%89%8B%E7%BD%91"       title="二手网" >
           <img src="http://p3.qhimgs0.com/sdm/280_200_/t016ce2946c20034d41.jpg" height="100" width="150"    data-animate="_" class="animated">
           <p>二手网</p></a>
           <a href="http://www.so.com/s?src=lm&amp;ls=sm2254546&amp;lmsid=e875ddf01911c582&amp;lm_extend=ctype%3A7%7Clmbid%3A201%7Cjt%3A2%7Cmaxbid%3A4456453%2C4456961%2C4456982%2C4456457%2C4390929%2C4390931%2C4390951%7Csadspace%3A&amp;q=%E4%BA%8C%E6%89%8B%E4%B9%A6%E7%BD%91" target="_blank" title="二手书网" >
             <img src="http://p3.qhimgs0.com/sdm/280_200_/t013a4096f7b94327c7.jpg"  height="100" width="150" data-animate="_" class="animated"><p>二手书网</p></a></div>
       </div>
      <div id="lay2-2">
        <a>推荐货品</a></div>
      <div id="lay2-3">
        <div id="lay20">
          <a href="https://detail.tmall.com/item.htm?spm=a220m.1000858.1000725.11.449d5ee8elwwgX&id=592499666340&skuId=4611686610927054244&areaId=610500&standard=1&user_id=859515618&cat_id=2&is_b=1&rn=500a5de19fcd9c9e753a17a8b1f42f72">
            <img src="https://img.alicdn.com/bao/uploaded/i7/TB1PBFRsmMmBKNjSZTEQfasKpXa_013752.jpg" height="170" width="250"/><p>小说</p>
          </a>
        </div>
        <div id="lay21">
          <a href="https://detail.tmall.com/item.htm?spm=a220m.1000858.1000725.1.74125744n3ksCB&id=557321024222&skuId=4611686575748412126&areaId=610500&user_id=2940647350&cat_id=2&is_b=1&rn=3d6e384c95f32872e7073e6b2315deef">
            <img src="https://img.alicdn.com/bao/uploaded/i2/2940647350/O1CN01yhpUUl24ALenaxtfQ_!!2940647350.jpg"height="170" width="250"/><p>小鼠猫</p>
          </a>
        </div>
        <div id="lay22">
          <a href="https://detail.tmall.com/item.htm?spm=a220m.1000858.1000725.4.44cd1522x5pl4p&id=588489805224&skuId=4103491512506&areaId=610500&user_id=3360749321&cat_id=2&is_b=1&rn=77feaed1f5fdd3724a161fb6c55a9974">
            <img src="https://img.alicdn.com/bao/uploaded/i4/3360749321/O1CN012doOxK2Ij4G9Y8yFW_!!0-item_pic.jpg"height="170" width="250"/><p>哈士奇</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    data(){
      return{
        gq:{
          goods:{},
          user:{},
          list:[]
        },
        lianxi:[
          {
            tel:'',
            qq:'',
            wei:'微信手机同号'
          }
        ],message:{
          mess: '',
          uid:'',
          gid:''
        }
        , hy: ''
      }
    },
    methods:{
      onSubmit:function () {
        axios.get("http://localhost:8000/addwant/"+this.gq.goods.id).then(res=>{
          if (res.data!=null){

          }
        })
      },
      onSubmit1:function () {
        axios.post("http://localhost:8000/mess",this.message).then(res=>{
          if (res.data!=null){
            this.find()
          }
        })
      },
      open:function () {
        var zhifu=this.gq.user.zhifu;
        if(zhifu==0){
          this.$confirm('你还不是会员，无法查询该信息，是否充值会员', '提示', {
            confirmButtonText: '是',
            cancelButtonText: '否',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '正在准备跳转支付页面!'
            });
            axios.post("http://localhost:8000/pay",this.gq.user).then(res => {
              this.htmls = res.data;
              let routerData = this.$router.resolve({path: '/applytext', query: {htmls: this.htmls}})
              //打开新页面
              window.open(routerData.href, '_ blank');
              const div = document.createElement('div');
              div.innerHTML = this.htmls;
              document.body.appendChild(div);
              //document.forms[0].submit();
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消支付'
            });
          });

        }else {
          var s='click'
          this.hy=s
        }
      },
      find:function () {
        var id=this.$route.params.id;
        axios.get("http://localhost:8000/shops/"+id).then(res=>{
          this.gq=res.data;
          this.lianxi[0].tel=res.data.user.tel;
          this.lianxi[0].qq=res.data.user.qq;
          this.message.uid=res.data.user.id;
          this.message.gid=res.data.goods.id;
        })
      }
    }
    ,
    mounted(){
     this.find()
    }
  }
</script>
<style>
  #app{
   background: aliceblue;
  }
  a{
    text-decoration: none;
  }
  #lay{
   background: #E8F0EF;
     margin: auto;
  }
  #lay1{
    background: #F5EBE2;
    height: 1050px;
    /*border: 1px solid #000;*/
  }
  #lay2{
    background: blue;
    height: 1050px;
  }
  #lay2-1{
    background: #F9EEF4;
    height: 300px;
  }
  #lay2-2{
    background: #02DF82;
    height: 100px;
    font-size: 70px;
  }
  #lay2-2 a{
    color: aliceblue;
  }
  #lay2-3{
   background: cadetblue;
    height: 650px;
  }
  #lay20,#lay21,#lay22{
    background: #F9EEF4;
    height: 216px;
  }
  #div1 img{
    cursor: pointer;
    transition: all 0.6s;
  }
  #div1 img:hover{
    transform: scale(2);
  }
</style>
