<template>
  <div class="collect-page">
    <van-nav-bar title="我的喜欢" />
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
import { getInterviewOptList } from '@/api/user'
export default {
  name: 'collect-page',
  data () {
    return {
      list: [],
      page: 1,
      pageSize: 10,
      total: 0,
      loading: false,
      finished: false
    }
  },
  methods: {
    async onLoad () {
      try {
        const { data } = await getInterviewOptList({
          optType: 1,
          page: this.page,
          pageSize: this.pageSize
        })
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
.collect-page {
}
</style>
