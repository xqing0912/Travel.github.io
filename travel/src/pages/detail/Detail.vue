<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [{
        title: '個人票',
        children: [{
          title: '成人票'
        }, {
          title: '學生票'
        }, {
          title: '兒童票'
        }, {
          title: '博幼票'
        }]
      }, {
        title: '團體票',
        children: [{
          title: '成人票'
        }, {
          title: '學生票'
        }, {
          title: '兒童票'
        }, {
          title: '博幼票'
        }]
      }, {
        title: '停車場清潔費',
        children: [{
          title: '大/小客車100元'
        }, {
          title: '機車20元'
        }]
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
 @import '~styles/detailStyle/detail.styl'
</style>
