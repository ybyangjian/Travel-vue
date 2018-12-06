<template>
  <div class="wrapper">
  <swiper :options="swiperOption">
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl">
    </swiper-slide>

    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        // 将轮播图设置循环刷新
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/p/tts3/1702/76/49276884a2bf5802.jpg_r_390x260x90_f2243d96.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/p/tts1/1807/72/d6d0ab92df68ff02.jpg_r_390x260x90_da3b638e.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  这里是进行样式穿透，将所有子组件中出现这个class的都变成这个颜色
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff !important
  .wrapper
    width 100%
    height 31.25%
    background #ccc
    .swiper-img
      width 100%
</style>
