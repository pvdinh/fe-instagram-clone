import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {convertTimeStampToDateDMY} from "../../../utils/formatNumber";
import groupAction from "../../../redux/actions/groupAction";


function ItemUserRequest(props) {

    const onConfirm = () => {
        props.confirmMemberRequest(props.item.groupMember, (m) => {
            props.reload()
            props.getGroupByIdGroupAndIdUser(props.item.groupMember.idGroup, () => {
            })
        })
    }

    const onCancel = () => {
        props.rejectRequestToJoinGroup(props.item.groupMember.idGroup,props.item.groupMember.idUser, () => {
            props.reload()
            props.getGroupByIdGroupAndIdUser(props.item.groupMember.idGroup, () => {})
        })
    }

    const goToProfile = () =>{
        window.location.href = "/" + props.item.userAccountSetting.username;
    }

    return (
        <div className="item-requests-user">
            <div className="side-menu__suggestion">
                <a href={"#"} className="side-menu__suggestion-avatar avatar-request-member">
                    <img
                        src={props.item.userAccountSetting.profilePhoto}
                        alt="User Picture"
                        onClick={() => {goToProfile()}}
                    />
                </a>
                <div className="side-menu__suggestion-info">
                    <a href="#" onClick={() => {goToProfile()}}>{props.item.userAccountSetting.username}</a>
                    {
                        props.item.userInvite !== null ?
                            <>
                                {
                                    props.item.userInvite !== props.item.idUser ?
                                        <span>Added by your self on {convertTimeStampToDateDMY(props.item.groupMember.dateJoined)}</span>
                                        :
                                        <span>Added by {props.item.userInvite.username} on {convertTimeStampToDateDMY(props.item.groupMember.dateJoined)}</span>
                                }
                            </>
                            :
                            <span>Created group on {convertTimeStampToDateDMY(props.item.groupMember.dateCreated)}</span>
                    }
                </div>
                {
                    props.type === "request"
                        ?
                        <>
                            <button className="btn-confirm-request mr-10" onClick={() => {onConfirm()}}>Confirm
                            </button>

                            <button className="btn-cancel-request following" onClick={() => {onCancel()}}>Cancel
                            </button>
                        </>
                        :
                        <>
                            <button className="btn-confirm-request mr-10" onClick={() => {goToProfile()}}>View profile
                            </button>

                            {
                                props.userMemberGroup && props.userMemberGroup.role === "ADMIN" ?
                                    <button className="btn-cancel-request following" onClick={() => {
                                    }}>Remove
                                    </button>
                                    :
                                    null
                            }
                        </>
                }
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        userMemberGroup: state.group.userMemberGroup,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        confirmMemberRequest: (payload, callback) => {
            dispatch(groupAction.action.confirmMemberRequest(payload, callback))
        },
        cancelMemberRequest: (payload, callback) => {
            dispatch(groupAction.action.cancelMemberRequest(payload, callback))
        },
        getGroupByIdGroupAndIdUser: (idGroup, callback) => {
            dispatch(groupAction.action.getGroupByIdGroupAndIdUser(idGroup, callback))
        },
        rejectRequestToJoinGroup:(idGroup,idUser,callback) =>{
           dispatch(groupAction.action.rejectRequestToJoinGroup(idGroup,idUser,callback))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemUserRequest)