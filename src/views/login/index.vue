<template>
  <div class="login-form-wrap">
    <el-form
      class="login-form"
      ref="loginForm"
      :model="user"
      label-width="60px"
      :rules="loginForm"
    >
      <el-form-item label="用户" prop="username">
        <el-input v-model="user.username" placeholder="请输入手机号或者邮箱"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="user.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="身份" prop="userStatus">
        <el-radio-group v-model="user.userStatus">
          <el-radio label="0">普通用户</el-radio>
          <el-radio label="1">自媒体用户</el-radio>
          <el-radio label="2">管理员用户</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button
          class="login-btn"
          type="primary"
          @click="onLogin"
          :loading="loginLoading"
        >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        username: 'test01@google.com', // 手机号
        password: '123456', // 密码
        userStatus: '0' // 用户身份
      },
      loginLoading: false, // 登录的 loading 状态
      loginForm: {
        username: [
          { required: true, message: '请输入邮箱或手机号', trigger: 'change' }
        ], // 手机号
        password: [
          { required: true, message: '请输入密码', trigger: 'change' }
        ], // 验证码
        userStatus: [
          { required: true, message: '请选择用户身份', trigger: 'change' }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onLogin () {
      // 获取表单数据
      // const user = this.user

      // 表单验证
      this.$refs.loginForm.validate(valid => {
        if (!valid) {
          return
        }

        // 验证通过
        this.login()
      })
    },

    // 登录
    login () {
      // 开启登录按钮
      this.loginLoading = true

      login(this.user).then(res => {
        // 处理后端响应结果
        console.log(res)
        this.$message({
          message: '登录成功',
          type: 'success'
        })

        // 关闭loading 状态
        this.loginLoading = false

        // 跳转到首页
        // this.$router.push('/')
        this.$router.push({
          name: 'home'
        })
      }).catch(err => {
        // 处理后端响应结果
        console.log('登录失败')
        console.log(err)
        // 输出提示消息
        this.$message.error('登录失败')

        // 关闭loading 状态
        this.loginLoading = false
      })
    }
  }
}
</script>

<style scoped lang="less">
  .login-form-wrap {
    min-width: 300px;
    padding: 30px 40px 10px 10px;
    background-color: #fff;
    .login-form {
      .login-btn {
        width: 100%;
      }
    }
  }
</style>
