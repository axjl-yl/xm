<template>
  <div id="app">
    <app-header v-if="header_show"/>
    <router-view v-on:header="header" v-on:footer="footer"/>
    <app-footer v-if="footer_show"/>
  </div>
</template>

<script>
  import Header from './components/toplist.vue'
  import Fotter from './components/bottom.vue'

  export default {
    name: 'App',
    data() {
      return {
        header_show: true,
        footer_show: true
      }
    },
    components: {
      'app-header': Header,
      'app-footer': Fotter
    }, methods: {
      //是否显示头部
      header: function (bool) {
      this.header_show=bool;
        },
      footer: function (bool) {
      this.footer_show=bool;

      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
