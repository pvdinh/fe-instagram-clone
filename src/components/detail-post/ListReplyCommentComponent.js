import {connect} from "react-redux";
import React, {useEffect, useState} from "react";
import ReplyCommentComponent from "./ReplyCommentComponent";
import InputReplyCommentComponent from "./InputReplyCommentComponent";
import {Avatar} from "antd";
import {calculatorDayCommented} from "../../utils/formatNumber";
import ReactCommentComponent from "../home/ReactCommentComponent";
import comment from "../../redux/actions/comment";


function ListReplyCommentComponent(props) {

    const [displayReplyComment,setDisplayReplyComment] = useState(false)
    const [listReplyComment,setListReplyComment] = useState([])

    useEffect(()=>{
        props.getAllReplyComment(props.comment.id,(data)=>{
            setListReplyComment(data)
        })
    },[displayReplyComment,props.reload])

    return (
        <div className="comment">
            <div className="avatar-user">
                <Avatar src={props.userAccountSetting.profilePhoto} alt="picture"></Avatar>
            </div>
            <div className="content-comment">
                <a href={`/${props.userAccountSetting.displayName}`}
                   className="displayname-user">{props.userAccountSetting.displayName}</a>
                <span>{props.comment.content}</span>
                <div className="time-commented-x">
                    <div>
                        {calculatorDayCommented(props.comment.dateCommented)}
                    </div>
                    <div className="wrap-reply-comment-label">
                        <div className="reply-comment-label" onClick={()=>{setDisplayReplyComment(!displayReplyComment)}}>
                            {listReplyComment.length > 0 ? "See more" : "Reply"}
                        </div>
                        <svg className="more-action-in-comment"
                             width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg"
                             style={{cursor: "pointer"}}
                             onClick={() => {
                                 props.setCommentClick(props.comment, true);
                             }}
                        >
                            <circle cx="6.5" cy="11.5" r="1.5"
                                    fill="var(--text-dark)"></circle>
                            <circle cx="12" cy="11.5" r="1.5"
                                    fill="var(--text-dark)"></circle>
                            <circle cx="17.5" cy="11.5" r="1.5"
                                    fill="var(--text-dark)"></circle>
                        </svg>
                    </div>
                </div>
            </div>
            <ReactCommentComponent reload={props.reload} onClickLikeComment={()=>{props.onClickLikeComment()}} comment={props.comment}/>
            {
                displayReplyComment ?
                    <div>
                        {
                            listReplyComment.length > 0 ?
                                listReplyComment.map((value,index)=>(
                                    <ReplyCommentComponent reload={props.reload} onClickLikeComment={()=>{props.onClickLikeComment()}} setCommentClick={()=>{props.setCommentClick(value.replyComment,true)}} replyComment={value.replyComment} userAccountSetting={value.userAccountSetting}/>
                                ))
                                :
                                null
                        }
                        <InputReplyCommentComponent postReplyComment={(content)=>{props.postReplyComment(content,props.comment.id)}}/>
                    </div>
                    :
                    null
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        getAllReplyComment:(idComment,callback)=>{
          dispatch(comment.action.getAllReplyComment(idComment,callback))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListReplyCommentComponent)