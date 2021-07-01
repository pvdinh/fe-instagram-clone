import React, {useEffect} from "react";
import {connect} from "react-redux";
import homeActions from "../../redux/actions/homeActions";

function UserProfileComponent(props) {
    useEffect(()=>{
        props.getUserAccountProfile()
    },[])
    return (
        <div className="user-profile">
            <div className="avatar">
                <img
                    src={props.userAccountProfile.profilePhoto}
                    alt="User"
                />
            </div>
            <div className="desc">
                <a href="https://github.com/leocosta1" target="_blank">
                    {props.userAccountProfile.username}
                </a>
                <span>{props.userAccountProfile.displayName}</span>
            </div>
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
        getUserAccountProfile: () => {
          dispatch(homeActions.action.getUserAccountProfile())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileComponent)