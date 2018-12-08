<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons> </home-icons>
  </div>
</template>

<script>
// 引用组件
import HomeHeader from './components/Header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/Icons'
export default {
  // 组件的名字
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
  }
}
</script>

<style scoped>

</style>
