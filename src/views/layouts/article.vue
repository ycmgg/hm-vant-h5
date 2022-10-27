<template>
  <div class="article-page">
    <div class="my-nav">
      <a href="#" :class="{ active: index === 1 }" @click="getganegHuan(1)"
        >推荐</a
      >
      <a href="#" :class="{ active: index === 2 }" @click="getganegHuan(2)"
        >最新</a
      >
      <div class="logo">
        <img src="../../assets/logo.png" />
      </div>
    </div>
    <!-- 列表 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <CartItem v-for="val in list" :key="val.id" :val="val"></CartItem>
    </van-list>
  </div>
</template>

<script>
import { getInterviewList } from '@/api/user'
export default {
  name: 'article-page',
  data () {
    return {
      index: 1,
      list: [],
      loading: false,
      finished: false,
      current: 1,
      total: 0,
      sorter: 'weight_desc'
    }
  },
  methods: {
    getganegHuan (i) {
      this.index = i
      if (i === 2) {
        this.sorter = null
      }
      this.current = 1
      this.list = []
      this.total = 0
      this.finished = false
      this.loading = true
      this.onLoad()
    },
    async onLoad () {
      try {
        const { data } = await getInterviewList({ current: this.current, sorter: this.sorter })
        this.total = data.total
        this.list.push(...data.rows)
        this.loading = false
        this.current++
        if (this.list.length >= this.total) {
          this.finished = true
        }
      } catch (err) {
        console.log(err)
        this.loading = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.article-page {
  margin-bottom: 50px;
  margin-top: 44px;
  .my-nav {
    height: 44px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    display: flex;
    align-items: center;
    > a {
      color: #999;
      font-size: 14px;
      line-height: 44px;
      margin-left: 20px;
      position: relative;
      transition: all 0.3s;
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 0;
        height: 2px;
        background: #222;
        transition: all 0.3s;
      }
      &.active {
        color: #222;
        &::after {
          width: 14px;
        }
      }
    }
    .logo {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      > img {
        width: 64px;
        height: 28px;
        display: block;
        margin-right: 10px;
      }
    }
  }
}
</style>
