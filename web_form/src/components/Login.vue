<template>

  <div class="login">
    <h1>辩则明</h1>
    <el-card class="box-card">
      <el-form :model="loginForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="loginForm">
        <el-form-item label="用户名：" prop="username" >
          <el-input type="username" v-model="loginForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密  码：" prop="pass" >
          <el-input type="password" v-model="loginForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" prop="checkPass">
          <el-input type="password" v-model="loginForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
<!--        <el-form-item label="验证码：" prop="age">-->
<!--          <el-input v-model.number="loginForm.age"></el-input>-->
<!--        </el-form-item>   label="未登录" prop="loginLabel" v-model="loginForm.loginLabel" -->
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

  </div>
</template>

<!--<style lang="less"></style>-->
<style lang="scss">
  .login{
    width:    100%;
    height:   100%;
    position: absolute;
    .box-card {
      width: 450px;
      margin: 5% auto;
    }
  }
</style>

<script>

  import {usernameRule, passRule, rePassRule} from '@/utils/validateUtil.js'
  import {setToken, getToken, removeToken} from '@/utils/tokenUtil.js'
  import {login, findByName} from '@/feignApi/loginApi.js'

  export default {
    data() {
      return {
        loginForm: {

          username: '',
          pass: '',
          checkPass: ''
          // ,loginLabel: ''
          // ,age: ''
        },
        rules: {
          username: [
            { validator: usernameRule, trigger: 'blur' }
          ],
          pass: [
            { validator: passRule, trigger: 'blur' }
          ]
          ,
          checkPass: [
            { validator: rePassRule, trigger: 'blur' }
          ]
          // ,
          // age: [
          //   { validator: checkAge, trigger: 'blur' }
          // ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // console.log(this.formName);
            let params = {"username":"wqb"}
            // 登录接口
            findByName(params).then(res=>{
              console.log(res)
              if(res.status === 200){
                // this.loginLabel.value = "已登录"

                console.log("登录成功！！")
                setToken("username", res.data.username)
                localStorage.setItem('username', res.data.username)

                this.$message({message: res.data.message, type: 'success'})
                this.$router.push('/home')
              }
            }).catch(err=>{
              this.$message({message: err, type: 'error'})

              console.log(err)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

