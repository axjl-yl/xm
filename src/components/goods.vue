<template>
  <div id="lay" style="width: 1200px;height:1200px;margin-left: 100px">
    <div id="lay1" style="width: 800px;float: left">
      <div id="ceng1" style="margin-left: -644px;margin-bottom: 9px">发布于:<div style="margin-left: 600px;margin-top: -19px">想要</div></div>

      <div style="border-bottom: lightgray 1px solid"></div>
      <div style="height: 350px">
        <div id="div1" style="width: 350px;height: 300px;margin-top:20px;border: #11CD6E 1px solid;float: left">

          <el-carousel height="300px">
            <el-carousel-item v-for="(items,index) in items" :key="index">
              <img  :src="items" style="width:350px;height: 300px"/>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div style="height: 350px">
          <div style="margin-left: 50px"><h3>欧美大牌时尚风虎头字母卫衣</h3></div>
          <div style="margin-right: 209px"><h6>价格</h6></div>
          <div style="margin-right: 209px"><h6>原价</h6></div>
          <div style="margin-right: 185px"><h6>交易地址</h6></div>
          <div style="margin-right: 209px"><h6>卖家</h6></div>
          <div style="margin-right: 185px"><h6>交易方式</h6></div>
          <div style="margin-right: 85px">
            <el-popover
              placement="right"
              width="400"
              trigger="click">
            <el-table :data="gridData">
              <el-table-column width="150" property="tel" label="手机号"></el-table-column>
              <el-table-column width="100" property="qq" label="QQ号"></el-table-column>
              <el-table-column width="100" property="wei" label="微信号"></el-table-column>
            </el-table>
            <el-button slot="reference"
              style="width: 140px;height: 50px;background-color: #11CD6E;color: white;font-size: 20px">联系卖家
            </el-button>
            </el-popover>
          </div>
          <div style="margin-right: -237px;margin-top: -49px">
            <el-button
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
        <div style="width:500px;margin-top: 10px;color: darkgray;font-size: 16px">动力装置产生前进的推力或拉力，由机身的固定机翼产生升力，在大气层内飞行的重于空气的航空器</div>
      </div>
      <div id="ceng3">
        <div style="margin-left: -700px">
          <h3>商品留言</h3>
        </div>
        <div style="border-bottom: #11CD6E 2px solid;width: 800px"></div>
        <textarea placeholder="请输入留言内容"
                  style="width: 500px;height: 150px;border: #11CD6E 1px solid;margin-top: 30px;margin-left: -240px"></textarea>
      </div>
      <button
        style="margin-left: -649px;width: 80px;height: 40px;background-color: #11CD6E;outline: none;color: white">提交
      </button>
    </div>
    <div id="lay2" style="width: 300px;height: 800px;float: left;margin-left: 50px">
<img style="width: 300px;height: 800px" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3658916988,1031756248&fm=26&gp=0.jpg">
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        items: [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        ], gridData: [{
          tel: 13526565985,
          qq:35636256,
          wei:'手机微信同号'
        }]
      }
    }
  }
</script>

<style>
  #div1 img{
    cursor: pointer;
    transition: all 0.6s;
  }
  #div1 img:hover{
    transform: scale(2);
  }

</style>
