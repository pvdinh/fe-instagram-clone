import React, {useEffect, useState} from "react";
import {BsFillHeartFill, FaComment} from "react-icons/all";
import {connect} from "react-redux";
import PostDetailModal from "./PostDetailModal";
import profileAction from "../../redux/actions/profileAction";


function HavePostsComponents(props) {
    const [isVisiblePostDetail, setIsVisiblePostDetail] = useState(false)
    const [post, setPost] = useState({})

    useEffect(()=>{
        props.getUserProfile(props.currentUserAccountSetting.username,()=>{})
    },[isVisiblePostDetail])

    const onClickPost = (p) =>{
        console.log(p.post)
        setPost(p)
        setIsVisiblePostDetail(true)
    }

    const showModal = () =>{
        if(post.post !== undefined){
            return(
                <PostDetailModal postId={post.post.id} visible={isVisiblePostDetail} setVisible={()=>{setIsVisiblePostDetail(!isVisiblePostDetail)}} />
            )
        }
    }

    return(
        <div className="tabbed-pane__posts">
            {
                props.listPostDetails.map((value,index)=>(
                    <div className="wrap-post">
                        <a className="i1" href><img className="i11" src={value.post.imagePath} alt="bill murray post picture" /></a>
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
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HavePostsComponents)