import React, {useEffect, useState} from "react";

function InputReplyCommentComponent(props) {
    const [isActivePost, setIsActivePost] = useState(false)
    const [contentComment,setContentComment] = useState('')

    useEffect(()=>{
        contentComment.split(" ").join("") === "" ? setIsActivePost(false) : setIsActivePost(true)
    },[contentComment])

    const changeCommentPost = (e) =>{
        setContentComment(e.target.value)
    }

    const onPost = () =>{
        props.postReplyComment(contentComment)
        setContentComment('')
    }

    return(
        <div className='post-comment'>
            <input className='input-comment' style={{marginLeft:"85px",width:"auto"}} value={contentComment} onChange={(e)=>{changeCommentPost(e)}} placeholder={'Add a comment...'}/>
            {
                isActivePost ? <button className='button-comment' onClick={()=>{onPost()}} style={{marginLeft:"50px"}}>Post</button> : <button style={{marginLeft:"50px"}} className='button-comment-disabled'>Post</button>
            }
        </div>
    )
}
export default InputReplyCommentComponent