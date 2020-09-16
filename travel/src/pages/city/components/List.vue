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
                    <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item, key) of cities" :key="key">
                <div class="title border-topbottom">
                    {{key}}
                </div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="in_item of item" :key="in_item.id">
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
    cities: Object
  },
  mounted () {
    this.scroll = new BetterScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/cityStyle/cityList.styl'
</style>
