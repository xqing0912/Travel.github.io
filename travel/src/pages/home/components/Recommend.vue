<template>
    <div>
        <div class="title">熱銷推薦</div>
        <ul>
            <li class="item" border-bottom v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl" />
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看詳情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: 'https://img1.qunarzz.com/sight/p0/201305/30/80098e58c4796e1dc8d65eac.jpg_256x160_288de57a.jpg',
        title: '日月潭',
        desc: '天然淡水湖泊，堪稱明珠之冠'
      }, {
        id: '002',
        imgUrl: 'https://img1.qunarzz.com/sight/p0/1901/77/770151ccd10a56d8a3.img.jpg_256x160_b264a53b.jpg',
        title: '臺灣海洋生物博物館',
        desc: '以虛擬實境手法呈現深海、極地等生態環境'
      }, {
        id: '003',
        imgUrl: 'https://img1.qunarzz.com/sight/p0/201305/30/283da9548030aaf9c8d65eac.jpg_256x160_86c14891.jpg',
        title: '清境農場',
        desc: '初春鶯飛草長，滿山遍野桃李爭妍'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/recommendStyle/recommendStyle.styl'
</style>
