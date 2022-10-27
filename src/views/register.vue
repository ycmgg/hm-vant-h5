<template>
  <div class="register-page">
    <van-nav-bar title="面经注册" />
    <van-form @submit="onSubmit" show-error>
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[
          { required: true, message: '请填写用户名' },
          { pattern: /^\w{5,}$/, message: '用户名至少包含5个字符' },
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattern: /^\w{6,}$/, message: '密码至少包含6个字符' },
        ]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >注册</van-button
        >
      </div>
    </van-form>

    <div class="zczh" @click="$router.push('/login')">
      <a href="#"> 有账号, 去注册 </a>
    </div>
  </div>
</template>

<script>
import { getRegister } from '@/api/user'
export default {
  name: 'register-page',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (value) {
      try {
        await getRegister(value)
        this.$toast.success('注册成功')
        this.$router.push('/login')
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
