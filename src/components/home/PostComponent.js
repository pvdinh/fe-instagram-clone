import React, {useEffect, useState} from "react";
import PostItemComponent from "./PostItemComponent";
import postActions from "../../redux/actions/postActions";
import {connect} from "react-redux";

function PostComponent(props) {
    useEffect(() => {
        props.getAllPostOfFollowing()
    }, [])
    return (
        <div>
            {
                props.listPostOfFollowing.map((item,key) =>(
                    <PostItemComponent key={key} post={item.post} likes={item.likes} userAccountSetting={item.userAccountSetting} />
                ))
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        listPostOfFollowing: state.post.listPostOfFollowing,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllPostOfFollowing: () => {
            dispatch(postActions.action.getAllPostOfFollowing())
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostComponent)