import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import postActions from "../../redux/actions/postActions";
import PostDetailModal from "../profile/PostDetailModal";

import { AutoComplete } from 'antd';
import ModalCreateGroup from "./ModalCreateGroup";

const { Option } = AutoComplete;

function LeftGroupComponent(props) {
    const [pId,setPId] = useState("");
    const [isVisiblePostDetail, setIsVisiblePostDetail] = useState(false)
    const [result, setResult] = useState([]);
    const [isVisibleModalAddGroup, setIsVisibleModalAddGroup] = useState(false);

    const handleSearch = (value) => {
        let res = [1,11,22,33,11];
        setResult([...res])
    };


    const getTop1Like = () =>{
        props.getTop1Like((data)=>{
            setPId(data.id)
            setIsVisiblePostDetail(true)
        })
    }

    const getTop1Comment = () =>{
        props.getTop1Comment((data)=>{
            setPId(data.id)
            setIsVisiblePostDetail(true)
        })
    }

    const getTop1Popular = () =>{
        props.getTop1Popular((data)=>{
            setPId(data.id)
            setIsVisiblePostDetail(true)
        })
    }

    const getTop1Save = () =>{
        props.getTop1Save((data)=>{
            setPId(data.id)
            setIsVisiblePostDetail(true)
        })
    }

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

                <div className="side-menu__user-profile">
                    <div className="item-menu-left">
                        <a href="#" className="">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" alt="Picture"/>
                        </a>
                        <div className="">
                            <a href="#" style={{textTransform:"none",marginLeft:"5px"}}>Group</a>
                        </div>
                    </div>
                </div>
                <div className="side-menu__user-profile">
                    <div className="item-menu-left">
                        <a href="#" className="">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" alt="Picture"/>
                        </a>
                        <div className="">
                            <a href="#" style={{textTransform:"none",marginLeft:"5px"}}>Group</a>
                        </div>
                    </div>
                </div>
                <div className="side-menu__user-profile">
                    <div className="item-menu-left">
                        <a href="#" className="">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" alt="Picture"/>
                        </a>
                        <div className="">
                            <a href="#" style={{textTransform:"none",marginLeft:"5px"}}>Group</a>
                        </div>
                    </div>
                </div>

                <div className="side-menu__suggestions-section">
                    <div className="side-menu__suggestions-header">
                        <h2>The group you joined</h2>
                    </div>
                </div>

                <div className="side-menu__user-profile">
                    <div className="item-menu-left">
                        <a href="#" className="">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" alt="Picture"/>
                        </a>
                        <div className="">
                            <a href="#" style={{textTransform:"none",marginLeft:"5px"}}>Group</a>
                        </div>
                    </div>
                </div>
                <div className="side-menu__user-profile">
                    <div className="item-menu-left">
                        <a href="#" className="">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" alt="Picture"/>
                        </a>
                        <div className="">
                            <a href="#" style={{textTransform:"none",marginLeft:"5px"}}>Group</a>
                        </div>
                    </div>
                </div>
                <div className="side-menu__user-profile">
                    <div className="item-menu-left">
                        <a href="#" className="">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" alt="Picture"/>
                        </a>
                        <div className="">
                            <a href="#" style={{textTransform:"none",marginLeft:"5px"}}>Group</a>
                        </div>
                    </div>
                </div>
                <div className="side-menu__user-profile">
                    <div className="item-menu-left">
                        <a href="#" className="">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" alt="Picture"/>
                        </a>
                        <div className="">
                            <a href="#" style={{textTransform:"none",marginLeft:"5px"}}>Group</a>
                        </div>
                    </div>
                </div>
                <div className="side-menu__user-profile">
                    <div className="item-menu-left">
                        <a href="#" className="">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" alt="Picture"/>
                        </a>
                        <div className="">
                            <a href="#" style={{textTransform:"none",marginLeft:"5px"}}>Group</a>
                        </div>
                    </div>
                </div>
                <div className="side-menu__user-profile">
                    <div className="item-menu-left">
                        <a href="#" className="">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" alt="Picture"/>
                        </a>
                        <div className="">
                            <a href="#" style={{textTransform:"none",marginLeft:"5px"}}>Group</a>
                        </div>
                    </div>
                </div>


            </div>

            {
                showModal()
            }
            <ModalCreateGroup visible={isVisibleModalAddGroup} setVisible={()=>{setIsVisibleModalAddGroup(false)}} />
        </section>
    )
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        getTop1Like: (callback) => {
            dispatch(postActions.action.getTop1Like(callback))
        },
        getTop1Comment: (callback) => {
            dispatch(postActions.action.getTop1Comment(callback))
        },
        getTop1Popular: (callback) => {
            dispatch(postActions.action.getTop1Popular(callback))
        },
        getTop1Save: (callback) => {
            dispatch(postActions.action.getTop1Save(callback))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftGroupComponent)