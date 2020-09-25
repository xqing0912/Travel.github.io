<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showHeaderAbs">
            <div class="iconfont header-abs-back">
                &#xe624;
            </div>
        </router-link>
        <div class="header-fixed" v-show="!showHeaderAbs" :style="opacityStyle">
            <router-link to="/">
                <div class="iconfont header-fixed-back">
                    &#xe624;
                </div>
            </router-link>
            景點詳情
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showHeaderAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const scrollTop = document.documentElement.scrollTop
      if (scrollTop > 60) {
        let opacity = scrollTop / 140
        // opacity限制在0~1之間
        opacity = opacity > 1 ? 1 : opacity
        // 把opacityStyle重新賦值一個對象
        this.opacityStyle = {
        //   opacity: opacity
          opacity
        }
        this.showHeaderAbs = false
      } else {
        this.showHeaderAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/detailStyle/header.styl'
</style>
