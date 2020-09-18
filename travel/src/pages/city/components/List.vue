<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">
                    當前城市
                </div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">
                    熱門城市
                </div>
                <div class="button-list">
                    <div class="button-wrapper"
                         v-for="item of hotCities"
                         :key="item.id">
                            <div class="button">
                                {{item.name}}
                            </div>
                    </div>
                </div>
            </div>
            <div class="area"
                 v-for="(item, key) of cities"
                 :key="key"
                 :ref="key">
                    <div class="title border-topbottom">
                        {{key}}
                    </div>
                <div class="item-list">
                    <div class="item border-bottom"
                         v-for="in_item of item"
                         :key="in_item.id">
                            {{in_item.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    alphabet: String
  },
  mounted () {
    this.scroll = new BetterScroll(this.$refs.wrapper)
  },
  watch: {
    alphabet () {
    //   console.log(this.alphabet)
    //  如果alphabet不爲空的時候
      if (this.alphabet) {
        //  把對應的DOM元素存到element變量裏
        const element = this.$refs[this.alphabet][0]
        // console.log(element)
        //  此處調用的BetterScroll裏的方法，再傳入對應的DOM元素
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/cityStyle/cityList.styl'
</style>
