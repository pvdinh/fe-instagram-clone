import React, {useEffect, useState} from "react";

function CommentComponent(props) {
    const [isActivePost, setIsActivePost] = useState(false)
    const [contentComment,setContentComment] = useState('')

    useEffect(()=>{
        contentComment.split(" ").join("") === "" ? setIsActivePost(false) : setIsActivePost(true)
    },[contentComment])

    const changeCommentPost = (e) =>{
        setContentComment(e.target.value)
    }

    const onPost = () =>{
        props.postComment(contentComment)
        setContentComment('')
    }

    return(
        <div className='post-comment'>
            <input className='input-comment' value={contentComment} onChange={(e)=>{changeCommentPost(e)}} placeholder={'Add a comment...'}/>
            {
                isActivePost ? <button className='button-comment' onClick={()=>{onPost()}}>Post</button> : <button className='button-comment-disabled'>Post</button>
            }
        </div>
    )
}
export default CommentComponent