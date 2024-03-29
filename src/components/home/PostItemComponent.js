import React, {useEffect, useState} from "react";
import LazyLoad from 'react-lazyload'
import {Instagram} from 'react-content-loader'
import postActions from "../../redux/actions/postActions";
import {connect} from "react-redux";

function PostItemComponent(props) {
    const [like, setLike] = useState(true)
    const [listComment, setListComment] = useState(true)
    const [isActivePost, setIsActivePost] = useState(false)
    const [contentLoader, setContentLoader] = useState(false)
    const [contentComment,setContentComment] = useState('')

    useEffect(() => {
        const setTimeOut = setTimeout(() => {
            setContentLoader(true)
        }, 2000)
    }, [])

    useEffect(() => {
        props.likes.includes(props.userAccountProfile.displayName) ? setLike(true) : setLike(false)
    }, [props.likes])

    useEffect(()=>{
        props.getCommentPost(props.post.id,(data)=>{
            setListComment(data)
        })
    },[contentComment])

    useEffect(()=>{
        contentComment.split(" ").join("") === "" ? setIsActivePost(false) : setIsActivePost(true)
    },[contentComment])

    const onClickLike = () => {
        like ? props.unLikePost(props.post.id) : props.likePost(props.post.id)
    }
    const changeCommentPost = (e) =>{
        setContentComment(e.target.value)
    }
    const postComment = () =>{
        let comment = {
            id:"",
            content:contentComment,
            idPost:props.post.id,
            idUser:props.userAccountProfile.id,
            dateCommented:new Date().getTime(),
        }
        setContentComment("")
        props.commentPost(comment,(data)=>{})
    }
    const calculatorDayCreated = (timeCreated) => {
        let distance = Math.round((new Date().getTime() - timeCreated) / (1000))
        switch (true) {
            case distance <= 1:
                return "JUST NOW"
            case 2 <= distance && distance <= 5:
                return "A FEW SECONDS"
            case 6 <= distance && distance <= 59:
                return distance + " SECONDS AGO"
            case 60 <= distance && distance < 3600:
                return Math.round(distance / 60) + " MINUTES AGO"
            case 3600 <= distance && distance < (3600 * 24):
                return Math.round(distance / (60 * 60)) + " HOURS AGO"
            case 3600 * 24 <= distance :
                return Math.round((distance / (60 * 60 * 24))) + " DAYS AGO"
            default:
                break;
        }
    }
    const displayLikes = (likes) => {
        switch (true) {
            case likes.length === 1:
                return (
                    <span className="likes">
              Liked by <a href="#">{likes[0]}</a>
                    </span>
                )
            case likes.length === 2:
                return (
                    <span className="likes">
              Liked by <a href="#">{likes[0]}</a> and <a href="#">{likes[1]}</a>
                    </span>
                )
            case likes.length > 2:
                return (
                    <span className="likes">
              Liked by <a href="#">{likes[0]}</a>, <a
                        href="#">{likes[1]}</a> and <strong>{likes.length - 2} others</strong>
            </span>
                )
            default:
                return (<div></div>)
        }
    }

    return (
        <div>
            {
                contentLoader ?
                    <div className="post">
                        <div className="post-top">
                            <div className="profile">
                                <div className="avatar">
                                    <img
                                        src={props.userAccountSetting.profilePhoto}
                                        alt="User"
                                    />
                                </div>
                                <a href="https://github.com/leocosta1" target="_blank">
                                    {props.userAccountSetting.displayName}
                                </a>
                            </div>
                            <button>
                                <svg
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 16 16"
                                    className="bi bi-three-dots"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="post-media">
                            <LazyLoad>
                                <img
                                    src={props.post.imagePath}
                                    alt="Post"
                                />
                            </LazyLoad>
                        </div>
                        <div className="post-bottom">
                            <div className="buttons">
                                <div>
                                    {
                                        like ?
                                            <button className='home-heart red' onClick={() => {
                                                onClickLike()
                                            }}>
                                                <svg className="_8-yf5 " height="24"
                                                     viewBox="0 0 48 48" width="24">
                                                    <path
                                                        d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                                                </svg>
                                            </button>
                                            :
                                            <button className='home-heart black' onClick={() => {
                                                onClickLike()
                                            }}>
                                                <svg
                                                    className="_8-yf5 "
                                                    height={24}
                                                    viewBox="0 0 48 48"
                                                    width={24}
                                                >
                                                    <path
                                                        d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"/>
                                                </svg>
                                            </button>
                                    }
                                    <button className='home-comment'>
                                        <svg
                                            className="_8-yf5 "
                                            height={24}
                                            viewBox="0 0 48 48"
                                            width={24}
                                        >
                                            <path
                                                clipRule="evenodd"
                                                d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    <button className='home-share'>
                                        <svg
                                            className="_8-yf5 "
                                            height={24}
                                            viewBox="0 0 48 48"
                                            width={24}
                                        >
                                            <path
                                                d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"/>
                                        </svg>
                                    </button>
                                </div>
                                <button>
                                    <svg
                                        className="_8-yf5 "
                                        height={24}
                                        viewBox="0 0 48 48"
                                        width={24}
                                    >
                                        <path
                                            d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"/>
                                    </svg>
                                </button>
                            </div>
                            {displayLikes(props.likes)}
                            <p className="desc">
                                <a href="https://github.com/leocosta1" target="_blank">
                                    leocosta1
                                </a>{" "}
                                Responsive clone of Instagram UI. Made with love, for study
                                purposes. ❤
                            </p>
                            {
                                listComment.length > 3 ?
                                    <p className="view-all-comment">
                                        View all {listComment.length} comments
                                    </p>
                                    : <div></div>
                            }
                            {
                                listComment.slice(listComment.length-3,listComment.length).map((item,index)=>(
                                    <div className="comment">
                                        <span style={{fontWeight: "600"}} >{item.userAccountSetting.displayName}</span> <span> {item.comment.content}</span>
                                    </div>
                                ))
                            }
                            <span className="time">{calculatorDayCreated(props.post.dateCreated)}</span>
                        </div>
                        <hr className='post-hr' />
                        <div className='post-comment'>
                            <input className='input-comment' value={contentComment} onChange={(e)=>{changeCommentPost(e)}} placeholder={'Add a comment...'}/>
                            {
                                isActivePost ? <button className='button-comment' onClick={()=>{postComment()}}>Post</button> : <button className='button-comment-disabled'>Post</button>
                            }
                        </div>
                    </div>
                    : <Instagram/>
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        userAccountProfile: state.home.userAccountProfile,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        likePost:(pId) =>{
            dispatch(postActions.action.likePost(pId))
        },
        unLikePost:(pId) =>{
            dispatch(postActions.action.unLikePost(pId))
        },
        commentPost:(data,callback)=>{
            dispatch(postActions.action.commentPost(data,callback))
        },
        getCommentPost:(pId,callback)=>{
            dispatch(postActions.action.getCommentPost(pId,callback))
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostItemComponent)