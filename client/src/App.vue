<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { provide } from 'vue';
import * as echarts from 'echarts';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8800';

export default {
  setup() {
    provide("echarts", echarts);
    provide("axios", axios);
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: url('./assets/bg.jpg') top center no-repeat;
}
</style>


