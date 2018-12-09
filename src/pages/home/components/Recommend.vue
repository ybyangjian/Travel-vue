<template>
  <div>
  <div class="title">
    热销推荐
  </div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_250x250_145eeeb5.jpg',
        title: '成都熊猫基地',
        desc: '成都熊猫基地'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_250x250_145eeeb5.jpg',
        title: '成都武侯祠',
        desc: '成都武侯祠成都武侯祠成都武侯祠'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_250x250_145eeeb5.jpg',
        title: '宽窄巷子',
        desc: '宽窄巷子'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixinx.styl"
  .title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem

  .item
    overflow hidden
    display flex
    height 1.9rem

    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem

    .item-info
      flex 1
      padding .1rem
      min-width 0

      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()

      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()

      .item-button
        line-height .44rem
        background #ff9300
        padding 0 .2rem
        border-radius .06rem
        margin-top .16rem
        color #fff
</style>
