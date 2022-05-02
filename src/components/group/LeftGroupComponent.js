import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import PostDetailModal from "../profile/PostDetailModal";

import { AutoComplete } from 'antd';
import ModalCreateGroup from "./ModalCreateGroup";
import groupAction from "../../redux/actions/groupAction";

const { Option } = AutoComplete;

function LeftGroupComponent(props) {
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(2147483647)
    const [pId,setPId] = useState("");
    const [isVisiblePostDetail, setIsVisiblePostDetail] = useState(false)
    const [result, setResult] = useState([]);
    const [isVisibleModalAddGroup, setIsVisibleModalAddGroup] = useState(false);
    const [listGroupManager,setListGroupManager] = useState([])
    const [listGroupMember,setListGroupMember] = useState([])
    const [reload,setReload] = useState(false)

    useEffect(()=>{
        console.log("XX")
        props.getGroupByRole({role:"ADMIN",page:page,size:size},(data)=>{
            setListGroupManager([...data])
        })
    },[isVisibleModalAddGroup,reload])

    useEffect(()=>{
        props.getGroupByRole({role:"MEMBER",page:page,size:size},(data)=>{
            setListGroupMember([...data])
        })
    },[isVisibleModalAddGroup])

    const handleSearch = (value) => {
        let res = [1,11,22,33,11];
        setResult([...res])
    };

    const showModal = () =>{
        if(pId !== ""){
            return(
                <PostDetailModal postId={pId} visible={isVisiblePostDetail} setVisible={()=>{setIsVisiblePostDetail(false)}} />
            )
        }
    }

    const fetchMoreGroup = (e) =>{
        const bottom = e.target.scrollHeight - Math.floor(e.target.scrollTop) === e.target.clientHeight;
        if(bottom){
            console.log("bottom")
        }
    }

    return (
        <section className="side-menu-left">

            <div className="label-side-menu-left-group">Group</div>

            <AutoComplete style={{ width: "100%",marginTop:"10px" }} onSearch={handleSearch} placeholder="Search by name group">
                {result.map((email) => (
                    <Option key={email} value={email}>
                        {email}
                    </Option>
                ))}
            </AutoComplete>

            <button className="button-create-side-menu-left-group" onClick={()=>{setIsVisibleModalAddGroup(true)}}>+ Create new group </button>

            <div id="group-personal" style={{height:"700px", overflowY: "scroll"}} onScroll={(e)=>{fetchMoreGroup(e)}}>
                <div className="side-menu__suggestions-section">
                    <div className="side-menu__suggestions-header">
                        <h2>Groups managed by you</h2>
                    </div>
                </div>
                {
                    listGroupManager.map((value,index) =>(
                        <div className="side-menu__user-profile">
                            <div className="item-menu-left">
                                <a href={`/g/${value.id}`} className="wrap-image-cover-image-group">
                                    <img src={value.imageCover} alt="Picture"/>
                                </a>
                                <div className="">
                                    <a href={`/g/${value.id}`} style={{textTransform:"none",marginLeft:"5px"}}>{value.name}</a>
                                </div>
                            </div>
                        </div>
                    ))
                }

                <div className="side-menu__suggestions-section">
                    <div className="side-menu__suggestions-header">
                        <h2>The group you joined</h2>
                    </div>
                </div>

                {
                    listGroupMember.map((value,index) =>(
                        <div className="side-menu__user-profile">
                            <div className="item-menu-left">
                                <a href={`/g/${value.id}`} className="wrap-image-cover-image-group">
                                    <img src={value.imageCover} alt="Picture"/>
                                </a>
                                <div className="">
                                    <a href={`/g/${value.id}`} style={{textTransform:"none",marginLeft:"5px"}}>{value.name}</a>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>

            {
                showModal()
            }
            <ModalCreateGroup reload={()=>{setReload(!reload)}} visible={isVisibleModalAddGroup} setVisible={()=>{setIsVisibleModalAddGroup(false)}} />
        </section>
    )
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        getGroupByRole:(payload,callback) =>{
          dispatch(groupAction.action.getGroupByRole(payload,callback))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftGroupComponent)