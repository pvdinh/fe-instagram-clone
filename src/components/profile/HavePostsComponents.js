import React, {useEffect, useState} from "react";
import {BsFillHeartFill, FaComment} from "react-icons/all";
import {connect} from "react-redux";
import PostDetailModal from "./PostDetailModal";
import profileAction from "../../redux/actions/profileAction";
import {useHistory} from "react-router";


function HavePostsComponents(props) {
    const [isVisiblePostDetail, setIsVisiblePostDetail] = useState(false)
    const [post, setPost] = useState({})

    let history = useHistory()

    useEffect(()=>{
        props.getUserProfile(props.currentUserAccountSetting.username,()=>{})
    },[isVisiblePostDetail])

    useEffect(()=>{
        props.getSavedPost(props.currentUserAccountSetting.username,()=>{})
    },[isVisiblePostDetail])

    useEffect(()=>{
        props.fetchPostVideo(props.currentUserAccountSetting.username, () => {
        }, history, {page:0,size:props.size+(props.currentPage*props.size)})
        console.log(props.currentPage)
        console.log(props.size)
    },[isVisiblePostDetail])

    const onClickPost = (p) =>{
        console.log(p.post)
        setPost(p)
        setIsVisiblePostDetail(true)
    }

    const reLoad = () =>{
        if(props.reload !== undefined){
            props.reload()
        }
        setIsVisiblePostDetail(!isVisiblePostDetail)
    }

    const showModal = () =>{
        if(post.post !== undefined){
            return(
                <PostDetailModal postId={post.post.id} visible={isVisiblePostDetail} setVisible={()=>{reLoad()}} />
            )
        }
    }

    return(
        <div className="tabbed-pane__posts">
            {
                props.listPostDetails.map((value,index)=>(
                    <div className="wrap-post">
                        <a className="i1" href><img className="i11" src={value.post.imagePath !== "" ? value.post.imagePath : "https://res.cloudinary.com/dinhpv/image/upload/v1640940571/instargram-clone/playicon_qqb2pf.jpg"} alt="bill murray post picture" /></a>
                        <div className="wrap-post-info" onClick={()=>{onClickPost(value)}}>
                            <div className="post-info">
                                <div className="likes">
                                    <div className="L1L">
                                        <BsFillHeartFill />
                                    </div>
                                    {
                                        value.likes.length
                                    }
                                </div>
                                <div className="comments">
                                    <div className="C1C">
                                        <FaComment />
                                    </div>
                                    {
                                        value.numberOfComments
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            {
                showModal()
            }
        </div>
    )
}
function mapStateToProps(state) {
    return{}
}
function mapDispatchToProps(dispatch) {
    return{
        getUserProfile:(username,callback)=>{
            dispatch(profileAction.action.getUserProfile(username,callback))
        },
        getSavedPost: (username, callback, history) => {
            dispatch(profileAction.action.getSavedPost(username, callback, history))
        },
        getPostVideo: (username, callback, history, payload) => {
            dispatch(profileAction.action.getPostVideo(username, callback, history,payload))
        },
        fetchPostVideo: (username, callback, history, payload) => {
            dispatch(profileAction.action.fetchPostVideo(username, callback, history,payload))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HavePostsComponents)