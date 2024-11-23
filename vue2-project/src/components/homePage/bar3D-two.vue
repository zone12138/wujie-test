<!--
 * @FileDescription: 3D 柱状图 2
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
        { name: "2007", value: 23.64 },
        { name: "2008", value: 12.85 },
        { name: "2009", value: 18.97 },
        { name: "2010", value: 27.76 },
        { name: "2011", value: 3.19 },
        { name: "2012", value: 12.95 },
        { name: "2013", value: 2.17 },
        { name: "2014", value: 16.67 },
        { name: "2015", value: 26.97 },
        { name: "2016", value: 14.62 },
        { name: "2017", value: 14.95 },
        { name: "2018", value: 23.99 },
        { name: "2019", value: 12.67 },
        { name: "2020", value: 20.68 },
        { name: "2021", value: 3.31 },
        { name: "2022", value: 0.73 },
        { name: "2023", value: 10.52 },
      ],
      stopListen: null,
      colorList: ["#0C6DDC", "#41B8C1", "#D5C576", "#7373DC"],
    };
  },
  mounted() {
    this.initChart();
  },
  activated() {
    this.handleResize();
    this.stopListen = this.registerEvent();
  },
  deactivated() {
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
      const xAxisData = this.barData.map((v) => v.name);
      // 绘制左侧面
      const CubeLeft = echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0,
        },
        buildPath: function (ctx, shape) {
          // 会canvas的应该都能看得懂，shape是从custom传入的
          const xAxisPoint = shape.xAxisPoint;
          const c0 = [shape.x, shape.y];
          const c1 = [shape.x - 8, shape.y - 8];
          const c2 = [xAxisPoint[0] - 8, xAxisPoint[1] - 8];
          const c3 = [xAxisPoint[0], xAxisPoint[1]];
          ctx
            .moveTo(c0[0], c0[1])
            .lineTo(c1[0], c1[1])
            .lineTo(c2[0], c2[1])
            .lineTo(c3[0], c3[1])
            .closePath();
        },
      });
      // 绘制右侧面
      const CubeRight = echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0,
        },
        buildPath: function (ctx, shape) {
          const xAxisPoint = shape.xAxisPoint;
          const c1 = [shape.x, shape.y];
          const c2 = [xAxisPoint[0], xAxisPoint[1]];
          const c3 = [xAxisPoint[0] + 8, xAxisPoint[1] - 4];
          const c4 = [shape.x + 8, shape.y - 4];
          ctx
            .moveTo(c1[0], c1[1])
            .lineTo(c2[0], c2[1])
            .lineTo(c3[0], c3[1])
            .lineTo(c4[0], c4[1])
            .closePath();
        },
      });
      // 绘制顶面
      const CubeTop = echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0,
        },
        buildPath: function (ctx, shape) {
          const c1 = [shape.x, shape.y];
          const c2 = [shape.x + 8, shape.y - 4];
          const c3 = [shape.x + 2, shape.y - 11];
          const c4 = [shape.x - 7, shape.y - 7];
          ctx
            .moveTo(c1[0], c1[1])
            .lineTo(c2[0], c2[1])
            .lineTo(c3[0], c3[1])
            .lineTo(c4[0], c4[1])
            .closePath();
        },
      });
      // 注册三个面图形
      echarts.graphic.registerShape("CubeLeft", CubeLeft);
      echarts.graphic.registerShape("CubeRight", CubeRight);
      echarts.graphic.registerShape("CubeTop", CubeTop);

      let seriesData = this.barData.map((v) => v.value);
      let max = seriesData.map((v) => v + 0.5);

      const option = {
        backgroundColor: "transparent",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          backgroundColor: "rgba(13, 64, 71, 0.50)",
          borderColor: "rgba(143, 225, 252, 0.60)",
          padding: 8,
          textStyle: {
            color: "#fff",
            fontFamily: "Kingsoft_cloud",
          },
          formatter: function (params, ticket, callback) {
            const item = params[1];
            return item.name + "年: " + item.value;
          },
        },
        grid: {
          left: "1%",
          right: "1%",
          bottom: "1%",
          top: "10%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: xAxisData,
          axisLine: {
            show: true,
            lineStyle: {
              width: 2,
              color: "#053B75",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            //坐标轴字体颜色
            textStyle: {
              color: "#fff",
              fontSize: 14,
              fontFamily: "Kingsoft_cloud",
            },
          },
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
        },
        series: [
          {
            type: "custom",
            renderItem: function (params, api) {
              const location = api.coord([api.value(0), api.value(1)]);
              return {
                type: "group",
                children: [
                  {
                    type: "CubeLeft",
                    shape: {
                      api,
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: "#1FEAEA",
                    },
                  },
                  {
                    type: "CubeRight",
                    shape: {
                      api,
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: "#00B8C1",
                    },
                  },
                  {
                    type: "CubeTop",
                    shape: {
                      api,
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: "#00FEFF",
                    },
                  },
                ],
              };
            },
            data: max,
          },
          {
            type: "custom",
            renderItem: (params, api) => {
              const location = api.coord([api.value(0), api.value(1)]);
              return {
                type: "group",
                children: [
                  {
                    type: "CubeLeft",
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      ...api.style,
                      fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: "#3387F7",
                        },
                        {
                          offset: 1,
                          color: "#061539",
                        },
                      ]),
                    },
                  },
                  {
                    type: "CubeRight",
                    shape: {
                      api,
                      xValue: api.value(0),
                      yValue: api.value(1),
                      x: location[0],
                      y: location[1],
                      xAxisPoint: api.coord([api.value(0), 0]),
                    },
                    style: {
                      fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: "#2158AC",
                        },
                        {
                          offset: 0.8,
                          color: "#061437",
                        },
                      ]),
                    },
                  },
                ],
              };
            },

            data: seriesData,
          },
          {
            type: "bar",
            itemStyle: {
              color: "transparent",
            },
            tooltip: {},
            label: {
              show: true,
              position: [5, -35],
              color: "#ffffff",
              fontFamily: "Kingsoft_cloud",
            },
            data: seriesData,
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
      console.log("resize");
      this.$nextTick(() => {
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
