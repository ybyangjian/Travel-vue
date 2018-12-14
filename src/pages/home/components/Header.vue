<template>
<div class="header">
  <div class="header-left">
    <div class="iconfont back-icon">&#xe624;</div>
  </div>
  <div class="header-input">
    <span class="iconfont">&#xe632;</span>
    输入城市/景点/游玩主题
  </div>
  <!-- router-link 在vue中用来替代a标签  -->
  <router-link to="/city">
    <div class="header-right">
      <!-- 这里的$store 是store目录中Index.js创建的，在mian.js中创建了根实例，所以在所有的子组件都能使用 -->
      <!--{{ this.$store.state.city }}-->
      <!-- 这是上面的简写，是mapState映射后的  -->
      {{ this.city }}
      <!-- 重新映射为两个城市名 -->
      <!--{{ this.doubleCity }}-->
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </router-link>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Header',
  // 接收组件传递的数据
  // props: {
  //   city: String
  // }
  computed: {
    // mapState是将city映射到computed（组件）中
    ...mapState(['city'])
    // ...mapGetters(['doubleCity'])
  }
}
</script>
<!--  scoped 表示样式只对当前组件有效  -->
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
.header
  display flex
  line-height: $headerHeight
  background: $bgColor
  color: #fff
  .header-left
    width: .64rem
    float: left
    .back-icon
      text-align: center
      font-size: .4rem
  .header-input
    flex: 1
    margin-top: .12rem
    margin-left: .2rem
    padding-left: .2rem
    height: .64rem
    line-height: .64rem
    background: #fff
    border-radius: .1rem
    color: #ccc
  .header-right
    min-width: 1.04rem
    padding 0 .1rem
    float: right
    text-align center
    color #fff
    .arrow-icon
      font-size .24rem
      margin-left -.04rem
</style>
