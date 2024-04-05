<template>
  <el-container>
    <el-aside width="200px">
      <ComAsideVue />
    </el-aside>
    <el-container>
      <el-header>
        <ComHeaderVue />
      </el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
import ComAsideVue from "@/components/ComAside.vue";
import ComHeaderVue from "@/components/ComHeader.vue";
export default {
  name: "MainVue",
  components: {
    ComAsideVue,
    ComHeaderVue,
  },
};
</script>

<style>
.el-header {
  padding: 0;
}
</style>