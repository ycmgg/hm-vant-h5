<template>
  <div class="login-page">
    <van-nav-bar title="面经登录" />
    <van-form @submit="onSubmit" show-error>
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>

    <div class="zczh" @click="$router.push('/register')">
      <a href="#"> 注册账号 </a>
    </div>
  </div>
</template>

<script>
import { getLogin } from '@/api/user'
import { setToken } from '@/utils/storage'
export default {
  name: 'login-page',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (value) {
      try {
        const res = await getLogin(value)
        setToken(res.data.token)
        this.$toast.success('登录成功')
        this.$router.push('/')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.link {
  color: #069;
  font-size: 12px;
  padding-right: 20px;
  float: right;
}
.zczh {
  display: flex;
  flex-direction: row-reverse;
  padding-right: 15px;
  a {
    font-size: 14px;
  }
}
</style>
