import {
  UploadOutlined,
  UserOutlined,
  MenuFoldOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import { Route, Switch, Redirect } from "react-router-dom"

import HomePage from '../home/index'
import UserList from '../user/index'
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
    label: '菜单 2',
    component:null,
    children: [
      {
        key: '/father/userList',
        icon: <VideoCameraOutlined />,
        label: '菜单2-1',
        component:UserList
      }
    ]
  },
  {
    key: '/nonePage',
    icon: <UploadOutlined />,
    label: '菜单 3',
    component:NonePage
  },
]

const RouteList = () => {

    return (
        <Switch>
          {/* {
            routeItems.map((item) => (
              <Route key={item.key} path={item.key} exact component={item.component} ></Route>
            ))
          } */}
            <Route path='/homePage' component={HomePage}></Route>
            <Route path='/father/userList' component={UserList}></Route>
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
  RouteList
};