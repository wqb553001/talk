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
<!--        </el-form-item>-->
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
  export default {
    data() {
      // let checkAge = (rule, value, callback) => {
      //   if (!value) {
      //     return callback(new Error('年龄不能为空'));
      //   }
      //   setTimeout(() => {
      //     if (!Number.isInteger(value)) {
      //       callback(new Error('请输入数字值'));
      //     } else {
      //       if (value < 18) {
      //         callback(new Error('必须年满18岁'));
      //       } else {
      //         callback();
      //       }
      //     }
      //   }, 1000);
      // };
      let validateUsername = (rule, value, callback) => {
        // 以字母开头，长度在6~18之间，只能包含字母、数字和下划线)：
        let userNameReg = /^[a-zA-Z]\w{5,17}$/;
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          if (!userNameReg.test(value)) {
            callback(new Error('用户名：以字母开头，长度在6~18之间，只能包含字母、数字和下划线'));
          }
          callback();
        }
      };
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.loginForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      let validateCheckPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.loginForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };

      return {
        loginForm: {

          username: '',
          pass: '',
          checkPass: ''
          // ,age: ''
        },
        rules: {
          username: [
            { validator: validateUsername, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
          ,
          checkPass: [
            { validator: validateCheckPass, trigger: 'blur' }
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
            // alert('submit!');
            console.log(this.form);
            // this.axios.post('https://rapserver.sunmi.com/app/mock/340/login', this.loginForm,{
            // this.axios.post('http://localhost:8004/talk/form/login', this.loginForm,{
            //   headers: {
            //     'content-type': 'application/json'
            //     ,
            //     'Access-Control-Allow-Origin': '127.0.0.1:8080'
            //     // 'Access-Control-Allow-Origin': '*'
            //     // ,"token": '14a1347f412b39f' // token换成从缓存获取  "Access-Control-Allow-Origin"]="http://127.0.0.1:8080"
            //   }})
            this.axios.get('http://localhost:8004/talk/form/findByName?name=wqb', {'name':'wqb'}, {
              headers: {
                'content-type': 'application/json'
                ,
                'Access-Control-Allow-Origin': '127.0.0.1:8080'
                // 'Access-Control-Allow-Origin': '*'
                // ,"token": '14a1347f412b39f' // token换成从缓存获取  "Access-Control-Allow-Origin"]="http://127.0.0.1:8080"
              }})
            .then(res=>{
              console.log(res)
              if(res.data.status === 200){
                localStorage.setItem('username', res.data.username)
                this.$message({message: res.data.message, type:'success'})
                this.$router.push('/home')
              }
            }).catch(error=>{
              console.log(error)
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

