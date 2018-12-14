<!-- 这是一个单文件组件 -->
<template>
    <div id="app">
      <!-- 当路由中的内容被加载过后就放在内存中 -->
      <keep-alive>
      <!-- router-view显示的是当前路由地址所对应的内容  -->
      <router-view/>
      </keep-alive>
    </div>

</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
