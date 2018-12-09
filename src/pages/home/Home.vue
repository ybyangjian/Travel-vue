<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons> </home-icons>
    <home-recommend></home-recommend>
    <home-wenkend></home-wenkend>
  </div>
</template>

<script>
// 引用组件
import HomeHeader from './components/Header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWenkend from './components/Wenkend'
export default {
  // 组件的名字
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWenkend
  }
}
</script>

<style scoped>

</style>
