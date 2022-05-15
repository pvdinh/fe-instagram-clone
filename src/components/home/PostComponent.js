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
import groupAction from "../../redux/actions/groupAction";
import JoinGroupToViewPosts from "../not-have-post/JoinGroupToViewPosts";
import NotHavePostInGroupChild from "../not-have-post/NotHavePostInGroupChild";

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
        if(props.type === "group-child"){
            props.getAllPostInGroup(props.idGroup,{page:0,size:size})
        }else if(props.type === "group"){
            props.getAllPostInAllGroupSelf({page:0,size:size})
        } else props.getAllPostOfFollowing({page:0,size:size})
    }, [])

    useEffect(() => {
        if(props.type === "group-child"){
            console.log("XXX")
            props.fetchAllPostInGroup(props.idGroup,page)
        }else if(props.type === "group"){
            console.log("YYY")
            props.fetchAllPostInAllGroupSelf(page)
        } else props.fetchAllPostOfFollowing(page)
    }, [reload])


    const fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        if(props.type === "group-child"){
            setTimeout(() => {
                setPage(page + 1)
                props.getAllPostInGroup(props.idGroup,{page:page+1,size:size})
            }, 1500);
        }else if(props.type === "group"){
            setTimeout(() => {
                setPage(page + 1)
                props.getAllPostInAllGroupSelf({page:page+1,size:size})
            }, 1500);
        } else setTimeout(() => {
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
                props.type === "group" && props.listPostOfAllGroup.length > 0 ?
                    <InfiniteScroll
                        dataLength={props.listPostOfAllGroup.length}
                        next={() => {
                            fetchMoreData()
                        }}
                        hasMore={true}
                    >
                        {
                            props.listPostOfAllGroup.map((item, key) => (
                                <PostItemComponent deleteCmt={(comment) => {
                                    deleteCmt(comment)
                                }} postCmt={(comment) => {
                                    postCmt(comment)
                                }} currentPage={page} key={key} post={item.post} group={item.group} likes={item.likes}
                                                   userAccountSetting={item.userAccountSetting}/>
                            ))
                        }
                    </InfiniteScroll>
                    :
                    props.type === "group" ?
                        <NotHavePostInGroup/>
                        :
                        props.type === "group-child" && props.listPostOfGroup.length > 0 && props.groupInformation.privacy === 0 ?
                            <InfiniteScroll
                                dataLength={props.listPostOfGroup.length}
                                next={() => {
                                    fetchMoreData()
                                }}
                                hasMore={true}
                            >
                                {
                                    props.listPostOfGroup.map((item, key) => (
                                        <PostItemComponent deleteCmt={(comment) => {
                                            deleteCmt(comment)
                                        }} postCmt={(comment) => {
                                            postCmt(comment)
                                        }} currentPage={page} key={key} post={item.post} group={item.group} likes={item.likes}
                                                           userAccountSetting={item.userAccountSetting}/>
                                    ))
                                }
                            </InfiniteScroll>
                            :
                            props.type === "group-child" && props.listPostOfGroup.length > 0 ?
                                <>
                                    {
                                        props.userMemberGroup && props.userMemberGroup.status === 1 ?
                                            <InfiniteScroll
                                                dataLength={props.listPostOfGroup.length}
                                                next={() => {
                                                    fetchMoreData()
                                                }}
                                                hasMore={true}
                                            >
                                                {
                                                    props.listPostOfGroup.map((item, key) => (
                                                        <PostItemComponent deleteCmt={(comment) => {
                                                            deleteCmt(comment)
                                                        }} postCmt={(comment) => {
                                                            postCmt(comment)
                                                        }} currentPage={page} key={key} post={item.post} group={item.group} likes={item.likes}
                                                                           userAccountSetting={item.userAccountSetting}/>
                                                    ))
                                                }
                                            </InfiniteScroll>
                                            :
                                            <JoinGroupToViewPosts />

                                    }
                                </>
                                :
                                props.type === "group-child"
                                ?
                                <NotHavePostInGroupChild />
                                :
                        props.listPostOfFollowing.length > 0 ?
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
                                        }} currentPage={page} key={key} post={item.post} group={item.group} likes={item.likes}
                                                           userAccountSetting={item.userAccountSetting}/>
                                    ))
                                }
                            </InfiniteScroll> : <NotHavePostInHome/>
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        listPostOfFollowing: state.post.listPostOfFollowing,
        groupInformation: state.group.groupInformation,
        userMemberGroup: state.group.userMemberGroup,
        listPostOfGroup: state.group.listPostOfGroup,
        listPostOfAllGroup: state.group.listPostOfAllGroup,
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
        getAllPostInGroup: (idGroup,payload) => {
            dispatch(groupAction.action.getAllPostInGroup(idGroup,payload))
        },
        fetchAllPostInGroup: (idGroup,currentPage) => {
            dispatch(groupAction.action.fetchAllPostInGroup(idGroup,currentPage))
        },
        getAllPostInAllGroupSelf: (payload) => {
            dispatch(groupAction.action.getAllPostInAllGroupSelf(payload))
        },
        fetchAllPostInAllGroupSelf: (currentPage) => {
            dispatch(groupAction.action.fetchAllPostInAllGroupSelf(currentPage))
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostComponent)