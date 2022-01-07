import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import profileAction from "../../redux/actions/profileAction";
import ModalConfirmUnFollow from "./ModalConfirmUnFollow";
import homeActions from "../../redux/actions/homeActions";
import ModalConfirmRemoveFollow from "./profile-page/ModalConfirmRemoveFollow";

function ItemModalDisplayLikedPost(props) {
    const [statusFollow, setStatusFollow] = useState(false)
    const [isModalUnfollowVisible,setIsModalUnfollowVisible] = useState(false)
    const [isModalRemoveFollowVisible,setIsModalRemoveFollowVisible] = useState(false)

    useEffect(() => {
        props.checkFollowingUser(props.item.id, (dt) => {
            setStatusFollow(dt)
        })
    }, [props.item,statusFollow,isModalUnfollowVisible,isModalRemoveFollowVisible])

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
            {
                props.remove !== undefined
                ?
                    <div className="follow-liked-btn">
                        {
                            <button className="following" onClick={()=>{setIsModalRemoveFollowVisible(true)}}>Remove</button>
                        }
                    </div>
                    :
                    null
            }
            <div className="follow-liked-btn">
                {
                    displayBtn()
                }
            </div>
            <ModalConfirmUnFollow userAccountFollowing={props.item} visible={isModalUnfollowVisible} setVisible={()=>{setStatusFollow(false);setIsModalUnfollowVisible(false)}} />
            <ModalConfirmRemoveFollow userAccountFollowing={props.item} visible={isModalRemoveFollowVisible} setVisible={()=>{setIsModalRemoveFollowVisible(false)}} />
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
        removeFollowing: (id) => {
            dispatch(homeActions.action.removeFollowing(id))
        },
        beginFollowing: (userFollowingId) => {
            dispatch(homeActions.action.beginFollowing(userFollowingId))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemModalDisplayLikedPost)
