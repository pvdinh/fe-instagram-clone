import React from "react";
import { Layout, Menu } from 'antd';
import EditAccountSettingComponent from "./EditAccountSettingComponent";

const {Content, Sider } = Layout;

function SettingAccount() {
    return(
        <div className="wrap-body-page-setting-account">
            <Layout className="wrap-navigation-account-setting">
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                    className="sider-navigation"
                >
                    <Menu mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" >
                            nav 1
                        </Menu.Item>
                        <Menu.Item key="2" >
                            nav 1
                        </Menu.Item>
                        <Menu.Item key="3" >
                            nav 1
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Content>
                        <div className="site-layout-background" >
                            <EditAccountSettingComponent />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}
export default SettingAccount