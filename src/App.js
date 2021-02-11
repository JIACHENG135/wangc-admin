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
import { faCartPlus,faMoneyCheck,faIndustry,faUserFriends,faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainPage from './components/MainPage';
import ProductPage from './components/ProductPage';
import InputPage from './components/ProductPage/InputPage';
import HrPage from './components/HrPage';
import SalesPage from './components/SalesPage';
import TechPage from './components/TechPage';
import FinancialPage from './components/FinancialPage';

import FooterPage from './components/FooterPage';
const { Header, Content, Footer, Sider } = Layout;
const {SubMenu} = Menu;

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
        <SubMenu key="sub1" icon={<><FontAwesomeIcon icon={faCartPlus} /></> } title={collapsed ? '':<Link to={'/sales'}><span style={{paddingLeft: '10px'}}>销售部</span></Link>}>
          <Menu.Item key="1"><Link to={'/product/input'}>录单</Link></Menu.Item>
          <Menu.Item key="2">销售计划</Menu.Item>
          <Menu.Item key="3">统计报告</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<><FontAwesomeIcon icon={faMoneyCheck} /></> } title={collapsed ? '':<Link to={'/financial'}><span style={{paddingLeft: '10px'}}>财务部</span></Link>}>
          <SubMenu key="sub3" title="税务">
            <Menu.Item key="4">资产负债表</Menu.Item>
            <Menu.Item key="5">利润表</Menu.Item>
            <Menu.Item key="6">现金流量表</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title="内部登记表">
            <Menu.Item key="7">科目余额表</Menu.Item>
            <Menu.Item key="8">费用登记表</Menu.Item>
            <Menu.Item key="9">饲料及鸡登记表</Menu.Item>
          </SubMenu>
        </SubMenu>

        <SubMenu key="sub5" icon={<><FontAwesomeIcon icon={faIndustry} /></> } title={collapsed ? '':<Link to={'/product'}><span style={{paddingLeft: '13px'}}>生产部</span></Link>}>
          <SubMenu key="sub6" title="种植基地">
            <Menu.Item key="10">填一次</Menu.Item>
            <Menu.Item key="11">日常填</Menu.Item>
            <Menu.Item key="12">生产报告</Menu.Item>
          </SubMenu>
          <SubMenu key="sub7" title="养殖基地">
            <Menu.Item key="13">饲料</Menu.Item>
            <Menu.Item key="14">库存及饲养</Menu.Item>
            <Menu.Item key="15">生产报告</Menu.Item>
          </SubMenu>

        </SubMenu>
        <Menu.Item key="16" icon={<FontAwesomeIcon icon={faUserFriends} /> } >
          <Link to={'/hr'}>人力资源部</Link>
        </Menu.Item>
        <Menu.Item key="17" icon={<FontAwesomeIcon icon={faLaptop} /> } >
          <Link to={'/tech'}>技术部</Link>
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
          overflowY: 'auto',
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
              <Route exact path="/product/input" component={InputPage}/>
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
