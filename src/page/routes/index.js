import {
  UploadOutlined,
  UserOutlined,
  MenuFoldOutlined,
  VideoCameraOutlined,
  BarChartOutlined,
  EnvironmentOutlined,
  AmazonOutlined,
} from "@ant-design/icons";

import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "../home/index";
import UserList from "../user/index";
import UserListDetail from "../user/detail";
import NonePage from "../none/index";
import MapPage from "../mapPage/index";
import EchartPage from "../echartPage/index";
import OpenAi from "../openAi/index";

const routeItems = [
  {
    key: "/homePage",
    icon: <UserOutlined />,
    label: "首页",
    component: HomePage,
  },
  {
    key: '/openAi',
    icon: <AmazonOutlined />,
    label: 'OpenAi',
    component:OpenAi
  },
  {
    key: "/mapPage",
    icon: <EnvironmentOutlined />,
    label: "高德地图",
    component: MapPage,
  },
  {
    key: '/echartPage',
    icon: <BarChartOutlined />,
    label: '数据可视化',
    component:EchartPage
  },
  {
    key: "/father",
    icon: <MenuFoldOutlined />,
    label: '系统管理',
    component:null,
    children: [
      {
        key: "/father/userList",
        icon: <VideoCameraOutlined />,
        label: '权限管理',
        component:UserList
      },
      {
        key: '/father/userDetail/detail',
        icon: <VideoCameraOutlined />,
        label: '菜单管理',
        component:UserListDetail
      }
    ]
  },
  // {
  //   key: '/father/userDetail/detail',
  //   icon: <VideoCameraOutlined />,
  //   label: '资源管理',
  //   component:null,
  //   children: [
  //     {
  //       key: '/father/userList',
  //       icon: <VideoCameraOutlined />,
  //       label: '文件管理',
  //       component:UserList
  //     },
  //     {
  //       key: '/father/userDetail/detail',
  //       icon: <VideoCameraOutlined />,
  //       label: '音视频管理',
  //       component:UserListDetail
  //     },
  //   ]
  // },
  // {
  //   key: "/nonePage",
  //   icon: <UploadOutlined />,
  //   label: '社区管理',
  //   component:NonePage
  // },
  // {
  //   key: '/nonePage',
  //   icon: <UploadOutlined />,
  //   label: '消息通知管理',
  //   component:NonePage
  // },
  // {
  //   key: '/nonePage',
  //   icon: <UploadOutlined />,
  //   label: '低代码管理',
  //   component:NonePage
  // },
];

const flatRoute = () => {
  const arr = [];
  function flatFun(list) {
    list.forEach((it) => {
      const { key, label } = it;
      if (it.children) {
        arr.push({ key, label });
        flatFun(it.children);
      } else {
        arr.push({ key, label });
      }
    });
  }
  flatFun(routeItems);
  return arr;
};

const RouteList = () => {
  return (
    <Switch>
      <Route exact path="/homePage" component={HomePage}></Route>
      <Route exact path="/openAi" component={OpenAi}></Route>
      <Route exact path="/father/userList" component={UserList}></Route>
      <Route
        exact
        path="/father/userDetail/detail/:id"
        component={UserListDetail}
      ></Route>
      <Route exact path="/mapPage" component={MapPage}></Route>
      <Route exact path="/echartPage" component={EchartPage}></Route>
      <Route exact path="/nonePage" component={NonePage}></Route>
      <Route
        exact
        render={() => {
          <div>404</div>;
        }}
      />
      <Redirect from="/" to="/homePage" />
    </Switch>
  );
};

export { routeItems, flatRoute, RouteList };
