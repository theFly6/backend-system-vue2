<template>
  <el-container>
    <el-aside width="auto">
      <ComAsideVue />
    </el-aside>
    <el-container>
      <el-header style="padding: 0">
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
</style>