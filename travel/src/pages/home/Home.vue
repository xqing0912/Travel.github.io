<template>
<!-- template裏面的所有内容都需要被包裹在一個div裏面 -->
<div>
  <home-header :city="city"></home-header>
  <home-swiper :list="swiperList"></home-swiper>
  <home-icons :list="iconList"></home-icons>
  <home-recommend :list="recommendList"></home-recommend>
  <home-weekend :list="weekendList"></home-weekend>
</div>
</template>

<script>
/* 引入各個組件頁面 */
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icon'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
/* 引入axios */
import axios from 'axios'
export default {
  name: 'Home',
  /* 在components屬性中注冊每個局部組件 */
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    // 定義getHomeInfo函數獲取json資料，然後執行getHomeInfoSuccess這一函數，/api/路徑在gitignore文件中替換過
    getHomeInfo () {
      axios.get('/api/index-1.json')
        .then(this.getHomeInfoSuccess)
    },
    // 定義getHomeInfoSuccess函數，接受回傳資料
    getHomeInfoSuccess (res) {
      // console.log(res)
      res = res.data
      // 如果回傳資料中ret為true,并且有data的數據
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  // 在mounted這個周期中調用getHomeInfo()此函數
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>

</style>
