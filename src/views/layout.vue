<template>
  <div class="layout-page">
    <div><router-view></router-view></div>
    <div>
      <van-tabbar v-model="active" route>
        <van-tabbar-item icon="fire-o" to="/article">面经</van-tabbar-item>
        <van-tabbar-item icon="star-o" to="/collect">收藏</van-tabbar-item>
        <van-tabbar-item icon="like-o" to="/like">喜欢</van-tabbar-item>
        <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout-page',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped></style>
