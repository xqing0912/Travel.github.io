<template>
    <div>
        <div class="title">周末出游</div>
        <ul>
            <li class="item" border-bottom v-for="item of recommendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" />
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: 'https://imgs.qunarzz.com/sight/p68/201211/06/c920f31228e6435a93835fbb.jpg_256x144_0d183136.jpg',
        title: '臺北故宮博物院',
        desc: '北京故宮看建築，臺北故宮看文物'
      }, {
        id: '002',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1408/29/c16e7a4fcf6152a026a83349c983f653.jpg_256x144_8742ed27.jpg',
        title: '101大樓',
        desc: '可居高臨下觀賞整個臺北風景'
      }, {
        id: '003',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1505/7d/7d9d91f378a2339b.water.jpg_256x144_d43d1bdd.jpg',
        title: '野柳地質公園',
        desc: '历经千百年而形成的地质"活化石"'
      }]
    }
  }
}
</script>

<style lang="stylus">
@import '~styles/weekendStyle/weekend-style.styl'
</style>
