import React, {useEffect, useState} from "react";
import { Layout, Menu } from 'antd';
import EditAccountSettingComponent from "./EditAccountSettingComponent";
import ChangePasswordComponent from "./ChangePasswordComponent";

const {Content, Sider } = Layout;

function SettingAccount() {
    const [alertSubmit,setAlertSubmit] = useState("")
    const [selectedMenuItem, setSelectedMenuItem]= useState('1')

    return(
        <div style={{minHeight: "100%",background: "var(--bg-profile-page)"}} >
            <div className="wrap-body-page-setting-account">
                <Layout className="wrap-navigation-account-setting">
                    <Sider
                        breakpoint="lg"
                        // collapsedWidth="0"
                        collapsed={false}
                        onBreakpoint={broken => {
                            console.log(broken);
                        }}
                        onCollapse={(collapsed, type) => {
                            console.log(collapsed, type);
                        }}
                        className="sider-navigation"
                    >
                        <Menu onClick={(e)=>{setSelectedMenuItem(e.key)}} mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1" >
                                Edit Profile
                            </Menu.Item>
                            <Menu.Item key="2" >
                                Change Password
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content>
                            <div className="site-layout-background" >
                                {
                                    selectedMenuItem==1 ?
                                        <EditAccountSettingComponent setAlertSubmit={(alert)=>{setAlertSubmit(alert)}} />
                                        :
                                        <ChangePasswordComponent />
                                }
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </div>

            <div className="alertSubmitUserAccount">
                <div className="alert-text">{alertSubmit}</div>
            </div>
        </div>
    )
}
export default SettingAccount