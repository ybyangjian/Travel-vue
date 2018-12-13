
let defaultCity = '成都'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {

}

export default {
  // 优先取localStorage中存的城市
  city: defaultCity
}
