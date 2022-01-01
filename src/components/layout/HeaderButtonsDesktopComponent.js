import PostPostComponent from "./PostPostComponent";
import {Dropdown, Menu} from "antd";
import React, {useState} from "react";
import loginActions from "../../redux/actions/loginActions";
import {connect} from "react-redux";
import ActivityComponent from "./activity/ActivityComponent";

function HeaderButtonsDesktopComponent(props) {
    const [reLoad,setReLoad] = useState(true)

    const setCurrentPage = (s) =>{
        localStorage.setItem("currentPage",s)
        setReLoad(!reLoad)
    }

    const menu = (
        <Menu className="wrap-page-home-in-header wrap-more-actions">
            <Menu.Item className={"wrap-item"}>
                <a className="wrap-icon" rel="noopener noreferrer" href={`/${props.userAccountProfile.username}`} onClick={()=>{setCurrentPage(" ")}}>
                <div className="icon">
                        <svg aria-label="Profile" className="_8-yf5 " fill="#262626" height="16" role="img"
                             viewBox="0 0 32 32" width="16">
                            <path fill="var(--text-dark)"
                                  stroke="var(--text-dark)"
                                  d="M16 0C7.2 0 0 7.1 0 16c0 4.8 2.1 9.1 5.5 12l.3.3C8.5 30.6 12.1 32 16 32s7.5-1.4 10.2-3.7l.3-.3c3.4-3 5.5-7.2 5.5-12 0-8.9-7.2-16-16-16zm0 29c-2.8 0-5.3-.9-7.5-2.4.5-.9.9-1.3 1.4-1.8.7-.5 1.5-.8 2.4-.8h7.2c.9 0 1.7.3 2.4.8.5.4.9.8 1.4 1.8-2 1.5-4.5 2.4-7.3 2.4zm9.7-4.4c-.5-.9-1.1-1.5-1.9-2.1-1.2-.9-2.7-1.4-4.2-1.4h-7.2c-1.5 0-3 .5-4.2 1.4-.8.6-1.4 1.2-1.9 2.1C4.2 22.3 3 19.3 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13c0 3.3-1.2 6.3-3.3 8.6zM16 5.7c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 11c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"></path>
                        </svg>
                    </div>
                    Profile
                </a>
            </Menu.Item>
            <Menu.Item className={"wrap-item"}>
                <a className="wrap-icon" rel="noopener noreferrer" href={`/${props.userAccountProfile.username}/saved`} onClick={()=>{setCurrentPage(" ")}} >
                    <div className="icon">
                        <svg aria-label="Saved" className="_8-yf5 " fill="#262626" height="16" role="img"
                             viewBox="0 0 32 32" width="16">
                            <path fill="var(--text-dark)"
                                  stroke="var(--text-dark)"
                                  d="M28.7 32c-.4 0-.8-.2-1.1-.4L16 19.9 4.4 31.6c-.4.4-1.1.6-1.6.3-.6-.2-.9-.8-.9-1.4v-29C1.8.7 2.5 0 3.3 0h25.4c.8 0 1.5.7 1.5 1.5v29c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM4.8 3v23.9l9.4-9.4c.9-.9 2.6-.9 3.5 0l9.4 9.4V3H4.8z"></path>
                        </svg>
                    </div>
                    Saved
                </a>
            </Menu.Item>
            <Menu.Item className={"wrap-item"}>
                <a className="wrap-icon" rel="noopener noreferrer" href="/accounts/edit" onClick={()=>{setCurrentPage(" ")}} >
                    <div className="icon">
                        <svg aria-label="Settings" className="_8-yf5 " fill="#262626" height="16" role="img"
                             viewBox="0 0 32 32" width="16">
                            <path fill="var(--text-dark)"
                                  stroke="var(--text-dark)"
                                  d="M31.2 13.4l-1.4-.7c-.1 0-.2-.1-.2-.2v-.2c-.3-1.1-.7-2.1-1.3-3.1v-.1l-.2-.1v-.3l.5-1.5c.2-.5 0-1.1-.4-1.5l-1.9-1.9c-.4-.4-1-.5-1.5-.4l-1.5.5H23l-.1-.1h-.1c-1-.5-2-1-3.1-1.3h-.2c-.1 0-.1-.1-.2-.2L18.6.9c-.2-.5-.7-.9-1.2-.9h-2.7c-.5 0-1 .3-1.3.8l-.7 1.4c0 .1-.1.2-.2.2h-.2c-1.1.3-2.1.7-3.1 1.3h-.1l-.1.2h-.3l-1.5-.5c-.5-.2-1.1 0-1.5.4L3.8 5.7c-.4.4-.5 1-.4 1.5l.5 1.5v.5c-.5 1-1 2-1.3 3.1v.2c0 .1-.1.1-.2.2l-1.4.7c-.6.2-1 .7-1 1.2v2.7c0 .5.3 1 .8 1.3l1.4.7c.1 0 .2.1.2.2v.2c.3 1.1.7 2.1 1.3 3.1v.1l.2.1v.3l-.5 1.5c-.2.5 0 1.1.4 1.5l1.9 1.9c.3.3.6.4 1 .4.2 0 .3 0 .5-.1l1.5-.5H9l.1.1h.1c1 .5 2 1 3.1 1.3h.2c.1 0 .1.1.2.2l.7 1.4c.2.5.7.8 1.3.8h2.7c.5 0 1-.3 1.3-.8l.7-1.4c0-.1.1-.2.2-.2h.2c1.1-.3 2.1-.7 3.1-1.3h.1l.1-.1h.3l1.5.5c.1 0 .3.1.5.1.4 0 .7-.1 1-.4l1.9-1.9c.4-.4.5-1 .4-1.5l-.5-1.5V23l.1-.1v-.1c.5-1 1-2 1.3-3.1v-.2c0-.1.1-.1.2-.2l1.4-.7c.5-.2.8-.7.8-1.3v-2.7c0-.5-.4-1-.8-1.2zM16 27.1c-6.1 0-11.1-5-11.1-11.1S9.9 4.9 16 4.9s11.1 5 11.1 11.1-5 11.1-11.1 11.1z"></path>
                        </svg>
                    </div>
                    Setting
                </a>
            </Menu.Item>
            <Menu.Item className={"wrap-item"}>
                <a className="wrap-icon" target="_blank" rel="noopener noreferrer" href="#" onClick={()=>{setCurrentPage("")}} >
                    <div className="icon">
                        <svg aria-label="Switch Accounts" className="_8-yf5 " fill="#262626" height="16" role="img"
                             viewBox="0 0 32 32" width="16">
                            <path fill="var(--text-dark)"
                                  stroke="var(--text-dark)"
                                  d="M10.3 10.7c0-.8-.7-1.5-1.5-1.5H4.9C7.2 5.4 11.4 3 16 3c3.6 0 7 1.5 9.5 4.1.5.6 1.5.6 2.1.1.6-.6.6-1.5.1-2.1-3-3.2-7.3-5-11.7-5C10.7 0 6 2.5 3 6.7V3.5C3 2.7 2.3 2 1.5 2S0 2.7 0 3.5v7.2c0 .8.7 1.5 1.5 1.5h7.3c.8 0 1.5-.6 1.5-1.5zm20.2 9.1h-7.2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h3.8C24.8 26.6 20.6 29 16 29c-3.6 0-7-1.5-9.5-4.1-.5-.6-1.5-.6-2.1-.1-.6.6-.6 1.5-.1 2.1 3 3.2 7.3 5 11.7 5 5.3 0 10-2.5 13-6.7v3.2c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-7.2c0-.8-.7-1.4-1.5-1.4z"></path>
                        </svg>
                    </div>
                    Switch Accounts
                </a>
            </Menu.Item>
            <Menu.Item className={"wrap-logout"}>
                <a target="_blank" className="logout" rel="noopener noreferrer" onClick={()=>{props.logout()}}>
                    Logout
                </a>
            </Menu.Item>
        </Menu>
    );
    return(
        <div className="header__buttons header__buttons--desktop">
            <a href="/" onClick={()=>{setCurrentPage('Home')}}>
                {
                    localStorage.getItem("currentPage") === 'Home' ?
                        <svg aria-label="Home" className="_8-yf5 " fill="#262626" height="22" role="img"
                             viewBox="0 0 48 48" width="22">
                            <path
                                fill="var(--text-dark)"
                                stroke="var(--text-dark)"
                                d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path>
                        </svg>
                        :
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.45307 11.751L11.9773 2.02175L21.5015 11.751C21.7906 12.0463 21.9545 12.4468 21.9545 12.8711V20.4556C21.9545 20.7747 21.7037 21 21.4427 21H15.964C15.713 21 15.4721 20.7849 15.4721 20.476V15.8886C15.4721 13.9497 13.9267 12.34 11.9773 12.34C10.0279 12.34 8.48244 13.9497 8.48244 15.8886V20.476C8.48244 20.7849 8.24157 21 7.99053 21H2.51187C2.25085 21 2 20.7747 2 20.4556V12.8711C2 12.4468 2.16397 12.0463 2.45307 11.751Z"
                                stroke="var(--text-dark)"
                                strokeWidth={2}
                            />
                        </svg>
                }
            </a>
            <a href="/message" onClick={()=>{setCurrentPage('Message')}}>
                {
                    localStorage.getItem("currentPage") === 'Message' ?
                        <svg aria-label="Messenger" className="_8-yf5 " fill="#262626" height="22" role="img"
                             viewBox="0 0 48 48" width="22">
                            <path clip-rule="evenodd"
                                  fill="var(--text-dark)"
                                  stroke="var(--text-dark)"
                                  d="M10.2 29.8c-.7 1 .6 2.2 1.6 1.5l7.3-5.5c.5-.4 1.2-.4 1.7 0l5.4 4c1.6 1.2 3.9.8 5-.9L38 18.2c.7-1-.6-2.2-1.6-1.5L29 22.2c-.5.4-1.2.4-1.7 0l-5.4-4c-1.6-1.2-3.9-.8-5 .9l-6.7 10.7zM24 1c13 0 23 9.5 23 22.3S37 45.6 24 45.6c-2.3 0-4.6-.3-6.7-.9-.4-.1-.8-.1-1.2.1l-4.6 2c-1.1.6-2.5-.3-2.5-1.6l-.1-4.1c0-.5-.2-1-.6-1.3C3.7 35.8 1 30 1 23.3 1 10.5 11 1 24 1z"
                                  fill-rule="evenodd"></path>
                        </svg>
                        :
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.81038 19.7478C5.83176 19.4539 5.70787 19.1681 5.47873 18.9827C3.2792 17.2037 1.9 14.5525 1.9 11.5868C1.9 6.27627 6.38748 1.9 12.0098 1.9C17.6196 1.9 22.1078 6.27565 22.1078 11.5868C22.1078 16.8966 17.6092 21.2735 11.998 21.2735C11.0656 21.2735 10.1798 21.1544 9.32697 20.9277C9.15685 20.8825 8.97721 20.8882 8.81028 20.944L5.64643 22.0022L5.81038 19.7478Z"
                                stroke="var(--text-dark)"
                                strokeWidth="1.8"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M10.1498 8.7952C10.2222 8.80563 10.2825 8.81606 10.3548 8.82649C11.428 9.05591 12.5252 10.0362 13.3693 10.6202C13.8396 10.9539 14.2375 10.9226 14.7078 10.6097C15.7086 9.92147 16.7456 9.26448 17.7705 8.58664C18.0478 8.39893 18.3372 8.20079 18.6748 8.45107C19.0486 8.7222 18.8195 9.0142 18.6266 9.28534C17.6137 10.6827 16.6129 12.0801 15.588 13.4671C14.8886 14.4265 13.8999 14.5621 12.8388 13.8842C12.1032 13.4045 11.3436 12.9561 10.6201 12.4556C10.1378 12.1219 9.73984 12.1636 9.28163 12.4764C8.26876 13.1647 7.24382 13.8217 6.21889 14.4995C5.94156 14.6872 5.65216 14.8854 5.31454 14.6247C4.97691 14.3744 5.15778 14.0928 5.33865 13.8321C6.3877 12.393 7.42469 10.9539 8.47374 9.51476C8.82343 9.02463 9.47456 8.73263 10.1498 8.7952Z"
                                fill="var(--text-dark)"
                            />
                        </svg>
                }
            </a>
            <a href="/explore" onClick={()=>{setCurrentPage('Explore')}}>
                {
                    localStorage.getItem("currentPage") === 'Explore' ?
                        <svg aria-label="Find People" className="_8-yf5 " fill="#262626" height="22" role="img"
                             viewBox="0 0 48 48" width="22">
                            <path clip-rule="evenodd"
                                  fill="var(--text-dark)"
                                  stroke="var(--text-dark)"
                                  d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm12.2 13.8l-7 14.8c-.1.3-.4.6-.7.7l-14.8 7c-.2.1-.4.1-.6.1-.4 0-.8-.2-1.1-.4-.4-.4-.6-1.1-.3-1.7l7-14.8c.1-.3.4-.6.7-.7l14.8-7c.6-.3 1.3-.2 1.7.3.5.4.6 1.1.3 1.7zm-15 7.4l-5 10.5 10.5-5-5.5-5.5z"
                                  fill-rule="evenodd"></path>
                        </svg>
                        :
                        <svg aria-label="Find People" className="_8-yf5 " fill="#262626" height="22" role="img"
                             viewBox="0 0 48 48" width="22">
                            <path clip-rule="evenodd"
                                  d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z"
                                  fill-rule="evenodd"
                                  fill="var(--text-dark)"
                                  stroke="var(--text-dark)"
                                  strokeWidth="0.6"
                            ></path>
                        </svg>
                }
            </a>
            <ActivityComponent setCurrentPage={()=>{setCurrentPage('Activity Feed')}} />
            <PostPostComponent/>
            <Dropdown overlay={menu} placement="bottomRight" arrow trigger={['click']}>
                <button className="profile-button">
                    <div className={localStorage.getItem("currentPage") === " " ? "profile-button__border display-border" : "profile-button__border"} />
                    <div className="profile-button__picture">
                        <img src={props.userAccountProfile.profilePhoto} alt="User Picture" />
                    </div>
                </button>
            </Dropdown>
        </div>
    )
}
function mapStateToProps(state) {
    return {
        userAccountProfile: state.home.userAccountProfile,
    }
}
function mapDispatchToProps(dispatch) {
    return{
        logout:()=>{
          dispatch(loginActions.action.logout())
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HeaderButtonsDesktopComponent)