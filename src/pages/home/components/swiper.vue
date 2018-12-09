<template>
  <div class="wrapper">
    <!-- 用v-if进行判断，当有数据的时候才创建swiper，没有数据的时候就不创建，避免默认显示的轮播图是最后一张 -->
  <swiper :options="swiperOption" v-if="showSwiper">
    <swiper-slide v-for="item of list" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl">
    </swiper-slide>

    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  // 接收组件传递的数据
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        // 将轮播图设置循环刷新
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  /*这里是进行样式穿透，将所有子组件中出现这个class的都变成这个颜色*/
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff !important
  .wrapper
    width 100%
    height 31.25%
    background #ccc
    .swiper-img
      width 100%
</style>
