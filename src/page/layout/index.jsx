import React, { useState, useEffect } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme, message } from "antd";
import { useHistory } from "react-router-dom";
import "./index.css";
import store from "../../redux/index";
import { RouteList, routeItems, flatRoute } from "../routes/index";
import Navbar from "./navbar";

const { Header, Sider, Content } = Layout;

const LayoutPage = () => {
  const history = useHistory();
  const pathname = history.location.pathname;
  const [collapsed, setCollapsed] = useState(false);
  const [userAgent, setUserAgent] = useState("pc");
  const [selectedKeys, setSelectedKeys] = useState([pathname]);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // 面包屑
  const [breadcrumb, setBreadcrumb] = useState("首页");

  const flatRouteList = flatRoute();

  useEffect(() => {
    const val = store.getState().useEquipment;
    // console.log("asd1",store.getState().breadcrumbStr)
    // setBreadcrumb(store.getState().breadcrumbStr)
    
    setUserAgent(val);
    val === "phone" && setCollapsed(true);
  }, []);

  const onClickMenu = (e) => {
    history.push(e.key);
    if (e.keyPath.length > 0) {
      const arr = [];
      let str = "";
      e.keyPath.reverse(); // 数组倒序
      e.keyPath.forEach((it, index) => {
        for (let i = 0; i < flatRouteList.length; i++) {
          if (it === flatRouteList[i].key) {
            arr.push(flatRouteList[i]);
            str = `${str}${index >= 1 ? " / " : ""}${flatRouteList[i].label}`;
          }
        }
      });
      setBreadcrumb(str);
      store.dispatch({ type: "BREADCRUMB", 'breadcrumbStr': str });
      // console.log("click ==", arr);
    }
  };

  const outLogin = () => {
    message.success("退出成功");
    store.dispatch({ type: "SETTOKEN", token: null });
    history.push("/");
  };

  useEffect(() => {
    setSelectedKeys(pathname);
  }, [pathname]);

  return (
    <Layout>
      <Sider className="sider" trigger={null} collapsible collapsed={collapsed}>
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
        <Header
          className="headerCla"
          style={{ padding: 0, background: colorBgContainer }}
        >
          <div className="headerCla">
            {userAgent === "pc" ? (
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
            ) : (
              ""
            )}
            <div>{breadcrumb}</div>
          </div>
          <div
            style={{ padding: "0 20px", cursor: "pointer" }}
            onClick={outLogin}
          >
            退出
          </div>
        </Header>
        <Navbar />
        <Content
          className="contentCls"
          style={{ background: colorBgContainer }}
        >
          <RouteList />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;
