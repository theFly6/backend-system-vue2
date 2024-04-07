<template>
  <div class="Home">
    <el-row>
      <!-- 左侧内容 -->
      <el-col :span="8" style="padding-right: 10px; height: 60vh">
        <!-- 左侧上方内容 -->
        <el-row style="height: 270px">
          <el-card class="box-card">
            <div
              slot="header"
              class="clearfix"
              style="height: 140px; margin-top: -5px"
            >
              <el-col :span="12">
                <img src="@/assets/lufei.jpg" class="users" />
              </el-col>
              <el-col :span="12">
                <p>&nbsp;</p>
                <h2>Admin</h2>
                <p>超级管理员</p>
              </el-col>
            </div>
            <p class="text item" style="height: 20%">
              上次登陆的时间: 2024-04-05
            </p>
            <p class="text item" style="height: 20%">
              上次登陆的地点: 北京海淀
            </p>
          </el-card>
        </el-row>

        <!-- 左侧下方内容 -->
        <el-card class="box-card" style="margin-top: 10px; height: 410px">
          <el-table :data="tableData" height="390px" style="width: 100%">
            <el-table-column prop="name" label="课程"> </el-table-column>
            <el-table-column prop="todayBuy" label="今日购买">
            </el-table-column>
            <el-table-column prop="monthBuy" label="本月购买">
            </el-table-column>
            <el-table-column prop="totalBuy" label="总购买"> </el-table-column>
          </el-table>
        </el-card>
      </el-col>

      <!-- 右侧内容 -->
      <el-col :span="16" class="num">
        <!-- 右侧第一块内容 -->
        <el-card
          class="box-card"
          v-for="item in cardsData"
          :key="item.name"
          :body-style="{
            display: 'flex',
          }"
        >
          <i
            class="icon"
            :class="'el-icon-' + item.icon"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="price">￥ {{ item.value }}</p>
            <p class="desc">{{ item.name }}</p>
          </div>
        </el-card>

        <!-- 右侧第二块内容 -->
        <el-row style="width: 100%">
          <el-col :span="24" style="height: 28vh">
            <el-card style="width: 100%; height: 28vh">
              <div ref="echarts1" style="height: 28vh"></div>
            </el-card>
          </el-col>
        </el-row>

        <!-- 右侧第三块内容 -->
        <div class="graph">
          <el-card style="width: 59%">
            <div ref="echarts2" style="height: 26vh"></div>
          </el-card>
          <el-card style="width: 39%">
            <div ref="echarts3" style="height: 24vh"></div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getData } from "@/api";
import * as echarts from "echarts";
export default {
  name: "HomeVue",
  data() {
    return {
      // 左侧下方表格中数据
      tableData: [],
      // 右侧上方卡片中数据
      cardsData: [],
      // 右侧中间图像的数据
      orderData: [],
      // 右侧下方柱状图数据
      userData: [],
      // 右侧下方饼状图数据
      videoData: [],
    };
  },
  methods: {
    // echarts折线图
    echartsLines() {
      const options = {};
      const xAxis = Object.keys(this.orderData.data[0]);
      options.xAxis = {
        data: this.orderData.date,
      };
      options.yAxis = {};
      options.legend = {
        data: xAxis,
      };
      options.series = [];
      xAxis.forEach((key) => {
        options.series.push({
          name: key,
          type: "line",
          data: this.orderData.data.map((item) => item[key]),
        });
      });
      // 基于准备好的dom，初始化echarts实例
      const echats1 = echarts.init(this.$refs.echarts1);
      // 使用刚指定的配置项和数据显示图表。
      echats1.setOption(options);
    },
    // echarts柱状图
    echartsBars() {
      const options = {};
      options.xAxis = {
        data: this.userData.map((item) => item.date),
      };
      options.yAxis = {};
      options.legend = {
        data: ["新增用户", "活跃用户"],
      };
      options.series = [];
      ["new", "active"].forEach((key) => {
        options.series.push({
          name: key === "new" ? "新增用户" : "活跃用户",
          type: "bar",
          data: this.userData.map((item) => item[key]),
        });
      });
      // 基于准备好的dom，初始化echarts实例
      const echats = echarts.init(this.$refs.echarts2);
      // 使用刚指定的配置项和数据显示图表。
      echats.setOption(options);
    },
    // echarts饼图
    echartsPies() {
      const options = {};
      options.series = [
        {
          data: this.videoData,
          type: "pie",
        },
      ];
      // 基于准备好的dom，初始化echarts实例
      const echats = echarts.init(this.$refs.echarts3);
      // 使用刚指定的配置项和数据显示图表。
      echats.setOption(options);
    },
  },
  mounted() {
    getData().then((res) => {
      this.tableData = res.data.tableData;
      this.cardsData = res.data.cardsData;
      this.orderData = res.data.orderData;
      this.videoData = res.data.videoData;
      this.userData = res.data.userData;
      this.echartsLines();
      this.echartsBars();
      this.echartsPies();
      // console.log(res);
    });
  },
};
</script>

<style lang="less" scoped>
img.users {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin-left: 5px;
  margin-top: 5px;
}
p {
  line-height: 28px;
  font-size: 26px;
  color: #999;
}
p.item {
  font-size: 16px;
  height: 30px;
}
h2 {
  font-size: 39px;
  margin-left: 10px;
  margin-top: 0px;
  margin-bottom: 15px;
}
.num {
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
  justify-content: space-between;
  .box-card {
    width: 30%;
    margin-bottom: 12px;
    padding: 0%;
    height: 14vh;
  }
  .icon {
    width: 80px;
    height: 80px;
    font-size: 30px;
    background-color: #fff;
    text-align: center;
    line-height: 80px;
  }
  .detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;
    .price {
      font-size: 30px;
      margin-bottom: 10px;
      line-height: 30px;
      height: 30px;
      color: #666;
    }
    .desc {
      font-size: 14px;
      text-align: center;
    }
  }
}
.graph {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 27.5vh;
  .el-card {
    margin-bottom: 0;
    margin-top: 10px;
  }
}
</style>