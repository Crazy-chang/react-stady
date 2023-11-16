import { useEffect } from "react";
import styles from "./MapContainer.css";
import AMapLoader from "@amap/amap-jsapi-loader";

export default function MapContainer() {
  let map = null;

  useEffect(() => {
    AMapLoader.load({
      key: "190a1a51cb7da49e745e36142e5c21ae", // 申请好的Web端开发者Key，首次调用 load 时必填
      // version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15;  2.0版本不兼容
      plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
      .then((AMap) => {
        map = new AMap.Map("container", {
          // 设置地图容器id
          viewMode: "3D", // 地图模式 3D
          zoom: 12, // 初始化地图显示的缩放级别 
          center: [113.370800,23.124060], // 初始化地图中心点位置 
          pitch:5, // 初始地图俯仰角度
        });
      })
      .catch((e) => {
        console.log(e);
      });

    return () => {
      map?.destroy();
    };
  }, []);

  return (
    <div
      id="container"
      className={styles.container}
      style={{ height: "80vh" }}
    ></div>
  );
}
