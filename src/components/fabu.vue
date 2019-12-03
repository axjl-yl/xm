<template>
  <div id="lay">
    <div id="lay1">
      <div style="background-color:#e2e2e2;height: 30px "></div>

      <div><h2>发布商品</h2></div>
      <div style="background-color:#e2e2e2;height: 30px "></div>
      <div id="lay2">
        <el-form ref="form" :model="goods" label-width="80px" enctype="multipart/form-data" method="post">
          <el-form-item label="选择城市" style="margin-top: 30px">
            <div style="float: left">
              <el-select v-model="region" placeholder="请选择">
                <el-option label="全国" value="全国"></el-option>
                <el-option label="西安" value="西安"></el-option>
                <el-option label="深圳" value="深圳"></el-option>
                <el-option label="上海" value="上海"></el-option>
              </el-select>
            </div>
            <div style="margin-left: 220px;margin-top: -31px"><h6>注：没有找到对应城市时，请选择“全球”</h6></div>
          </el-form-item>
          <div style="width: 300px;margin-top: -30px">
          <el-form-item label="商品名称">
            <el-input v-model="goods.name" name="goodsname" placeholder="请输入商品名称"></el-input>
          </el-form-item></div>
          <el-form-item label="商品详情">
            <el-input type="textarea" name="desc" v-model="goods.desc"></el-input>
          </el-form-item>
              <el-form-item label="价格">
                <el-input v-model="goods.newprice"  placeholder="请输入价格" name="newprice">元</el-input>
              </el-form-item>


              <el-form-item label="原价">
                <el-input v-model="goods.oldprice" placeholder="请输入原价" name="oldprice">元</el-input>
              </el-form-item>

          <el-form-item label="分类">
            <div style="margin-right: 209px">
            <el-select v-model="goods.no" name="no" placeholder="请选择分类">
              <el-option label="手机" value="1"></el-option>
              <el-option label="电脑" value="2"></el-option>
              <el-option label="配件" value="3"></el-option>
              <el-option label="电器" value="4"></el-option>
              <el-option label="书籍" value="5"></el-option>
              <el-option label="娱乐" value="6"></el-option>
              <el-option label="运动" value="7"></el-option>
              <el-option label="代步" value="8"></el-option>
            </el-select></div>
          </el-form-item>

          <el-form-item label="交易方式">
            <div style="margin-right: 227px">
            <el-radio-group v-model="fs">
              <el-radio label="在线交易"></el-radio>
              <el-radio label="线下交易"></el-radio>
            </el-radio-group></div>
          </el-form-item>
          <el-form-item label="交易地址">
            <el-input v-model="goods.addr" name="addr" placeholder="请输入交易地址"></el-input>
          </el-form-item>
          <el-form-item label="QQ号">
            <el-input v-model="goods.qq" name="qq" placeholder="请输入QQ号"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">确认发布</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    name: "",
    data(){
      return{
        goods:{},
        region:'',
        fs:''
      }
    },
    methods:{
      onSubmit:function () {
        axios.post("http://localhost:8000/sadd",this.goods).then(res=>{
          if (res.data!=null){
            this.$router.push("/")
          }
        })
      }
    }
  }
</script>

<style scoped>
  #lay {
    width: 1300px;
    height: 1300px;
    background-color:#e5e5e5;
    margin-top: -60px;
  }

  #lay1 {
    width: 1000px;
    height: 900px;
    margin-left: 148px;
    background-color: white;

  }

  #lay2 {
    width: 500px;
    margin-left: 90px;
  }
</style>
