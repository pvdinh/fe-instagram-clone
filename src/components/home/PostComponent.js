import React, {useEffect, useState} from "react";
import postActions from "../../redux/actions/postActions";
import {connect} from "react-redux";
import InfiniteList from "react-infinite-scroll-list";
import PostItemComponent from "./PostItemComponent";
import InfiniteScroll from "react-infinite-scroll-component";
import SockJS from "sockjs-client";
import {BASE_URL_WEBSOCKET} from "../../url";
import Stomp from "stompjs";
import NotHavePostInGroup from "../not-have-post/NotHavePostInGroup";
import NotHavePostInHome from "../not-have-post/NotHavePostInHome";

let stompClient=null
function PostComponent(props) {
    const [page,setPage] = useState(0)
    const [size,setSize] = useState(9)
    const [reload,setReload] = useState(true)

    useEffect(()=>{
        let sockJS = new SockJS(BASE_URL_WEBSOCKET+"/ws")
        let header = {
            'Authorization': localStorage.getItem('sessionToken') ? 'Bearer ' + localStorage.getItem('sessionToken') : 'Bearer ',
            'Content-Type': 'application/json',
        }
        stompClient = Stomp.over(sockJS)
        stompClient.connect(header,()=>{onConnect()}, ()=>{onError()})
        // stompClient.debug=null

        return(()=>{
            stompClient.disconnect()
        })
    },[reload])


    useEffect(() => {
        props.getAllPostOfFollowing({page:0,size:size})
    }, [])

    useEffect(() => {
        props.fetchAllPostOfFollowing(page)
    }, [reload])


    const fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            setPage(page + 1)
            props.getAllPostOfFollowing({page:page+1,size:size})
        }, 1500);
    };


    const onError = () =>{
        console.log("error connect to ws!")
    }

    const receive = () => {
        //reload component
        setReload(!reload)
    }

    const onConnect = () =>{
        //subscribe post comment
        stompClient.subscribe('/post/allComment',()=>{receive()})
    }

    const postCmt = (comment) =>{
        stompClient.send("/app/comment.allComment",{},JSON.stringify(comment))
    }

    const deleteCmt = (comment) =>{
        stompClient.send("/app/comment.deleteComment",{},JSON.stringify(comment))
    }

    return (
        <div>
            {
                props.listPostOfFollowing.length > 0
                    ?
                    <InfiniteScroll
                        dataLength={props.listPostOfFollowing.length}
                        next={() => {
                            fetchMoreData()
                        }}
                        hasMore={true}
                    >
                        {
                            props.listPostOfFollowing.map((item, key) => (
                                <PostItemComponent deleteCmt={(comment) => {
                                    deleteCmt(comment)
                                }} postCmt={(comment) => {
                                    postCmt(comment)
                                }} currentPage={page} key={key} post={item.post} likes={item.likes}
                                                   userAccountSetting={item.userAccountSetting}/>
                            ))
                        }
                    </InfiniteScroll>
                    : props.type === "group"
                    ?
                    <NotHavePostInGroup/>
                    : <NotHavePostInHome/>
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
        getAllPostOfFollowing: (payload) => {
            dispatch(postActions.action.getAllPostOfFollowing(payload))
        },
        fetchAllPostOfFollowing: (currentPage) => {
            dispatch(postActions.action.fetchAllPostOfFollowing(currentPage))
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostComponent)