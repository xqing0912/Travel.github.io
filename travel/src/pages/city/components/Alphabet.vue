<template>
  <div class="alphabet-list">
      <ul class="list">
          <li class="item"
              v-for="item of letters"
              :key="item"
              :ref="item"  @touchStart="handleTouchStart"  @touchMove="handleTouchMove" @touchEnd="handleTouchEnd"  @click="handleAlphabetClick">
                  {{item}}
          </li>
      </ul>
   </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    all_cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.all_cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      //  定義默認觸摸狀態為不可用
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  //  頁面加載并更行完成后執行updated生命周期函數
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    // 獲取使用和點擊的字母
    handleAlphabetClick (e) {
      // console.log(e.target.innerText)
      // 向外層發出changeList事件,再傳出目前點擊的參數内容
      this.$emit('changeList', e.target.innerText)
    },
    //  當觸摸的時候，觸摸狀態變爲可用
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    //  當結束滑動時,觸摸狀態變爲不可用
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/cityStyle/cityAlphabet.styl'
</style>
