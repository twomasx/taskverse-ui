import React, { Component } from "react";
import { Layout, Menu } from "antd";
import User from "../user/user.component";
import Logo from "../../images/taskverse_logo.png";
const { SubMenu } = Menu;
const { Header, Sider, Content, Footer } = Layout;
 
export default class PrimaryLayout extends Component {
  componentName = "Layout Component";

  render = () => {
    return (
      <div>
        <Layout style={{ height: "100vh" }}>
          <Header className="header">
            <div style={{ float: "left", padding: "0px 50px 0px 0px" }}>
              <img src={Logo} alt="logo"/>
            </div>
            <Menu theme="dark" mode="horizontal">
              <Menu.Item> Projects </Menu.Item>
              <Menu.Item> Home </Menu.Item>
              <Menu.Item> About </Menu.Item>
              <Menu.Item style={{ float: "right" }}> Login/Sign Up </Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>
                  <Menu.Item> Project 1 </Menu.Item>
                  <Menu.Item> Project 2 </Menu.Item>
                  <Menu.Item> Project 3 </Menu.Item>
              </Menu>
            </Sider>
            <Content>
              <User />
            </Content>
          </Layout>
          <Footer style={{ backgroundColor: "black" }}>
            <p style={{ color: "white" }}>2020 @polymad</p>
          </Footer>
        </Layout>
      </div>
    );
  };
}
