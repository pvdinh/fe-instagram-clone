import {Dropdown, Menu} from "antd";
import React, {useEffect, useState} from "react";
import loginActions from "../../redux/actions/loginActions";
import {connect} from "react-redux";
import messageActions from "../../redux/actions/messageActions";
import profileAction from "../../redux/actions/profileAction";
import homeActions from "../../redux/actions/homeActions";


function HeaderSearchComponent(props) {
    const [displayResultSearch,setDisplayResultSearch]=useState(false)

    useEffect(()=>{
        props.getHistorySearchUser()
    },[])

    const calculatorDateSearch = (timeSearch) => {
        let distance = Math.round((new Date().getTime() - timeSearch) / (1000))
        switch (true) {
            case 0 <= distance && distance <= 59:
                return distance + "s"
            case 60 <= distance && distance < 3600:
                return Math.round(distance / 60) + "m"
            case 3600 <= distance && distance < (3600 * 24):
                return Math.round(distance / (60 * 60)) + "h"
            case 3600 * 24 <= distance :
                return Math.round((distance / (60 * 60 * 24))) + "d"
            default:
                break;
        }
    }

    const menuEmpty = (
        <Menu className="wrap-page-home-in-header wrap-search-in-header">
            <div className="recent-">Recent search</div>
            {
                props.listHistorySearchUser.length > 0 ?
                    props.listHistorySearchUser.map((value, index) => (
                        <div className="swap-item-result-search" onClick={() => {
                            saveSearchUser(value.userAccountSetting.id);
                            window.location.href = `/${value.userAccountSetting.username}`
                        }}>
                            <div className="image">
                                <img src={value.userAccountSetting.profilePhoto} alt="profile photo"/>
                            </div>
                            <div className="info">
                                <div className="info-username">{value.userAccountSetting.username}</div>
                                <div className="info-displayname">{value.userAccountSetting.displayName}</div>
                            </div>
                            <div className="wrap-dateSearch">{calculatorDateSearch(value.dateSearch)} ago</div>
                        </div>
                    ))
                    :
                    <div className="wsih">
                        {/*<div className="wsih1">Recent</div>*/}
                        <div className="wsih2">
                            <div className="wsih21">
                                No recent searches
                            </div>
                        </div>
                    </div>
            }
        </Menu>
    );
    const menu = (
        <Menu className="wrap-page-home-in-header wrap-search-in-header">
            {
                props.listReceiverResultSearch.map((value,index)=>(
                    <div className="swap-item-result-search" onClick={()=>{saveSearchUser(value.id);window.location.href=`/${value.username}`}}>
                        <div className="image">
                            <img src={value.profilePhoto} alt="profile photo" />
                        </div>
                        <div className="info">
                            <div className="info-username">{value.username}</div>
                            <div className="info-displayname">{value.displayName}</div>
                        </div>
                    </div>
                ))
            }
        </Menu>
    );
    const onSearch = (e) =>{
        if(e.target.value.split(" ").join("") !== ""){
            props.findReceiverByUsername(e.target.value)
            setDisplayResultSearch(true)
        }else {
            setDisplayResultSearch(false)
        }
    }

    const saveSearchUser = (idSearch) =>{
        const o = {
            idUser:props.userAccountProfile.id,
            idSearch:idSearch,
            dateSearch:new Date().getTime(),
        }
        props.saveUserHistory(o)
    }

    return(
        <div className="header__search">
            <Dropdown overlay={props.listReceiverResultSearch.length && displayResultSearch  > 0 ? menu : menuEmpty} placement="topCenter" arrow trigger={['click']}>
                <input type="text" placeholder="Search" onChange={(e)=>{onSearch(e)}} />
            </Dropdown>
            <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.669 21.6543C21.8625 21.4622 21.863 21.1494 21.6703 20.9566L17.3049 16.5913C18.7912 14.9327 19.7017 12.7525 19.7017 10.3508C19.7017 5.18819 15.5135 1 10.3508 1C5.18819 1 1 5.18819 1 10.3508C1 15.5135 5.18819 19.7017 10.3508 19.7017C12.7624 19.7017 14.9475 18.7813 16.606 17.2852L20.9739 21.653C21.1657 21.8449 21.4765 21.8454 21.669 21.6543ZM1.9843 10.3508C1.9843 5.7394 5.7394 1.9843 10.3508 1.9843C14.9623 1.9843 18.7174 5.7394 18.7174 10.3508C18.7174 14.9623 14.9623 18.7174 10.3508 18.7174C5.7394 18.7174 1.9843 14.9623 1.9843 10.3508Z"
                    fill="#A5A5A5"
                    stroke="#A5A5A5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    )
}
function mapStateToProps(state) {
    return {
        listReceiverResultSearch:state.message.listReceiverResultSearch,
        listHistorySearchUser:state.home.listHistorySearchUser,
        userAccountProfile: state.home.userAccountProfile,
    }
}
function mapDispatchToProps(dispatch) {
    return{
        findReceiverByUsername:(search)=>{
            dispatch(messageActions.action.findReceiverByUsername(search))
        },
        getHistorySearchUser:()=>{
            dispatch(homeActions.action.getHistorySearchUser())
        },
        saveUserHistory:(data)=>{
            dispatch(homeActions.action.saveUserHistory(data))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HeaderSearchComponent)