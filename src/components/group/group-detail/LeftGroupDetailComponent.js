import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import PostDetailModal from "../../profile/PostDetailModal";
import postActions from "../../../redux/actions/postActions";
import {Link} from "react-router-dom";
import ModalInviteMember from "../modal/ModaInviteMember";
import PostPostsInGroupComponent from "./PostPostsInGroupComponent";
import groupAction from "../../../redux/actions/groupAction";

function LeftGroupDetailComponent(props) {
    const [pId, setPId] = useState("");
    const [isVisiblePostDetail, setIsVisiblePostDetail] = useState(false)

    const [isVisibleInviteMember, setIsVisibleInviteMember] = useState(false)

    useEffect(() => {

    }, [])

    const showModal = () => {
        if (pId !== "") {
            return (
                <PostDetailModal postId={pId} visible={isVisiblePostDetail} setVisible={() => {
                    setIsVisiblePostDetail(false)
                }}/>
            )
        }
    }

    const fetchMoreGroup = (e) => {
        const bottom = e.target.scrollHeight - Math.floor(e.target.scrollTop) === e.target.clientHeight;
        if (bottom) {
            console.log("bottom")
        }
    }

    const requestJoinGroup = () =>{
        props.requestToJoinGroup(props.idGroup,(m)=>{
            props.getGroupByIdGroupAndIdUser(props.idGroup,()=>{})
        })
    }

    const cancelRequestJoinGroup = () =>{
        props.cancelRequestToJoinGroup(props.idGroup,(m)=>{
            props.getGroupByIdGroupAndIdUser(props.idGroup,()=>{})
        })
    }

    return (
        <section className="side-menu-left">

            <Link to={`/g/${props.idGroup}`}>
                <div
                    className="label-side-menu-left-group">{props.groupInformation.name} ( {props.groupInformation.numberMembership} members )
                    {
                        props.userMemberGroup ? ` - ${props.userMemberGroup.role}` : null
                    }
                </div>
            </Link>

            <div className="image-side-menu-left-group">
                <img className="image-group"
                     src="https://www.facebook.com/images/groups/groups-default-cover-photo-2x.png" alt="image"/>
            </div>

            {
                props.userMemberGroup !== null && props.userMemberGroup.status === 1
                    ?
                    <>
                       <PostPostsInGroupComponent idGroup={props.idGroup} />

                        <button className="button-create-side-menu-left-group" onClick={() => {
                            setIsVisibleInviteMember(true)
                        }}>+ Add member
                        </button>
                        {
                            props.userMemberGroup.role !== "ADMIN" && props.userMemberGroup.status === 1 ?
                                <button className="button-create-side-menu-left-group" onClick={() => {cancelRequestJoinGroup()}}>Left group
                                </button>
                                :
                                null
                        }
                    </>
                    :
                    props.userMemberGroup !== null && props.userMemberGroup.status === 0 ?
                        <button className="button-create-side-menu-left-group" onClick={()=>{cancelRequestJoinGroup()}} >Sending request to join group</button>
                        :
                        <button className="button-create-side-menu-left-group" onClick={()=>{requestJoinGroup()}} >Request join into group</button>
            }
            <button className="button-create-side-menu-left-group" onClick={()=>{window.location.href="/g/group"}} >My groups</button>
            <div id="group-personal" style={{height: "700px", overflowY: "scroll"}} onScroll={(e) => {
                fetchMoreGroup(e)
            }}>
                {
                    props.userMemberGroup !== null && props.userMemberGroup.role === "ADMIN" ?
                        <div className="side-menu__suggestions-section">
                            <div className="side-menu__suggestions-header">
                                <h2>Administration tools</h2>
                            </div>
                        </div>
                        :
                        <div className="side-menu__suggestions-section">
                            <div className="side-menu__suggestions-header">
                                <h2>Group member</h2>
                            </div>
                        </div>
                }

                {
                    props.userMemberGroup !== null && props.userMemberGroup.role === "ADMIN" ?
                        <div className="side-menu__user-profile">
                            <Link to={`/g/${props.idGroup}/requests`}>
                                <div className="item-menu-left">
                                    <a href="#" className="">
                                        <img
                                            src="https://res.cloudinary.com/dinhpv/image/upload/v1650987339/instargram-clone/pngwing.com_4_uhvqng.png"
                                            alt="Picture"/>
                                    </a>
                                    <div className="">
                                        <a href="#" style={{textTransform: "none", marginLeft: "5px"}}>Request
                                            membership</a>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        :
                        null
                }

                <div className="side-menu__user-profile">
                    <Link to={`/g/${props.idGroup}/members`}>
                        <div className="item-menu-left" style={{marginLeft: "7px", marginRight: "7px"}}>
                            <a href="#" className="">
                                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"
                                     alt="Picture"/>
                            </a>
                            <div className="">
                                <a href="#" style={{textTransform: "none", marginLeft: "10px"}}>Membership</a>
                            </div>
                        </div>
                    </Link>
                </div>


            </div>

            {
                showModal()
            }
            <ModalInviteMember idGroup={props.idGroup} isVisible={isVisibleInviteMember} setIsVisible={() => {
                setIsVisibleInviteMember(!isVisibleInviteMember)
            }}/>
        </section>
    )
}

function mapStateToProps(state) {
    return {
        groupInformation: state.group.groupInformation,
        userMemberGroup: state.group.userMemberGroup,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        requestToJoinGroup:(idGroup,callback)=>{
          dispatch(groupAction.action.requestToJoinGroup(idGroup,callback))
        },
        cancelRequestToJoinGroup:(idGroup,callback)=>{
          dispatch(groupAction.action.cancelRequestToJoinGroup(idGroup,callback))
        },
        getGroupByIdGroupAndIdUser: (idGroup,callback) =>{
            dispatch(groupAction.action.getGroupByIdGroupAndIdUser(idGroup,callback))
        },
        rejectRequestToJoinGroup:(idGroup,idUser,callback) =>{
            dispatch(groupAction.action.rejectRequestToJoinGroup(idGroup,idUser,callback))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftGroupDetailComponent)