import React, {useEffect, useState} from "react";
import {Avatar, Modal} from "antd";
import MoreActionInPost from "../home/MoreActionInPost";
import CommentComponent from "../home/CommentComponent";
import SockJS from "sockjs-client"
import Stomp from "stompjs"
import MorePostComponent from "./MorePostComponent";
import ReactPlayer from "react-player";
import {BASE_URL_WEBSOCKET} from "../../url";
import ModalFeedback from "../modal/feedback/ModalFeedback";
import ModalDeleteComment from "../modal/ModalDeleteComment";
import ModalDisplayLikedPost from "../modal/ModalDisplayLikedPost";
import ListReplyCommentComponent from "./ListReplyCommentComponent";

let stompClient=null
function PostDetailComponentPage(props) {

    const [like, setLike] = useState(true)
    const [saved, setSaved] = useState(false)
    const [reload, setReload] = useState(true)
    const [post, setPost] = useState(true)
    const [listCmt, setListCmt] = useState([])
    const [listLike, setListLike] = useState([])
    const [ownerPost, setOwnerPost] = useState([])

    const [isModalFeedbackVisible,setIsModalFeedbackVisible] = useState(false)
    const [isVisibleModalDeleteComment,setIsVisibleModalDeleteComment] = useState(false)
    const [commentClick,setCommentClick] = useState({})
    const [isVisibleLiked, setIsVisibleLiked] = useState(false)


    useEffect(()=>{
        let sockJS = new SockJS(BASE_URL_WEBSOCKET+"/ws")
        let header = {
            'Authorization': localStorage.getItem('sessionToken') ? 'Bearer ' + localStorage.getItem('sessionToken') : 'Bearer ',
            'Content-Type': 'application/json',
        }
        stompClient = Stomp.over(sockJS)
        stompClient.connect(header,()=>{onConnect()}, ()=>{onError()})
        stompClient.debug=null
        return(()=>{
            stompClient.disconnect()
        })
    },[reload])

    useEffect(()=>{
        props.getUserAccountProfile((userCurrent)=>{
            props.getPostInformationFromPId(props.match.params.pId,(data)=>{
                data.likes.includes(userCurrent.username) ? setLike(true) : setLike(false)
                setListLike(data.likes)
                setOwnerPost(data.userAccountSetting)
                setPost(data.post)
            })
        })
    },[props.match.params.pId])

    useEffect(() => {
        props.checkSavedPost(props.match.params.pId, (mess) => {
            mess === "true" ?
                setSaved(true)
                :
                setSaved(false)
        })
    }, [reload])

    useEffect(()=>{
        props.getPostInformationFromPId(props.match.params.pId,(data)=>{
            data.likes.includes(props.userAccountProfile.username) ? setLike(true) : setLike(false)
            setListLike(data.likes)
        })
    },[like,reload])

    useEffect(()=>{
        props.getCommentPost(props.match.params.pId,(data)=>{
            setListCmt(data)
        })
    },[props.match.params.pId,reload])

    useEffect(() => {
        //scroll to the bottom of "#chats-body"
        let myDiv = document.getElementById("chats-body");
        myDiv.scrollTop = myDiv.scrollHeight;
    })

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

    const onClickLike = () => {
        if(like){
            setLike(false)
            props.unlikePostInPostDetail(post.id)
            stompClient.send("/app/comment.allComment",{},JSON.stringify({}))
        }else {
            setLike(true)
            props.likePostInPostDetail(post.id)
            stompClient.send("/app/comment.allComment",{},JSON.stringify({}))
        }
    }


    const onClickLikeComment = () => {
        stompClient.send("/app/comment.allComment", {}, JSON.stringify({}))
    }

    const postComment = (cmt) => {
        let comment = {
            id: "",
            content: cmt,
            idPost: post.id,
            idUser: props.userAccountProfile.id,
            dateCommented: new Date().getTime(),
            sessionToken: localStorage.getItem('sessionToken') ? 'Bearer ' + localStorage.getItem('sessionToken') : 'Bearer ',
        }
        console.log(comment)
        stompClient.send("/app/comment.allComment",{},JSON.stringify(comment))
    }

    const postReplyComment = (content,idComment) =>{
        let comment = {
            id: "",
            content: content,
            idPost: post.id,
            idUser: props.userAccountProfile.id,
            dateCommented: new Date().getTime(),
            idComment:idComment,
        }
        console.log(comment)
        stompClient.send("/app/comment.replyComment",{},JSON.stringify(comment))
    }

    const deleteCmt = (comment) =>{
        if(comment.idComment){
            console.log(comment)
            stompClient.send("/app/comment.deleteReplyComment",{},JSON.stringify(comment))
        }else stompClient.send("/app/comment.deleteComment",{},JSON.stringify(comment))
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
              Liked by <a className='post__name--underline' href="#">{likes[0]}</a>
                    </span>
                )
            case likes.length === 2:
                return (
                    <span className="likes">
              Liked by <a className='post__name--underline' href="#">{likes[0]}</a> and <a
                        className='post__name--underline' href="#">{likes[1]}</a>
                    </span>
                )
            case likes.length > 2:
                return (
                    <span className="likes">
              Liked by <a className='post__name--underline' href="#">{likes[0]}</a>, <a
                        className='post__name--underline'
                        href="#">{likes[1]}</a> and <strong style={{cursor:"pointer",}} onClick={()=>{setIsVisibleLiked(true)}}>{likes.length - 2} others</strong>
            </span>
                )
            default:
                return (<div></div>)
        }
    }

    const savePost = () => {
        saved ?
            props.endSavePost(post.id, (mess) => {
                if(mess === "success") setSaved(false)
                setReload(!reload)
            })
            :
            props.beginSavePost(post.id, (mess) => {
                if(mess === "success") setSaved(true)
                setReload(!reload)
            })
    }

    const deleteComment = () => {
        commentClick.sessionToken = localStorage.getItem('sessionToken') ? 'Bearer ' + localStorage.getItem('sessionToken') : 'Bearer ';
        deleteCmt(commentClick)
    }

    const showModalDeleteComment = () =>{
        if(isVisibleModalDeleteComment){
            return(
                <ModalDeleteComment deleteComment={()=>{deleteComment()}} idUserPost={ownerPost.id} comment={commentClick} visible={isVisibleModalDeleteComment} setVisible={()=>{setIsVisibleModalDeleteComment(false)}} />
            )
        }
    }

    const setCommentClickF = (cmt,b) =>{
        setCommentClick(cmt)
        setIsVisibleModalDeleteComment(b)
    }

    return(
        <div className="wrap-body-page-post-detail">
            <div className="body-page-post-detail">
                <div className="wrap-post-detail">
                    <div className="wrap-image-post-detail">
                        {
                            post.type === "image" ?
                                <img className="image-post-detail" alt="picture" src={post.imagePath} />
                                :
                                <ReactPlayer muted={true} playing height="100%" width="100%"
                                             controls={true} url={post.videoPath}
                                             light={post.imagePath !== "" ? props.imagePath : false}/>
                        }
                    </div>
                    <div style={{border: "1px solid var(--border)"}}>
                        <div className="post__header">
                            <div className="post__profile">
                                <a href={`/${ownerPost.username}`} className="post__avatar">
                                    <Avatar src={ownerPost.profilePhoto} alt="picture"></Avatar>
                                </a>
                                <a href={`/${ownerPost.username}`}
                                   className="post__user">{ownerPost.username}</a>
                            </div>

                            <MoreActionInPost post={post} userAccountFollowing={ownerPost}/>
                        </div>
                        <div className="post-detail-body-comment" id="chats-body">
                            {
                                listCmt.map((value, index) => (
                                    <ListReplyCommentComponent onClickLikeComment={()=>{onClickLikeComment()}} reload={reload} postReplyComment={(content,idComment)=>{postReplyComment(content,idComment)}} userAccountSetting={value.userAccountSetting}
                                                               comment={value.comment} setCommentClick={(cmt, b) => {
                                        setCommentClickF(cmt, b)
                                    }}/>
                                ))
                            }
                        </div>
                        <div className="post-detail-footer-comment">
                            <div style={{padding:"10px 16px"}}>
                                <div className="post__buttons">
                                    {
                                        !like ?
                                            <button className="post__button black" onClick={() => {
                                                onClickLike()
                                            }}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M11.4995 21.2609C11.1062 21.2609 10.7307 21.1362 10.4133 20.9001C8.2588 19.3012 3.10938 15.3239 1.81755 12.9143C0.127895 9.76543 1.14258 5.72131 4.07489 3.89968C5.02253 3.31177 6.09533 3 7.18601 3C8.81755 3 10.3508 3.66808 11.4995 4.85726C12.6483 3.66808 14.1815 3 15.8131 3C16.9038 3 17.9766 3.31177 18.9242 3.89968C21.8565 5.72131 22.8712 9.76543 21.186 12.9143C19.8942 15.3239 14.7448 19.3012 12.5902 20.9001C12.2684 21.1362 11.8929 21.2609 11.4995 21.2609ZM7.18601 4.33616C6.34565 4.33616 5.5187 4.57667 4.78562 5.03096C2.43888 6.49183 1.63428 9.74316 2.99763 12.2819C4.19558 14.5177 9.58639 18.6242 11.209 19.8267C11.3789 19.9514 11.6158 19.9514 11.7856 19.8267C13.4082 18.6197 18.799 14.5133 19.997 12.2819C21.3603 9.74316 20.5557 6.48738 18.209 5.03096C17.4804 4.57667 16.6534 4.33616 15.8131 4.33616C14.3425 4.33616 12.9657 5.04878 12.0359 6.28696L11.4995 7.00848L10.9631 6.28696C10.0334 5.04878 8.6611 4.33616 7.18601 4.33616Z"
                                                        fill="var(--text-dark)" stroke="var(--text-dark)"
                                                        stroke-width="0.6"/>
                                                </svg>
                                            </button>
                                            :
                                            <button className="post__button red" onClick={() => {
                                                onClickLike()
                                            }}>
                                                <svg className="_8-yf5 " height="24"
                                                     viewBox="0 0 48 48" width="24">
                                                    <path
                                                        d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                                                </svg>
                                            </button>
                                    }
                                    <button className="post__button__other">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M21.2959 20.8165L20.2351 16.8602C20.1743 16.6385 20.2047 16.3994 20.309 16.1907C21.2351 14.3342 21.5438 12.117 20.9742 9.80402C20.2003 6.67374 17.757 4.16081 14.6354 3.33042C13.7833 3.10869 12.9442 3 12.1312 3C6.29665 3 1.74035 8.47365 3.31418 14.5647C4.04458 17.3819 7.05314 20.2992 9.88344 20.9861C10.6486 21.173 11.4008 21.26 12.1312 21.26C13.7006 21.26 15.1701 20.8557 16.4614 20.1601C16.6049 20.0818 16.7657 20.0383 16.9222 20.0383C17.0005 20.0383 17.0787 20.047 17.157 20.0688L21.009 21.0991C21.0307 21.1035 21.0525 21.1078 21.0699 21.1078C21.2177 21.1078 21.3351 20.9687 21.2959 20.8165ZM19.0178 17.1863L19.6178 19.4253L17.4831 18.8558C17.3005 18.8079 17.1135 18.7819 16.9222 18.7819C16.557 18.7819 16.1875 18.8775 15.8571 19.0558C14.6963 19.6818 13.4441 19.9992 12.1312 19.9992C11.4834 19.9992 10.8269 19.9166 10.1791 19.7601C7.78354 19.1775 5.14453 16.6037 4.53586 14.2473C3.90111 11.7865 4.40109 9.26057 5.90536 7.31719C7.40964 5.3738 9.6791 4.26081 12.1312 4.26081C12.8529 4.26081 13.5876 4.35646 14.3137 4.5521C16.9961 5.26511 19.0786 7.39544 19.7525 10.1084C20.2264 12.0213 20.0308 13.9299 19.183 15.6298C18.9395 16.1168 18.8787 16.6689 19.0178 17.1863Z"
                                                  fill="var(--text-dark)" stroke="var(--text-dark)" stroke-width="0.7"/>
                                        </svg>
                                    </button>
                                    <button className="post__button__other">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M22.8555 3.44542C22.6978 3.16703 22.3962 3 22.0714 3L2.91369 3.01392C2.52859 3.01392 2.19453 3.25055 2.05997 3.60781C1.96254 3.86764 1.98574 4.14603 2.11565 4.37338C2.16669 4.45689 2.23165 4.53577 2.31052 4.60537L9.69243 10.9712L11.4927 20.5338C11.5623 20.9096 11.8499 21.188 12.2304 21.2483C12.6062 21.3086 12.9774 21.1323 13.1723 20.8029L22.8509 4.35018C23.0179 4.06715 23.0179 3.72381 22.8555 3.44542ZM4.21748 4.39194H19.8164L10.4255 9.75089L4.21748 4.39194ZM12.6248 18.9841L11.1122 10.948L20.5171 5.58436L12.6248 18.9841Z"
                                                  fill="var(--text-dark)" stroke="var(--text-dark)" stroke-width="0.3"/>
                                        </svg>
                                    </button>

                                    <div className="post__indicators"></div>

                                    <button className="post__button__other post__button--align-right" onClick={()=>{savePost()}}>
                                        {
                                            saved ?
                                                <svg aria-label="Remove" className="_8-yf5 " fill="#262626" height="24"
                                                     role="img" viewBox="0 0 48 48" width="24">
                                                    <path fill="var(--text-dark)" stroke="var(--text-dark)"
                                                          d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 28.9 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1z"></path>
                                                </svg>
                                                :
                                                <svg aria-label="Save" className="_8-yf5 " fill="#262626" height="24"
                                                     role="img"
                                                     viewBox="0 0 48 48" width="24">
                                                    <path fill="var(--text-dark)" stroke="var(--text-dark)"
                                                          d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                                                </svg>
                                        }
                                    </button>
                                </div>
                                <div className="post__infos">
                                    <div className="post__likes">
                                        {
                                            displayLikes(listLike)
                                        }
                                    </div>
                                    <span
                                        className="post__date-time">{calculatorDayCreated(post.dateCreated)}</span>
                                </div>
                            </div>
                            <hr className='post-hr'/>
                            <CommentComponent postComment={(cmt) => {
                                postComment(cmt)
                            }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrap-more-post-of-user">
                <div className="title">More posts from <a className="title-name" href="#">{ownerPost.username}</a></div>
                {
                    ownerPost.username !== undefined ?
                        <MorePostComponent reload={()=>{setReload(!reload)}} username={ownerPost.username} />
                        :
                        null
                }
            </div>

            <div className="footer-post-detail-page">
                <footer className="site-footer">
                    <nav>
                        <ul>
                            <li><a onClick={()=>{setIsModalFeedbackVisible(true)}}>Feedback</a></li>
                            <li>
                                <a href="#" rel="nofollow noopener noreferrer" target="_blank">About</a>
                            </li>
                            <li>
                                <a href="#" target="_blank">Help</a>
                            </li>
                            <li>
                                <a href="#" target="_blank">Press</a>
                            </li>
                            <li><a href="#">API</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li>
                                <a href="#">Privacy</a>
                            </li>
                            <li>
                                <a href="#">Terms</a>
                            </li>
                            <li>
                                <a href="#">Locations</a>
                            </li>
                            <li>
                                <a href="#">Top Accounts</a>
                            </li>
                            <li>
                                <a href="#">Suggested Accounts</a>
                            </li>
                            <li>
                                <a href="#">Hashtags</a>
                            </li>
                            <li>
                                <a href="#">Language</a>
                            </li>
                        </ul>
                    </nav>
                    <span className="copyright">© 2022 Meta from Meta</span>
                </footer>
            </div>
            <ModalFeedback visible={isModalFeedbackVisible} setVisible={()=>{setIsModalFeedbackVisible(false)}} />
            {
                showModalDeleteComment()
            }
            <ModalDisplayLikedPost pId={props.match.params.pId} visible={isVisibleLiked} setVisible={()=>{setIsVisibleLiked(false)}} />
        </div>
    )
}
export default PostDetailComponentPage