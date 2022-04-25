import {connect} from "react-redux";
import React, {useEffect} from "react";
import {Avatar} from "antd";
import ReactCommentComponent from "../home/ReactCommentComponent";
import {calculatorDayCommented} from "../../utils/formatNumber";


function ReplyCommentComponent(props) {
    return (
        <div className="wrap-reply-comment">
            <div className="avatar-user">
                <Avatar
                    src={props.userAccountSetting.profilePhoto}
                    alt="picture"></Avatar>
            </div>
            <div className="content-comment">
                <a href={`/${props.userAccountSetting.displayName}`}
                   className="displayname-user">{props.userAccountSetting.displayName}</a>
                <span>{props.replyComment.content}</span>
                <div className="time-commented-x">
                    <div>
                        {calculatorDayCommented(props.replyComment.dateCommented)}
                    </div>
                    <div className="wrap-reply-comment-label">
                        <div className="reply-comment-label">
                            Reply
                        </div>
                        <svg className="more-action-in-comment"
                             width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg"
                             style={{cursor: "pointer"}}
                             onClick={() => {
                                 props.setCommentClick();
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
            <ReactCommentComponent reload={props.reload} onClickLikeComment={()=>{props.onClickLikeComment()}} comment={props.replyComment}/>
        </div>
    )
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReplyCommentComponent)