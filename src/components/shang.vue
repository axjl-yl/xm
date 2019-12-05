<template>
  <div class="outer" v-model="goods">
    <div style="  width: 100%;background:#ffffff ; height:85px;">
      <div class="box">
        <div class="left">
          <form name="form_name" style="width: 65px">
            <select name="select_name" onChange="ShowToText(); "
                    style="width: 70px;height: 45px;border: solid 4px #12dd76;border-radius: 6px ">
              <option value="1">全球</option>
              <option value="2">北京</option>
              <option value="3">上海</option>
              <option value="4">广州</option>
              <option value="4">深圳</option>
              <option value="4">杭州</option>
              <option value="4">郑州</option>
              <option value="4">成都</option>
              <option value="4">西安</option>
            </select><br>
          </form>
        </div>
        <div class="put">
          <input placeholder="请输入关键词" type="text"
                 style="border: solid 4px #12dd76 ;width: 350px;height: 35px;right: 20px;border-radius: 6px ">

        </div>
        <div class="sou">
          <el-button type="primary" icon="el-icon-search"
                     style="width: 100px;background-color: #12dd76;margin-left: -9px">搜索
          </el-button>
        </div>
        <div class="right">
          <el-button type="primary" icon="el-icon-edit" style="background-color: #12dd76">发布二货</el-button>
        </div>
      </div>
    </div>
              <div class="b">
                <div class="b1">
                  <a class="" href="">全部分类</a>
                  <a class="active" href="http://localhost:8080/#/shang">手机</a>
                  <a class="" href="">电脑</a>
                  <a class="" href="">配件</a>
                  <a class="" href="">电器</a>
                  <a class="" href="">书籍</a>
                  <a class="" href="">娱乐</a>
                  <a class="" href="">活动</a>
                </div>
                <div class="b2"></div>
                      <div class="b3">
                                     <div class="b33">
                  <ul class="b3-1">
                        <a href="https://click.simba.taobao.com/cc_im?spm=a2e15.8261149.07626516002.7&p=%CA%D6%BB%FA&s=314848180&k=589&clk1=2f4640ebbc36af236efd5e02d32fa336&e=xULqm0A8N46xUeQX2pXsdx3Z0ZWQMzvrXyK3PCne%2Fgx2T1qESAQ1b7dVqAZJhj1x3eaSCkKWKAlxsAfFxemKO7o6AW27oicUwhod9%2BoUJHWx%2BWF14j8vvqfEyBs3%2Bg2t0FVXCIyi7eEZkjud2mOyUscR89uTsKETLhyjJm2myx84FnyWcodsYeyvGD%2FY51ciTXtcTZ%2F0dsBrFwglHV%2BJWq4PsaZaQE0CXyxiG1WsIA%2BDyeAHbSbvl2pOCXuJv7vIMPn%2FtGx7X60SWT1xHBUJRX0KnUyDjY6Kd08NfJkrsTBlz%2Fp0ddU9JzTHy6XLxBLcoWfoFNGk08fV4mxhxUtkPN6Hd2fSKypARtF%2BO9uvXG3NAaWO%2BwK4REVzQ%2F%2FqAHyntfIEQ3bRGeV9wT9zaYyCPXbvHm49S5p8H07fKMsN7SArMdjjeLt%2BJg7Kx4luWO6%2Bown4DjT84e%2B0eMegW8chMHK2zAcXYT%2BHcBgkl14Lv4uWEGBg1xB1HCETZPEH43ws1eJsYcVLZDxaeut8wxxdTRQH3ONrf%2B%2FFDYvP21WxutdF66P7CdSSrQSd2KiuUsIQcD4gzLDlFDg%3D&union_lens=lensId%3An%401575286453%400b0b9d58_8457_16ec663b531_ac3a%4001">
                          <img src="https://img.alicdn.com/imgextra/i1/46660804/O1CN017Mra5P1HoGzdyrtVH_!!0-saturn_solar.jpg_220x220.jpg_.webp" height="220" width="220"></a>
                      <a href >21k纯金老人手机</a><br>
                      <span >￥488.00</span>
                  </ul>
                  <ul class="b3-2">
                      <a href="https://click.simba.taobao.com/cc_im?spm=a2e15.8261149.07626516002.4&p=%CA%D6%BB%FA&s=314848180&k=609&clk1=2f4640ebbc36af236efd5e02d32fa336&e=GNafUo2p8MmxUeQX2pXsdx3Z0ZWQMzvrXyK3PCne%2Fgx2T1qESAQ1b7dVqAZJhj1x3eaSCkKWKAkPRFWRlyubI7ion4ntZ0jtwhod9%2BoUJHWx%2BWF14j8vvqfEyBs3%2Bg2t0FVXCIyi7eEZkjud2mOyUscR89uTsKETLhyjJm2myx84FnyWcodsYeyvGD%2FY51ciTXtcTZ%2F0dsBrFwglHV%2BJWq4PsaZaQE0CXyxiG1WsIA%2BDyeAHbSbvl2pOCXuJv7vIMPn%2FtGx7X60SWT1xHBUJRX0KnUyDjY6Kd08NfJkrsTBlz%2Fp0ddU9JzTHy6XLxBLcoWfoFNGk08fV4mxhxUtkPN6Hd2fSKypAEWVNh7vM9hefjJekeJJcYK%2FamNGtYF3o8M%2B5oT%2FckXPe3JcfZ6VTgUaM%2FzSX0PXsWOrEm2RDXZgWZtWo2cdGhWpVB8hA67OcP6Nxi9eN64OZKHKZrjErw5571UHc6c%2BSiXTEzAs6gEUiE6pGXnIOy9YAU99tw%2B%2FJpwtnLnuHs2kwSI4YeFCqSJyaKpM1o%2Fq%2BQ6aFL2V2FvXBPBGnueCJ3%2BB6pqT48JbQvIwhIDj9JXVoUg3iIlzi2HZ7nZ7NhwfO&union_lens=lensId%3An%401575286453%400b0b9d58_8457_16ec663b530_ac37%4001">
                        <img src="https://img.alicdn.com/imgextra/i2/55753370/O1CN01pSEKVA1alVJQjEmkf_!!0-saturn_solar.jpg_220x220.jpg_.webp"  height="220" width="220"/></a>
                      <a href >佳宇牌手机壳</a><br>
                      <span>￥20.00</span>
                  </ul>
                  <ul class="b3-3">
                    <a href="https://click.simba.taobao.com/cc_im?spm=a2e15.8261149.07626516002.5&p=%CA%D6%BB%FA&s=314848180&k=621&clk1=2f4640ebbc36af236efd5e02d32fa336&e=0LkSntoHMTOxUeQX2pXsdx3Z0ZWQMzvrXyK3PCne%2Fgx2T1qESAQ1b7dVqAZJhj1x3eaSCkKWKAkjIsFwosfpoaFx6do%2BwhA4whod9%2BoUJHWx%2BWF14j8vvqfEyBs3%2Bg2t0FVXCIyi7eEZkjud2mOyUscR89uTsKETLhyjJm2myx84FnyWcodsYeyvGD%2FY51ciTXtcTZ%2F0dsBrFwglHV%2BJWq4PsaZaQE0CXyxiG1WsIA%2BDyeAHbSbvl2pOCXuJv7vIMPn%2FtGx7X60SWT1xHBUJRX0KnUyDjY6Kd08NfJkrsTBlz%2Fp0ddU9JzTHy6XLxBLcoWfoFNGk08fV4mxhxUtkPN6Hd2fSKypAbvP5PjTvQtOz2B2NvLHzFaOaPc6IBoTBKQv289VWs0pVtBSOAz1qnPhhIGPtb612CVujBYQ158P4xYkIcc9qJw7Kx4luWO6%2Bown4DjT84e%2B0eMegW8chMHK2zAcXYT%2BHcBgkl14Lv4tqXM9s8lCafWdukIrhZdO11eJsYcVLZDz7w%2FWsd%2F3GT2oHQKLnxGMgzamWg7o9QFeYQkRhlzyRhobsRi5De0QsaCtXfOspgo7NqRH8FEVg9wfXLIWW6Jk0TYEXJ7yWioQ%3D&union_lens=lensId%3An%401575286453%400b0b9d58_8457_16ec663b530_ac38%4001">
                    <img src="https://img.alicdn.com/imgextra/i4/57895798/O1CN01nSf4UY1shWt6uH7NQ_!!0-saturn_solar.jpg_220x220.jpg_.webp"  height="220" width="220"/></a>
                    <a href >21手机</a><br>
                    <span >￥888.00</span>
                  </ul>
                  <ul class="b3-4">
                  <a href="https://click.simba.taobao.com/cc_im?spm=a2e15.8261149.07626516002.8&p=%C6%BB%B9%FB11&s=1093174469&k=621&clk1=2f4640ebbc36af236efd5e02d32fa336&e=xfqXXrFSQ1GQFaaAdSBafR3YPKupbOzrZp7Ihoqw5b%2Bq2lkMdiTk5PU4r4U1c0StRPNEIfk5ofNPKQ%2BfpCKrKZFaJOE1gzWH%2BHAWuBSWAhrv6I2QGByBU4xcQ%2BYt4VNyEMsoVe7xS3Cq4AL8pYI6oE7qllMBVl3tyZsYCDOEX8BZptVxpU6qKnHz27rI%2F8wYjb3xN8awlt5B1nl1B6YJnxJZcOnT0IPAv2IV2YDmuoSt%2BOdjzLKnOWQmIleQ7WHiK1e3q11DJ0OLIJ6f1ETfc%2FgaJXlj%2BF6xO5FsQwwFu%2FnePhx0a3wvJEPgId1JB%2B4%2FXeodOBNTTeP4d3SzNXu4vnCXu4k8HE9l3fFBs7tkQd%2BzzqfPrc8y6eJypL8hFETkIC0rcPFQjf4h1FuAGXdQUAz%2BqDn3L7GrJgPfECe8Rs78hrqeaScd6sWvCM8jEHo1SkXnvSFiBqmrcPHZXgx8%2Bx%2BI1tfpHtjlgg%2BKSDdjm2W3vGRo5s9vuKddWRoqj6%2F%2FATZvn%2Bnuji5qCVbZX8%2BjqDOFzHyl5sabvDNmt5%2F%2BjMy3JCRB95X%2F1XjQqSgM3POGvNXxxJUyhwL7W348dJserJpQkyPFlHSqnwLtL%2B%2Fwo8g%3D&union_lens=lensId%3An%401575287208%400b082790_cdc4_16ec66f3b00_ce5b%4001">
                    <img src="https://img.alicdn.com/imgextra/i2/59604742/O1CN01cFtx1T1ktshilnFpa_!!0-saturn_solar.jpg_220x220.jpg_.webp"  height="220" width="220"/>
                  </a>
                    <a href >手机贴模</a><br>
                    <span >￥30.00</span>
                  </ul>
                  <ul class="b3-5">
                  <a href="https://click.simba.taobao.com/cc_im?spm=a2e15.8261149.07626516002.6&p=%C6%BB%B9%FB11&s=1093174469&k=589&clk1=2f4640ebbc36af236efd5e02d32fa336&e=fGdfyJVtsK%2BQFaaAdSBafR3YPKupbOzrZp7Ihoqw5b%2Bq2lkMdiTk5PU4r4U1c0StRPNEIfk5ofNIkZsB7waEOpZVMY5Z4Xbn%2BHAWuBSWAhrv6I2QGByBU4xcQ%2BYt4VNyEMsoVe7xS3Cq4AL8pYI6oE7qllMBVl3tyZsYCDOEX8BZptVxpU6qKnHz27rI%2F8wYjb3xN8awlt5B1nl1B6YJnxJZcOnT0IPAv2IV2YDmuoSt%2BOdjzLKnOWQmIleQ7WHiK1e3q11DJ0OLIJ6f1ETfc%2FgaJXlj%2BF6xO5FsQwwFu%2FnePhx0a3wvJEPgId1JB%2B4%2FXeodOBNTTeP4d3SzNXu4vgHHn%2B3h0np%2F1N4PirrBCZLDPbZ8O2pMVwNjUdI5QNdR01k%2BDPBqDY38GRQwyduvSFMWNnEgT06Yv5y%2BRfwLzKH%2Fz1liqLPKGBcOPoRs5KmYi6E%2FZvHAkrhEpklLLwN3m5pQJvUiNceTHJn8rkFIEoCU934murPCoaarIyVUuMwP2kp4cW0mjPzf1d44qkUFkMLm2ROkbZKlXAc3M4Ii%2B6lTSn5HGzHZSaiNKq07rtS21LqXZjHqatQ%3D&union_lens=lensId%3An%401575287208%400b082790_cdc4_16ec66f3b00_ce59%4001">
                    <img src="https://img.alicdn.com/imgextra/i4/10981406/O1CN01OlBUyv1MFzQcguR42_!!0-saturn_solar.jpg_220x220.jpg_.webp" height="220" width="220">
                  </a>
                    <a href >苹果</a><br>
                    <span >￥6999.00</span>
                  </ul></div>


                            <div class="b34" v-model="goods">
                              <ul>
                                <li v-for="(item,index) in goods" style="list-style-type: none" @click="dianji(goods.id)">
                                  <div class="b35">
                                  <div class="b34-1">
                                  <img :src="item.img" style="width: 220px;height: 220px">

                                  <div class="b34-2">
                                  {{item.goodsname}}
                                  {{item.newprice}}
                                  </div>
                                  </div>
                              </div>
                                </li>
                              </ul>

                            </div>

                </div>
              </div>
    <div class="q">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="100">
    </el-pagination>
  </div>
  </div>
</template>

<script>
  import  axios from 'axios'
    export default {
      name: "shang", created: function () {
        this.$emit('header', true);
        this.$emit('footer', true);
      },
      data(){
        return{
          goods: []
        }
      },
      methods:{
        dianji:function (id) {
          this.$router.push("/")
        }
      }

      ,
      mounted() {
        var id = this.$route.params.id;
        axios.get("http://localhost:8000/findByGno/"+id).then(res => {
          this.goods = res.data;
        })

      }
    }
</script>

<style scoped>
  .bigbox {
    width: 100%;
    background: #fff;
    height: 85px;
  }

  .box {
    width: 80%;
    margin: 0 auto;
    /*box-sizing: border-box;*/
    height: 80px;
    display: flex; /*  弹性盒*/
    align-items: center;
    justify-content: space-around;

  }

  .put {
    margin-right: -60px;
  }

  .sou {
    margin-right: -330px;
  }

  .left {

    width: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .el-button {
    width: 160px;
    font-size: 18px;

  }

  .right {

    margin-left: 660px;

    /*display: flex;
    justify-content: space-around;
    align-items: center;*/
  }



  .outer{
    background: azure;
    height: 1600px;
    width: 1880px;
    margin: auto;
  }
  a {
    text-decoration: none;
  }

  .b{
    background: cadetblue;
    height: 1412px;
    width: 1400px;
    margin: auto;
    margin-top: 30px;

  }
  .b1{
   background: cornsilk;
    height: 42px;
    width: 1400px;
    font-size: 30px;

  }
  .b1 a{
    color: blue;
    font-size: 20px;
  }
  .b2{
    background: azure;
    height: 210px;
    width: 1400px;
    margin: auto;

  }
  .b3{
    background: bisque;
    height: 1160px;
    width: 1400px;
    margin: auto;
  }
  .b33{
    background: aliceblue;
    height: 290px;
    width: 1400px;
    margin: auto;
    display: flex;
   /* border: 1px solid #000;*/
  }
  .b3-1{
    background: aliceblue;
    height: 260px;
    width: 250px;


  }
  .b3-2{
    background: aliceblue;
    height: 250px;
    width: 250px;

  }
  .b3-3{
    background: aliceblue;
    height: 250px;
    width: 250px;

  }
  .b3-4 {
    background: aliceblue;
    height: 250px;
    width: 250px;
  }
  .b3-5 {
    background: aliceblue;
    height: 250px;
    width: 250px;
  }
  .b34{
  background: aliceblue;
    height: 865px;
    width: 1400px;
    margin: auto;
  /*  display: flex;*/
/*    border: 1px solid #000*/;
    float: left;


  }

  .q{
    height: 30px;
    margin-top: 20px;
  }
  .b34-1{
    height: 240px;
    width: 240px;
    float: left;

  }.b34-2{
    height:60px;
    width: 100px;
    margin: auto;
     }
.b35{
  width: 280px;
  height: 280px;
  float: left;
}

</style>
