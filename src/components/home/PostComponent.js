import React, {useEffect, useState} from "react";
import postActions from "../../redux/actions/postActions";
import {connect} from "react-redux";
import InfiniteList from "react-infinite-scroll-list";
import PostItemComponent from "./PostItemComponent";

function PostComponent(props) {
    useEffect(() => {
        props.getAllPostOfFollowing()
    }, [])
    return (
        <div>
            <InfiniteList
                root="container"
                isLoading={true}
                isEndReached={true}
                onReachThreshold={() => {
                    console.log('Load more content');
                }}
                containerClassName="custom-container-class-name"
                sentinelClassName="custom-sentinel-class-name"
                containerTagName="div"
                sentinelTagName="div"
                threshold={0}
            >
                {
                    props.listPostOfFollowing.map((item,key) =>(
                        <PostItemComponent key={key} post={item.post} likes={item.likes} userAccountSetting={item.userAccountSetting} />
                    ))
                }
            </InfiniteList>
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