<template>
  <div class="map-container">
    <div id="container"></div>
  </div>
</template>

<script setup>
import AMapLoader from "@amap/amap-jsapi-loader";

let map = null,
  scale,
  toolbar;
onMounted(() => {
  initMap();
});
onUnmounted(() => {
  map?.destroy();
  map = null;
});

const initMap = () => {
  window._AMapSecurityConfig = {
    securityJsCode: "f953f6bf64387e9ed80cbe034b09816e",
  };
  AMapLoader.load({
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    key: "3a821af7809ca1e3fb4ee11d1f4e25eb", // 申请好的Web端开发者Key，首次调用 load 时必填
    plugins: ["AMap.Scale", "AMap.ToolBar"], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
  })
    .then((AMap) => {
      // 设置地图容器id
      map = new AMap.Map("container", {
        pitch: 50, //地图俯仰角度，有效范围 0 度- 83 度
        viewMode: "3D", // 是否为3D地图模式
        zoom: 9, // 初始化地图级别
        center: [113.30026671543715, 23.118009438369175], // 初始化地图中心点位置(广州)
      });
      // 添加插件
      scale = new AMap.Scale();
      map.addControl(scale);
      toolbar = new AMap.ToolBar();
      map.addControl(toolbar);

      map.on("click", (ev) => {
        //触发事件的地理坐标，AMap.LngLat 类型
        const lnglat = ev.lnglat;
        console.log(lnglat, ev.type)
      })
    })
    .catch((e) => {
      console.log(e);
    });
};
</script>

<style lang="scss" scoped>
.map-container {
  height: 100%;
  width: 100%;
  padding: 20px;

  #container {
    width: 100%;
    height: 100%;
  }
}
</style>
