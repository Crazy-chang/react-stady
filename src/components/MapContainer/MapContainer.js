import { useEffect,useState } from "react";
import styles from "./MapContainer.css";
import AMapLoader from "@amap/amap-jsapi-loader";
import { Input } from "antd";
const { Search } = Input;

export default function MapContainer() {
  let map = null;
  // let autoC = null;

  const [AMapObj, setAMapObj] = useState(false);

  useEffect(() => {
    AMapLoader.load({
      key: "26de2971681c8c61cfb5d61dc76c3be5", // 申请好的Web端开发者Key，首次调用 load 时必填
      // version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15;  2.0版本不兼容
      plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
      .then((AMap) => {
        setAMapObj(AMap);
        // 地图模式 3D；初始化地图显示的缩放级别；初始化地图中心点位置；初始地图俯仰角度；初始地图是否展示地形
        map = new AMap.Map("container", {
          viewMode: "3D",
          zoom: 12,
          center: [113.3708, 23.12406],
          pitch: 5,
          terrain: true,
        });

        //加载输入提示插件
        // map.plugin(["AMap. Autocomplete"], () => {
        //   autoC = new AMap.Autocomplete({
        //     input: "seatchId",
        //   });
        // });
      })
      .catch((e) => {
        console.log(e);
      });
      

    return () => {
      map?.destroy();
    };
  }, []);

  const onSearch = (searchKeyword) => {
    console.log("MSearch.search=", searchKeyword);
    AMapObj.plugin("AMap.PlaceSearch", () => {
      const placeSearch = new AMapObj.PlaceSearch({
        pageSize: 10, //每页结果数,默认10
        pageIndex: 1, //请求页码，默认1
        extensions: "base",
      });

      placeSearch.search(searchKeyword, (status, result) => {
        console.log("搜索===", status, result);
        if (status === "complete" && result.info === "OK") {
          // 处理搜索结果
          const pois = result.poiList.pois;
          // 在地图上标记搜索结果
          for (const poi of pois) {
            new AMapObj.Marker({
              map: map,
              position: poi.location,
            });
          }
        } else {
          console.error("搜索失败", status, result);
        }
      });
    });
  };

  return (
    <>
      <Search
        id="seatchId"
        size="large"
        placeholder="请输入地址"
        enterButton="搜索"
        onSearch={(e) => onSearch(e)}
        style={{ width: 500 }}
      />
      <div
        id="container"
        className={styles.container}
        style={{ height: "70vh" }}
      ></div>
    </>
  );
}
