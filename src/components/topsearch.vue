<template>
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
</template>

<script>
  export default {
    name: "topsearch",
    data() {
      return {}
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

</style>



