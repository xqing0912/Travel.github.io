<template>
<!-- template裏面的所有内容都需要被包裹在一個div裏面 -->
<div class="header">
  <div class="header-left">返回</div>
  <div class="header-input">輸入城市/景點/游玩主題</div>
  <div class="header-right">城市</div>
</div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>
//  用stylus來寫樣式,scoped指樣式只用於目前這個組件
<style lang="stylus" scoped>
.header
    display :flex
    justify-items:center
    line-height:3rem
    background:#00bcd4
    color:#fff
    .header-left
        width:2.5rem
        float: left
    .header-input
        flex:1
        line-height:2rem
        background:#fff
        border-radius:.5rem
        margin:0.3rem 0
        color:#ccc
    .header-right
        width: 4rem
        float:right
        text-align:center
</style>
