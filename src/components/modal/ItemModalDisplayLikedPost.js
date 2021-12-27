import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import profileAction from "../../redux/actions/profileAction";
import ModalConfirmUnFollow from "./ModalConfirmUnFollow";
import homeActions from "../../redux/actions/homeActions";

function ItemModalDisplayLikedPost(props) {
    const [statusFollow, setStatusFollow] = useState(false)
    const [isModalUnfollowVisible,setIsModalUnfollowVisible] = useState(false)

    useEffect(() => {
        props.checkFollowingUser(props.item.id, (dt) => {
            setStatusFollow(dt)
        })
    }, [props.item,statusFollow,isModalUnfollowVisible])

    const beginFollowing = (userFollowingId) => {
        props.beginFollowing(userFollowingId)
        setStatusFollow(true)
    }

    const displayBtn =() =>{
        if(props.item.id !== props.userAccountProfile.id){
            return statusFollow
                ?
                <button className="following" onClick={()=>{setIsModalUnfollowVisible(true)}}>Following</button>
                :
                <button className="follow" onClick={()=>{beginFollowing(props.item.id)}}>Follow</button>
        }
    }

    return (
        <div className="item-liked">
            <div className="avatar-liked">
                <img className="img-liked" src={props.item.profilePhoto} alt="avatar"/>
            </div>
            <div className="info-liked">
                <div className="username">{props.item.username}</div>
                <div className="displayname">{props.item.displayName}</div>
            </div>
            <div className="follow-liked-btn">
                {
                    displayBtn()
                }
            </div>
            <ModalConfirmUnFollow userAccountFollowing={props.item} visible={isModalUnfollowVisible} setVisible={()=>{setStatusFollow(false);setIsModalUnfollowVisible(false)}} />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        userAccountProfile: state.home.userAccountProfile,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        checkFollowingUser: (userFollowingId, callback) => {
            dispatch(profileAction.action.checkFollowingUser(userFollowingId, callback))
        },
        beginFollowing: (userFollowingId) => {
            dispatch(homeActions.action.beginFollowing(userFollowingId))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemModalDisplayLikedPost)
