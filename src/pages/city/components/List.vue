<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="btn-list">
          <div class="btn-wrapper" >
            <div class="btn">
          <!--{{this.$store.state.city}}-->
              {{ this.currtentCity }}
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="btn-list">
          <div class="btn-wrapper" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
            <div class="btn">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">
           {{ innerItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    // 将vuex中公用的city数据，影射到这个组件中并将名字命名为currtentCity
    ...mapState({
      currtentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      // 常规写法，正常调用store目录Index.js中的actions方法修改城市
      // this.$store.dispatch('changeCity', city)
      // 在比较简单的时候不用actions方法也行，可直接调用commit方法
      // this.$store.commit('changeCity', city)
      // 上面的简写
      this.changeCity(city)
      // 点击城市后跳转到首页
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  // 生命周期函数，在页面挂载守线后执行
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  // 侦听器
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .border-topbottom
  &:beforre
    border-color #ccc
  &:after
    border-color #ccc
  .border-bottom
    &:beforre
      border-color #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height .54rem
      background #eee
      padding-left .2rem
      color #666
      font-size .26rem
    .btn-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .btn-wrapper
        float: left
        width: 33.33%
        .btn
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height .76rem
        padding-left .2rem
</style>
