<template>
  <div>
      <div class="banner" @click="handleBannerClick">
          <img class="banner-img" src="https://imgs.qunarzz.com/vs_ceph_vs_tts/5ce99122-68b9-40a0-83a0-cb0a93ccaed2.jpg_r_390x260x95_d7de1d45.jpg" />
          <div class="banner-info">
              <div class="banner-title">
                丽江泸沽湖5日自由行丨直飞丽江3晚雪山语客栈+1晚锦尚居客栈赠送鲜花铺床
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
      imgArray: ['https://imgs.qunarzz.com/vs_ceph_vs_tts/efb93c84-2622-4b41-b4f1-a837f4dbabe2.jpg_r_390x260x95_817e5e21.jpg', 'https://imgs.qunarzz.com/vs_ceph_vs_tts/532c0c54-c1b9-4492-ad34-d41bb0887475.jpg_r_390x260x95_39e07977.jpg', 'https://imgs.qunarzz.com/vs_ceph_vs_tts/0d31c7e7-f7d3-4b62-a805-e8c0d25e7077.jpg_r_390x260x95_64d57053.jpg', 'https://imgs.qunarzz.com/vs_ceph_vs_tts/0a0cef49-07cd-4835-ba2b-763026f116e0.jpg_r_390x260x95_19e75b6a.jpg']
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
