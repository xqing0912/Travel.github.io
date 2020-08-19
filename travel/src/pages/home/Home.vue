<template>
<!-- template裏面的所有内容都需要被包裹在一個div裏面 -->
<div>
  <div class="home">目前home</div>
  <!-- 頁面跳轉，相當於a標簽，to相當於href -->
  <router-link to="/list" class="home">列表頁面</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
  .home{
    font-size: 30px;
    color: crimson;
  }
</style>
