<template>
  <div class="home" >
      <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu router  >
              <template v-for="(item, index) in menus">
                <el-submenu :index="index + ''" :key="index" v-if="!item.hidden">
                  <template slot="title">
                    <i :class="item.iconClass"></i>
                    <span>{{item.name}}</span>
                  </template>
                  <el-menu-item-group v-for="(children, index) in item.children" :key="index">
                    <el-menu-item :index="children.path">
                      <i :class="children.iconClass"></i>
                      <span>{{children.name}}</span>
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </template>

<!--              <el-menu-item-group title="分组2">-->
<!--                <el-menu-item index="1-3">选项3</el-menu-item>-->
<!--              </el-menu-item-group>-->
<!--              <el-submenu index="1-4">-->
<!--                <template slot="title">选项4</template>-->
<!--                <el-menu-item index="1-4-1">选项4-1</el-menu-item>-->
<!--              </el-submenu>-->
          </el-menu>
        </el-aside>

        <el-container>
          <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>首页</span>
            <span>辩则明</span>
            <label @click="redirectToHome()">去登录</label>
          </el-header>

          <el-main>
            <div class="container">
              <router-view></router-view>
            </div>
<!--            <el-table :data="tableData">-->
<!--              <el-table-column prop="date" label="日期" width="140">-->
<!--              </el-table-column>-->
<!--              <el-table-column prop="name" label="姓名" width="120">-->
<!--              </el-table-column>-->
<!--              <el-table-column prop="address" label="地址">-->
<!--              </el-table-column>-->
<!--            </el-table>-->
          </el-main>
        </el-container>
      </el-container>

  </div>
</template>

<!--<style lang="less"></style>-->
<!--<style lang="scss">-->
<!--</style>-->

<style lang="scss">

  .home{
    width:    100%;
    height:   100%;
    position: absolute;
  }
  #app{
    margin-top: 0px;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
  .el-submenu__title {
    background-color: rgb(238, 241, 246);
  }
</style>

<script>
  export default {

    data() {
      const item = {
        date: '2016-05-02',
        // name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    },
    methods: {
      redirectToHome(){
        this.$router.push('/login')
      }
    },
    created() {
      console.log(this.$router.options.routes)
      this.menus = this.$router.options.routes
    }
  }
</script>
