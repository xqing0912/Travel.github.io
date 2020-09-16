<template>
  <div class="alphabet-list">
      <ul class="list">
          <li class="item" v-for="(item, key) of all_cities" :key="key">{{key}}</li>
      </ul>
   </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    all_cities: Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/cityStyle/cityAlphabet.styl'
</style>
