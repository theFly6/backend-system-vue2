<template>
  <div class="Login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h3>系统登陆</h3>
      </div>

      <el-form :rules="rules" ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="form.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="form.password"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-button type="primary" @click="handleLogin">登陆</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
import { checkPemission } from '@/api';
export default {
  name: "LoginVue",
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      rules: {
        username: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }],
      }
    }
  },
  methods: {
    handleLogin() {
      this.$refs.form.validate((validate) => {
        if (validate) {
          // 填写表单提交、处理逻辑
          checkPemission(this.form).then(res => {
            if (res.code === 20000) {
              Cookies.set('token', res.token)
              this.$router.push('/home')
            } else {
              this.$message.error(res.message);
            }
          })
        }
      })
    }
  }
};
</script>

<style scoped lang="less">
.Login {
  width: 420px;
  margin: 180px auto;
  .el-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .text {
    font-size: 14px;
  }

  h3 {
    text-align: center;
    margin: 0;
    color: #505458;
  }
  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }

  .box-card {
    width: 380px;
  }
}
</style>