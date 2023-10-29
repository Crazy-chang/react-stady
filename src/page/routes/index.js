import {
  UploadOutlined,
  UserOutlined,
  MenuFoldOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import { Route, Switch, Redirect } from "react-router-dom"

import HomePage from '../home/index'
import UserList from '../user/index'
import UserListDetail from '../user/detail'
import NonePage from '../none/index'

const routeItems = [
  {
    key: '/homePage',
    icon: <UserOutlined />,
    label: '首页',
    component:HomePage
  },
  {
    key: '/father',
    icon: <MenuFoldOutlined />,
    label: '系统管理',
    component:null,
    children: [
      {
        key: '/father/userList',
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
  {
    key: '/father/userDetail/detail',
    icon: <VideoCameraOutlined />,
    label: '资源管理',
    component:null,
    children: [
      {
        key: '/father/userList',
        icon: <VideoCameraOutlined />,
        label: '文件管理',
        component:UserList
      },
      {
        key: '/father/userDetail/detail',
        icon: <VideoCameraOutlined />,
        label: '音视频管理',
        component:UserListDetail
      },
    ]
  },
  {
    key: '/nonePage',
    icon: <UploadOutlined />,
    label: '社区管理',
    component:NonePage
  },
  {
    key: '/nonePage',
    icon: <UploadOutlined />,
    label: '消息通知管理',
    component:NonePage
  },
  {
    key: '/nonePage',
    icon: <UploadOutlined />,
    label: '数据可视化',
    component:NonePage
  },
  {
    key: '/nonePage',
    icon: <UploadOutlined />,
    label: '高德地图',
    component:NonePage
  },
  {
    key: '/nonePage',
    icon: <UploadOutlined />,
    label: '低代码管理',
    component:NonePage
  },
]

const flatRoute = () => {
  const arr = []
  function flatFun(list){
    list.forEach(it => {
      const { key,label} = it
      if(it.children){
        arr.push({ key,label})
        flatFun(it.children)
      }else {
        arr.push({ key,label})
      }
    })
  }
  flatFun(routeItems)
  return arr
}

const RouteList = () => {

    return (
        <Switch>
            <Route exact path='/homePage' component={HomePage}></Route>
            <Route exact path='/father/userList' component={UserList}></Route>
            <Route exact path='/father/userDetail/detail/:id' component={UserListDetail}></Route>
            <Route exact path='/nonePage' component={NonePage}></Route>
            <Route exact render={() => {
              <div>404</div>
            }} />
            <Redirect from='/' to='/home' />
          </Switch>
    )
}

export {
  routeItems,
  flatRoute,
  RouteList
};