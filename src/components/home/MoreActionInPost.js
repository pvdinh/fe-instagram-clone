import React, {useEffect, useState} from "react";
import {Modal} from "antd";
import homeActions from "../../redux/actions/homeActions";
import {connect} from "react-redux";
import postActions from "../../redux/actions/postActions";
import StoryAction from "../../redux/actions/StoryAction";
import ModalConfirmUnFollow from "../modal/ModalConfirmUnFollow";
import ModalReport from "../modal/report/ModalReport";
import groupAction from "../../redux/actions/groupAction";

function MoreActionInPost(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalUnfollowVisible,setIsModalUnfollowVisible] = useState(false)
    const [isModalReportVisible, setIsModalReportVisible] = useState(false);

    useEffect(() => {
        props.getGroupByIdGroupAndIdUser(props.post.idGroup,()=>{})
    }, [isModalVisible])

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onCopyLink = (link) =>{
        let url = window.location.href;
        let arrUrl = url.split("/");
        navigator.clipboard.writeText(arrUrl[0] + "//" + arrUrl[2] + '/p/' +link)
        handleCancel()
        let elementAlert = document.getElementsByClassName("alertCopyLink")
        elementAlert[0].classList.add("show")
        const setTimeOut = setTimeout(()=>{
            elementAlert[0].classList.remove("show")
        },4000)
    }

    const goToPost = (pId) =>{
        window.location.href="/p/"+pId
    }
    const onClickDeletePost = (pId) =>{
        props.deletePost(pId)
        handleCancel()
    }
    const addToStory = (pId) =>{
        let story={
            idPost:pId,
            idUser:props.userAccountProfile.id,
        }
        props.beginStory(story)
        handleCancel()
    }

    return (
        <>
            <button className="post__more-options" onClick={()=>{showModal()}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6.5" cy="11.5" r="1.5" fill="var(--text-dark)"/>
                    <circle cx="12" cy="11.5" r="1.5" fill="var(--text-dark)"/>
                    <circle cx="17.5" cy="11.5" r="1.5" fill="var(--text-dark)"/>
                </svg>
            </button>
            <Modal centered visible={isModalVisible} className='instagram-home-page-wrap' onCancel={()=>{handleCancel()}} footer={null} closable={false}>
                {
                    props.userAccountFollowing.id === props.userAccountProfile.id ||( props.userMemberGroup && props.userMemberGroup.role === "ADMIN" )?
                        <>
                            <button className='options-dialog__button' style={{borderBottom:"1px solid var(--border)"}} onClick={()=>{goToPost(props.post.id)}} >Go to post</button>
                            <button className='options-dialog__button' style={{borderBottom:"1px solid var(--border)",color:"#ed4956",fontWeight: "700"}} onClick={()=>{onClickDeletePost(props.post.id)}}>Delete post</button>
                            <button className='options-dialog__button' style={{borderBottom:"1px solid var(--border)"}} onClick={()=>{onCopyLink(props.post.id)}}>Copy link</button>
                            <button className='options-dialog__button' onClick={()=>{handleCancel()}}>Cancel</button>
                        </>
                        :
                        props.userAccountFollowing.id === props.userAccountProfile.id ?
                        <>
                            <button className='options-dialog__button' style={{borderBottom:"1px solid var(--border)"}} onClick={()=>{goToPost(props.post.id)}} >Go to post</button>
                            <button className='options-dialog__button' style={{borderBottom:"1px solid var(--border)",color:"#ed4956",fontWeight: "700"}} onClick={()=>{onClickDeletePost(props.post.id)}}>Delete post</button>
                            <button className='options-dialog__button' style={{borderBottom:"1px solid var(--border)",fontWeight: "700"}} onClick={()=>{addToStory(props.post.id)}}>Add to story</button>
                            <button className='options-dialog__button' style={{borderBottom:"1px solid var(--border)"}} onClick={()=>{onCopyLink(props.post.id)}}>Copy link</button>
                            <button className='options-dialog__button' onClick={()=>{handleCancel()}}>Cancel</button>
                        </>
                        :
                        <>
                            <button className='options-dialog__button' style={{borderBottom:"1px solid var(--border)",color:"#ed4956",fontWeight: "700"}} onClick={()=>{setIsModalReportVisible(true)}}>Report</button>
                            <button className='options-dialog__button' style={{borderBottom:"1px solid var(--border)",color:"#ed4956",fontWeight: "700"}} onClick={()=>{setIsModalVisible(false);setIsModalUnfollowVisible(true)}}>Unfollow</button>
                            <button className='options-dialog__button' style={{borderBottom:"1px solid var(--border)"}} onClick={()=>{goToPost(props.post.id)}}>Go to post</button>
                            <button className='options-dialog__button' style={{borderBottom:"1px solid var(--border)"}} onClick={()=>{onCopyLink(props.post.id)}}>Copy link</button>
                            <button className='options-dialog__button' onClick={()=>{handleCancel()}}>Cancel</button>
                        </>
                }
            </Modal>
            <ModalConfirmUnFollow userAccountFollowing={props.userAccountFollowing} visible={isModalUnfollowVisible} setVisible={()=>{setIsModalUnfollowVisible(false)}} />
            <ModalReport idPost={props.post.id} userAccountFollowing={props.userAccountFollowing} visible={isModalReportVisible} setVisible={()=>{setIsModalReportVisible(false)}} />
        </>
    )
}
function mapStateToProps(state) {
    return {
        userAccountProfile:state.home.userAccountProfile,
        userMemberGroup: state.group.userMemberGroup,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        endFollowing: (userFollowingId) => {
            dispatch(homeActions.action.endFollowing(userFollowingId))
        },
        deletePost:(pId)=>{
          dispatch(postActions.action.deletePost(pId))
        },
        beginStory: (story) =>{
            dispatch(StoryAction.action.beginStory(story))
        },
        getGroupByIdGroupAndIdUser: (idGroup,callback) =>{
            dispatch(groupAction.action.getGroupByIdGroupAndIdUser(idGroup,callback))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoreActionInPost)