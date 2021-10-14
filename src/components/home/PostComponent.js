import React, {useEffect, useState} from "react";
import postActions from "../../redux/actions/postActions";
import {connect} from "react-redux";
import InfiniteList from "react-infinite-scroll-list";
import PostItemComponent from "./PostItemComponent";
import InfiniteScroll from "react-infinite-scroll-component";


function PostComponent(props) {
    const [page,setPage] = useState(0)
    const [size,setSize] = useState(9)

    useEffect(() => {
        props.getAllPostOfFollowing({page:0,size:size})
    }, [])


    const fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            setPage(page + 1)
            props.getAllPostOfFollowing({page:page+1,size:size})
        }, 1500);
    };

    return (
        <div>
            <InfiniteScroll
                dataLength={props.listPostOfFollowing.length}
                next={()=>{fetchMoreData()}}
                hasMore={true}
            >
                {
                    props.listPostOfFollowing.map((item,key) =>(
                        <PostItemComponent currentPage={page} key={key} post={item.post} likes={item.likes} userAccountSetting={item.userAccountSetting} />
                    ))
                }
            </InfiniteScroll>
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
        getAllPostOfFollowing: (payload) => {
            dispatch(postActions.action.getAllPostOfFollowing(payload))
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostComponent)