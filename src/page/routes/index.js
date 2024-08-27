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
import AccountManage from "../user/accountManage";
import NonePage from "../none/index";
import MapPage from "../mapPage/index";
import EchartPage from "../echartPage/index";
import OpenAi from "../openAi/index";
import PublicContent from "../publicContent/index"
import FlowChart  from "../flowChart/index"

// 左侧菜单
const routeItems = [
  {
    key: "/homePage",
    icon: <UserOutlined />,
    label: "首页",
    component: HomePage,
  },
  {
    key: "/publicContent",
    icon: <UploadOutlined />,
    label: '内容管理',
    component:PublicContent
  },
  {
    key: '/flowChart',
    icon: <AmazonOutlined />,
    label: '流程图',
    component:FlowChart
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
      },
      {
        key: '/father/accountManage',
        icon: <VideoCameraOutlined />,
        label: '账号管理',
        component:AccountManage
      },
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

// 菜单对应得页面
const RouteList = () => {
  return (
    <Switch>
      <Route exact path="/homePage" component={HomePage}></Route>
      <Route exact path="/publicContent" component={PublicContent}></Route>
      <Route exact path="/flowChart" component={FlowChart}></Route>
      <Route exact path="/openAi" component={OpenAi}></Route>
      <Route exact path="/father/userList" component={UserList}></Route>
      <Route exact path="/father/accountManage" component={AccountManage}></Route>
      <Route exact path="/father/userDetail/detail" component={UserListDetail}></Route>
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
