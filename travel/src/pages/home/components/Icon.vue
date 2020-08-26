<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img
              class="iconImgContent"
              :src="item.imgUrl"
            />
          </div>
          <p class="icon-desc">{{item.imgDesc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '001',
        imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
        imgDesc: '景點門票'
      }, {
        id: '002',
        imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
        imgDesc: '酒店'
      }, {
        id: '003',
        imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
        imgDesc: '機票'
      }, {
        id: '004',
        imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/train.png',
        imgDesc: '火車票'
      }, {
        id: '005',
        imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/package.png',
        imgDesc: '度假'
      }, {
        id: '006',
        imgUrl: 'https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png',
        imgDesc: '海外酒店'
      }, {
        id: '007',
        imgUrl: 'https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png',
        imgDesc: '廉價機票'
      }, {
        id: '008',
        imgUrl: 'https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png',
        imgDesc: '汽車票船票'
      }, {
        id: '009',
        imgUrl: 'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png',
        imgDesc: '自由行'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/iconStyle/icon-style.styl'
</style>
