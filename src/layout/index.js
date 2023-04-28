import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Route, Switch, useHistory, Redirect } from "react-router-dom"
import './index.css'
import homePage from '../page/home/index'
import testonePage from '../page/test1/index'
import nonePage from '../page/none/index'

const { Header, Sider, Content } = Layout;

const LayoutPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const routeList = [
    {
      key: '/testPage',
      icon: <UserOutlined />,
      label: '菜单1'
    },
    {
      key: '/testonePage',
      icon: <VideoCameraOutlined />,
      label: '菜单 2',
      children: [
        {
          key: '/testonePage',
          icon: <UserOutlined />,
          label: '菜单2-1'
        }
      ]
    },
    {
      key: '/nonePage',
      icon: <UploadOutlined />,
      label: '菜单 3',
    },
  ]

  const history = useHistory()

  const onClickMenu = (e) => {
    console.log('点击菜单', e)
    history.push(e.key);
  }

  return (
    <Layout>
      <Sider className='sider' trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"

          mode="inline"
          defaultSelectedKeys={['1']}
          items={routeList}
          onClick={onClickMenu}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Switch>
            <Route path='/home' component={homePage}></Route>
            <Route path='/testonePage' component={testonePage}></Route>
            <Route path='/nonePage' component={nonePage}></Route>
            <Route render={() => {
              <div>404</div>
            }} />
            <Redirect from='/' to='/home' />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;