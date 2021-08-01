import React, {useEffect} from "react";
import {connect} from "react-redux";
import homeActions from "../../redux/actions/homeActions";

function UserProfileComponent(props) {
    useEffect(()=>{
        props.getUserAccountProfile()
    },[])
    return (
    <div className="side-menu__user-profile">
        <a href="https://github.com/leocosta1" target="_blank" className="side-menu__user-avatar">
            <img src={props.userAccountProfile.profilePhoto} alt="User Picture"/>
        </a>
        <div className="side-menu__user-info">
            <a href="https://github.com/leocosta1" target="_blank">{props.userAccountProfile.username}</a>
            <span>{props.userAccountProfile.displayName}</span>
        </div>
        <button className="side-menu__user-button">Switch</button>
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