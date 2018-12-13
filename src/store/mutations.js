export default {
  // 这个方法不能与上面的一样，随意写
  changeCity (state, city) {
    // 修改state中的city数据
    state.city = city
    try {
      // 将修改后的城市保存
      localStorage.city = city
    } catch (e) {
    }
  }
}
