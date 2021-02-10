/* eslint-disable import/no-anonymous-default-export */
import "antd/dist/antd.css";
import "./App.css";
import {Layout, Menu, Row, Col} from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useLocation
} from "react-router-dom";
import React, {useState} from 'react';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import MainPage from './components/MainPage';
import ProductPage from './components/ProductPage';
import HrPage from './components/HrPage';
import SalesPage from './components/SalesPage';
import TechPage from './components/TechPage';
import FinancialPage from './components/FinancialPage';

import FooterPage from './components/FooterPage';

const { Header, Content, Footer, Sider } = Layout;


const App = () => {
  const [collapsed,setCollapsed] = useState(false);

  const toggle = () => {
      setCollapsed(!collapsed)
  }
  return (
    <Layout style={{height: '100%'}}>
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" >
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to={'/product'}>销售部</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link to={'/financial'}>财务部</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          <Link to={'/hr'}>人力资源部</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<UploadOutlined />}>
          <Link to={'/tech'}>技术部</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<UploadOutlined />}>
          <Link to={'/sales'}>销售部</Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: toggle,
        })}
      </Header>
      <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
        <Switch>
              <Redirect exact from="/" to="/main" />
              <Route exact path='/main' component={MainPage} />
              <Route exact path='/product' component={ProductPage} />
              <Route exact path='/financial' component={FinancialPage} />
              <Route exact path='/hr' component={HrPage} />
              <Route exact path='/tech' component={TechPage} />
              <Route exact path='/sales' component={SalesPage} />
        </Switch>
      </Content>

      <Footer>
        <FooterPage />
      </Footer>
    </Layout>
  </Layout>

  )
}
export default function() {
  return (
    <Router><App /></Router>
  );
}
