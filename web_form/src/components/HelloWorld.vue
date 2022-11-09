<template>
  <div class="hello">
    <h1>辩则明</h1>
    <el-button type="primary">primary</el-button>
    <el-button type="info">info</el-button>
    <el-button type="danger">danger</el-button>
    <el-button type="success">success</el-button>
    <i class="fa fa-user"></i>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
