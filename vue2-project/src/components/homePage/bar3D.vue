<!--
 * @FileDescription: 3D 柱状图 1
 * @Author: xie
 * @Date: 2024-11-13 10:05:46
 -->
<template>
  <div ref="3DBar"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      barData: [
        { name: "广州", total: 187, levelTwo: 120, levelOne: 63, levelZero: 4 },
        { name: "东莞", total: 22, levelTwo: 12, levelOne: 10, levelZero: 0 },
        { name: "深圳", total: 81, levelTwo: 60, levelOne: 21, levelZero: 0 },
        { name: "佛山", total: 40, levelTwo: 23, levelOne: 15, levelZero: 2 },
      ],
      stopListen: null,
      colorList: ["#0C6DDC", "#41B8C1", "#D5C576", "#7373DC"],
    };
  },
  mounted() {
    this.initChart();
  },
  activated() {
    console.log('activated')
    this.handleResize();
    this.stopListen = this.registerEvent();
  },
  deactivated() {
    console.log('deactivated')
    typeof this.stopListen === "function" && this.stopListen();
  },
  beforeDestroy() {
    typeof this.stopListen === "function" && this.stopListen();
  },
  methods: {
    /**
     *
     */
    registerEvent() {
      window.addEventListener("resize", this.handleResize);
      return () => window.removeEventListener("resize", this.handleResize);
    },
    /**
     *
     */
    initChart() {
      this.chart = echarts.init(this.$refs["3DBar"]);
      const xAxis = this.barData.map((v) => v.name);
      const totalData = this.barData.map((v) => v.total);
      const levelOneData = this.barData.map((v) => v.levelOne);
      const levelTwoData = this.barData.map((v) => v.levelTwo);
      const levelZeroData = this.barData.map((v) => v.levelZero);
      const option = {
        backgroundColor: "transparent",
        tooltip: {
          backgroundColor: "rgba(13, 64, 71, 0.50)",
          borderColor: "rgba(143, 225, 252, 0.60)",
          padding: 8,
          textStyle: {
            color: "#fff",
            fontFamily: "Kingsoft_cloud",
          },
          formatter: (params) => {
            let {
              componentSubType,
              seriesName,
              dataIndex,
              value,
              componentIndex,
              name,
            } = params;
            // 特殊处理 零
            if (componentSubType === "pictorialBar" && seriesName === "特级") {
              value = levelZeroData[dataIndex];
            }
            return `${name} <br/> <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${
              this.colorList[Math.floor(componentIndex / 2)]
            };"></span> ${seriesName}:  ${value}`;
          },
        },
        grid: {
          top: 10,
          bottom: 14,
          containLabel: true,
        },
        legend: {
          data: ["总数", "二级", "一级", "特级"],
          icon: "rect",
          itemWidth: 8,
          itemHeight: 8,
          right: "10%",
          selectedMode: false, //取消图例上的点击事件
          textStyle: {
            fontFamily: "Kingsoft_cloud",
            fontSize: 14,
            color: "#FFFFFF",
          },
        },
        xAxis: [
          {
            type: "category",
            data: xAxis,
            offset: 10,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              margin: 0,
              textStyle: {
                fontFamily: "Kingsoft_cloud",
                color: "#F5F5F5", //更改坐标轴文字颜色
                fontSize: 12, //更改坐标轴文字大小
              },
            },
          },
        ],
        yAxis: [
          {
            splitLine: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
          },
        ],
        series: [
          // 数据1顶部的样式
          {
            name: "总数",
            type: "pictorialBar",
            symbolSize: [20, 15],
            symbolOffset: ["-180%", -8],
            z: 2,
            label: {
              show: false,
            },
            itemStyle: {
              normal: {
                opacity: 1,
                color: this.colorList[0],
              },
            },
            symbolPosition: "end",
            data: totalData,
          },
          // 数据1的柱状图1
          {
            name: "总数",
            type: "bar",
            barWidth: 20,
            z: 1,
            label: {
              show: true,
              position: [0, -20],
              color: "#ffffff",
              fontFamily: "Kingsoft_cloud",
            },
            itemStyle: {
              opacity: 0.9, // 这个是 透明度
              borderRadius: [0, 0, 8, 8], // 5.x
              barBorderRadius: [0, 0, 8, 8], // 4.x
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: "#074285",
                  },
                  {
                    offset: 0.4,
                    color: "#08468E",
                  },
                  {
                    offset: 0.6,
                    color: "#0A4B99",
                  },
                  {
                    offset: 1,
                    color: "#0A56AD", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            data: totalData,
          },
          // 数据2的顶部
          {
            name: "二级", // 头部
            type: "pictorialBar",
            symbolSize: [20, 15],
            symbolOffset: ["-60%", -8],
            z: 12,
            symbolPosition: "end",
            itemStyle: {
              color: this.colorList[1],
            },
            data: levelTwoData,
          },
          // 数据2的柱状图2
          {
            name: "二级",
            type: "bar",
            barWidth: 20,
            z: 2,
            label: {
              show: true,
              position: ["10%", -20],
              fontFamily: "Kingsoft_cloud",
              color: "#ffffff",
            },
            itemStyle: {
              opacity: 0.9, // 这个是 透明度
              borderRadius: [0, 0, 8, 8], // 5.x
              barBorderRadius: [0, 0, 8, 8], // 4.x
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: "#276F74",
                  },
                  {
                    offset: 0.4,
                    color: "#27717C",
                  },
                  {
                    offset: 0.6,
                    color: "#2A7887",
                  },
                  {
                    offset: 1,
                    color: "#35949D", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            data: levelTwoData,
          },

          // 数据3的顶部
          {
            name: "一级", // 头部
            type: "pictorialBar",
            symbolSize: [20, 15],
            symbolOffset: ["60%", -8],
            z: 12,
            symbolPosition: "end",
            itemStyle: {
              color: this.colorList[2],
            },
            data: levelOneData,
          },
          // 数据3的柱状图
          {
            name: "一级",
            type: "bar",
            barWidth: 20,
            z: 2,
            label: {
              show: true,
              position: ["20%", -20],
              color: "#ffffff",
              fontFamily: "Kingsoft_cloud",
            },
            itemStyle: {
              opacity: 0.9, // 这个是 透明度
              borderRadius: [0, 0, 8, 8], // 5.x
              barBorderRadius: [0, 0, 8, 8], // 4.x
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: "#807747",
                  },
                  {
                    offset: 0.4,
                    color: "#807A4F",
                  },
                  {
                    offset: 0.6,
                    color: "#A0965F",
                  },
                  {
                    offset: 1,
                    color: "#AEA262", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            data: levelOneData,
          },

          // 数据4的顶部
          {
            name: "特级", // 头部
            type: "pictorialBar",
            symbolSize: [20, 15],
            symbolOffset: ["180%", -8],
            z: 12,
            symbolPosition: "end",
            itemStyle: {
              color: this.colorList[3],
            },
            data: levelZeroData.map((v) => (v == 0 ? 1 : v)),
          },
          // 数据4的柱状图
          {
            name: "特级",
            type: "bar",
            barWidth: 20,
            z: 2,
            label: {
              show: true,
              position: ["30%", -20],
              color: "#ffffff",
              fontFamily: "Kingsoft_cloud",
            },
            itemStyle: {
              opacity: 0.9, // 这个是 透明度
              borderRadius: [0, 0, 8, 8], // 5.x
              barBorderRadius: [0, 0, 8, 8], // 4.x
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: "#276F74",
                  },
                  {
                    offset: 0.4,
                    color: "#27717C",
                  },
                  {
                    offset: 0.6,
                    color: "#2A7887",
                  },
                  {
                    offset: 1,
                    color: "#35949D", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            data: levelZeroData,
          },
        ],
      };
      this.chart.setOption(option);
      this.handleResize();
    },
    /**
     * resize 饼图
     */
    handleResize() {
      this.$nextTick(() => {
        console.log("resize");
        this.chart?.resize();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  height: 100%;
  width: 100%;
}
</style>
