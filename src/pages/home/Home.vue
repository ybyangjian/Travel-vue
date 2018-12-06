<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
// 引用组件
import HomeHeader from './components/Header'
import HomeSwiper from './components/swiper'
export default {
  // 组件的名字
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style scoped>

</style>
