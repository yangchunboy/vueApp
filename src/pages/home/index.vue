<template>
  <div id="home">
    我是home页面,同时测试autoprefixer
    <div class="red">我的颜色是红色</div>
    <router-link to="/about">去about页面</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {

  }
}
</script>

<style scoped lang="less">
@import '../../theme/theme';
  #home {
    display: flex;
    flex-direction: column;
    background: @primaryColor;
    .red {
      color: red;
    }
  }
</style>

<style lang="less">

</style>