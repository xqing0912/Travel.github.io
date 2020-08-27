<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-image"  :src="item.imgUrl" />
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination">
            </div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: {delay: 3000}
      },
      swiperList: [{
        id: '001',
        imgUrl: 'https://images.unsplash.com/photo-1562674111-fa6a64c1b345?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
      }, {
        id: '002',
        imgUrl: 'https://images.unsplash.com/photo-1575458289930-f053c4f6b9e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
      }, {
        id: '003',
        imgUrl: 'https://images.unsplash.com/photo-1597796608813-002d2de5123d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
      }, {
        id: '004',
        imgUrl: 'https://images.unsplash.com/photo-1597393580483-4f928fc9fca1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
      }, {
        id: '005',
        imgUrl: 'https://images.unsplash.com/photo-1597839219234-a513027b4e44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
      }]
    }
  }
}

</script>

<style lang="stylus" scoped>
/* 讓class為wrapper組件下子所有class為swiper-pagination-bullet-active的子組件,背景變白色,這樣寫就不受scoped的影響 */
.wrapper >>> .swiper-pagination-bullet-active
    background:#fff
.wrapper
    overflow:hidden
    width:100%
    height:0
    padding-bottom:66%
    .swiper-image
        width:100%
</style>
