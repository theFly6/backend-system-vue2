<template>
  <!-- :default-active="activeIndex" -->
  <div class="Header">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#fff"
    >
      <el-menu-item @click="handleFold" index="1" style="float: left">
        <el-button icon="el-icon-menu" size="mini"></el-button>&nbsp; &nbsp;
        {{ folderTips }}
      </el-menu-item>

      <el-menu-item index="3" style="float: right">
        <el-dropdown @command="handleClick">
          <span class="el-dropdown-link" style="color: #fff">
            <img src="@/assets/lufei.jpg" class="users" />
            <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="person">个人中心</el-dropdown-item>
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import { mapMutations } from "vuex";
export default {
  name: "ComHeaderVue",
  data() {
    return {
      activeIndex: "",
      folderChoice: true,
    };
  },
  computed: {
    folderTips() {
      return this.folderChoice ? "收起菜单" : "展开菜单";
    },
  },
  methods: {
    handleFold() {
      this.folderChoice = !this.folderChoice;
      this.SHIFT_ISCOLLAPSE();
    },
    handleClick(command) {

      if (command === 'logout') {
        Cookies.remove('token')
        this.$router.push('/login')
      }
    },
    ...mapMutations("aside", ["SHIFT_ISCOLLAPSE"]),
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