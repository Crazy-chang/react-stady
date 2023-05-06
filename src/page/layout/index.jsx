import React, { useState,useEffect } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, theme, message } from 'antd';
import { useHistory } from "react-router-dom"
import './index.css'
import store from '../../redux/index'
import { RouteList, routeItems} from '../routes/index'

const { Header, Sider, Content } = Layout;

const LayoutPage = () => {
  
  const history = useHistory()
  const pathname = history.location.pathname
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState([pathname]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onClickMenu = (e) => {
    history.push(e.key);
  }

  const outLogin = () => {
    message.success('退出成功')
    store.dispatch({type:'SETTOKEN','token':null})
    history.push('/login')
  }

  useEffect(() => {
    setSelectedKeys(pathname)
  },[pathname])

  return (
    <Layout>
      <Sider className='sider' trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          items={routeItems}
          onClick={onClickMenu}
          selectedKeys={selectedKeys}
          />
      </Sider>
      <Layout>
        <Header className='headerCla' style={{ padding: 0, background: colorBgContainer }}>
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
          <div style={{padding: '0 20px'}} onClick={outLogin}>退出</div>
        </Header>
        <Content
          style={{
            margin: '20px',
            padding: 20,
            minHeight: 280,
            background: colorBgContainer,
            height:'100%',
            overflow: 'auto'
          }}
        >
          <RouteList />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;