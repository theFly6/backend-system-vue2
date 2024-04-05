<template>
  <!-- :default-active="activeIndex" -->
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#fff"
  >
    <el-menu-item index="1" style="float: left">
      <el-button icon="el-icon-menu" size="mini"></el-button>&nbsp; &nbsp; 首页
    </el-menu-item>

    <el-menu-item index="3" style="float: right">
      <el-dropdown>
        <span class="el-dropdown-link" style="color: #fff">
          <img src="@/assets/lufei.jpg" class="users" />
          <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "ComHeaderVue",
  data() {
    return {
      activeIndex: "",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.users {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>