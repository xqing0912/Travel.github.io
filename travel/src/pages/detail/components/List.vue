<template>
    <div>
        <div class="item" v-for="(item, index) of list" :key="index">
            <div class="item-title border-bottom">
                <span class="item-title-icon">
                </span>
                {{item.title}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/detailStyle/list.styl'
</style>
