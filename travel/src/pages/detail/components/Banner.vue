<template>
  <div>
      <div class="banner" @click="handleBannerClick">
          <img class="banner-img" src="https://img1.qunarzz.com/travel/d4/1603/5b/5d269d13378751f7.jpg_r_640x480x95_b71edbf9.jpg" />
          <div class="banner-info">
              <div class="banner-title">
                去過日月潭的人一定都知道用風景如畫四個字都不足以形容出日月潭的美，見過日月潭美景的人在遇到其他美景似乎都變成了將就。門票免費
              </div>
              <div class="banner-number">
                  <span class="iconfont banner-icon">
                    &#xe6fc;
                  </span>
                  1/8
              </div>
          </div>
      </div>
      <banner-gallery :imgArray="imgArray" v-show="showGallery" @close="handleGalleryClose"></banner-gallery>
    </div>
</template>

<script>
import BannerGallery from 'common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallery: false,
      imgArray: ['https://img1.qunarzz.com/travel/d6/1804/cd/aec45c155040e3b5.jpg_r_640x1199x95_2f9fb481.jpg', 'https://img1.qunarzz.com/travel/d6/1804/b7/dc9ae33051f9b5b5.jpg_r_640x1199x95_6ba9db30.jpg', 'https://img1.qunarzz.com/travel/d2/1603/3c/7008f9353aeeb4f7.jpg_r_640x480x95_eabd410d.jpg', 'https://img1.qunarzz.com/travel/d2/1603/6d/bf0efb4e3625c3f7.jpg_r_640x480x95_02c0aabc.jpg', 'https://img1.qunarzz.com/travel/d4/1603/db/d7c06343dd68f7.jpg_r_640x480x95_1afba9c3.jpg', 'https://img1.qunarzz.com/travel/d5/1603/ff/45cb530b6a97d1f7.jpg_r_640x480x95_157fa2d8.jpg', 'https://img1.qunarzz.com/travel/d6/1603/3e/acdb75ee287a99f7.jpg_r_640x480x95_e59620f7.jpg', 'https://img1.qunarzz.com/travel/d4/1603/9e/d2ec3023ee382ef7.jpg_r_640x480x95_03fb079e.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  },
  components: {
    BannerGallery
  }
}
</script>

<style lang="stylus" scoped>
 @import '~styles/detailStyle/bannerStyle.styl'
</style>
