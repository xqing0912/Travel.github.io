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
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">
                    A
                </div>
                <div class="item-list">
                    <div class="item border-bottom">
                        阿拉爾
                    </div>
                    <div class="item border-bottom">
                        阿拉爾
                    </div>
                    <div class="item border-bottom">
                        阿拉爾
                    </div>
                    <div class="item border-bottom">
                        阿拉爾
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">
                    A
                </div>
                <div class="item-list">
                    <div class="item border-bottom">
                        阿拉爾
                    </div>
                    <div class="item border-bottom">
                        阿拉爾
                    </div>
                    <div class="item border-bottom">
                        阿拉爾
                    </div>
                    <div class="item border-bottom">
                        阿拉爾
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">
                    A
                </div>
                <div class="item-list">
                    <div class="item border-bottom">
                        阿拉爾
                    </div>
                    <div class="item border-bottom">
                        阿拉爾
                    </div>
                    <div class="item border-bottom">
                        阿拉爾
                    </div>
                    <div class="item border-bottom">
                        阿拉爾
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
  mounted () {
    this.scroll = new BetterScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/cityStyle/cityList.styl'
</style>
