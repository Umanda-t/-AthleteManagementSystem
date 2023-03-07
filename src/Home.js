import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css';
import 'antd/dist/antd.css'
import { Alert, Tabs } from 'antd';

import { Image } from 'antd';

import Banner from './Banner';
import { Anchor } from 'antd';
import { Layout, Menu } from 'antd';
import { Divider } from 'antd';
import { Carousel } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import New from './New';
import All from './All';
import Search from './Search';
const { Link } = Anchor;
const { Header, Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function Home() {
  return (
    <div className="Home" id="root">
      <Layout>

        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#FFFF' }} >
          <Menu style={{ height: '65px' }} mode="horizontal" defaultSelectedKeys={['1']} >
          <Menu.Item> </Menu.Item >
            <Menu.Item><Image
              width={65}
              height={65}
              src="https://i.postimg.cc/N0BFdp8K/pngegg.png" alt="logo"

            />
            
            </Menu.Item >
           
            <Menu.Item key="1"> <h2>  Athletes Management System   </h2> <Anchor affix={false}><Link href="/"  /></Anchor></Menu.Item>
            
            <Menu.Item key="2"><Anchor affix={false}><h5>
              <Link href="/" title="Home" /></h5></Anchor></Menu.Item>
              <Menu.Item key="3"><Anchor affix={false}><h5>
              <Link href="/New" title="New" /></h5></Anchor></Menu.Item>
              <Menu.Item key="4"><Anchor affix={false} ><h5>
              <Link href="/All" title="All " /></h5></Anchor></Menu.Item>
              <Menu.Item key="5"><Anchor affix={false}><h5>
              <Link href="/Search" title="Search " /></h5></Anchor></Menu.Item>
             
          </Menu>
            
          
        </Header>



        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />

          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <br/> <br/>  
            
        <Router>
            <Switch>
                
                <Route path="/">
                   
                    <Switch>
                    <Route exact path={'/'} component={Banner}>
                    <Banner/></Route>
                        
                        <Route exact path={'/New'} component={New}>
                        <New/></Route>
                        <Route exact path={'/All'} component={All}>
                        <All/></Route>
                        <Route exact path={'/Search'} component={Search}>
                        <Search/></Route>
                    </Switch>
                </Route>

            </Switch>
        </Router>


        
                

           </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>  Athletes Management System </Footer>
        </Layout>
      </Layout>
    </div>
  );
}
export default Home;