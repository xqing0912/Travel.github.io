<template>
<!-- template裏面的所有内容都需要被包裹在一個div裏面 -->
<div>
  <home-header></home-header>
  <home-swiper></home-swiper>
  <home-icons></home-icons>
  <home-recommend></home-recommend>
</div>
</template>

<script>
/* 引入HomeHeader的組件頁面 */
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icon'
import HomeRecommend from './components/Recommend'
export default {
  name: 'Home',
  /* 因爲是局部組件，所以要在components屬性中注冊HomeHeader這一組件 */
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend
  }
}
</script>

<style>

</style>
