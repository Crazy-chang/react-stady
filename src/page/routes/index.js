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
    label: '菜单1',
    component:HomePage
  },
  {
    key: '/father',
    icon: <MenuFoldOutlined />,
    label: '用户管理',
    component:null,
    children: [
      {
        key: '/father/userList',
        icon: <VideoCameraOutlined />,
        label: '用户列表',
        component:UserList
      },
      // {
      //   key: '/father/userDetail/detail',
      //   icon: <VideoCameraOutlined />,
      //   label: '用户详情',
      //   component:UserListDetail
      // },
    ]
  },
  {
    key: '/nonePage',
    icon: <UploadOutlined />,
    label: '菜单 3',
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
            <Route path='/homePage' component={HomePage}></Route>
            <Route path='/father/userList' component={UserList}></Route>
            <Route path='/father/userDetail/detail' component={UserListDetail}></Route>
            <Route path='/nonePage' component={NonePage}></Route>
            <Route render={() => {
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