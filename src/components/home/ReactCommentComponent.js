import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {fShortenNumber} from "../../utils/formatNumber";
import comment from "../../redux/actions/comment";
import ModalDisplayLikedCommentPost from "../modal/ModalDisplayLikedCommentPost";


function ReactCommentComponent(props) {
    const [like,setLike] = useState(false)
    const [countLike,setCountLike] = useState(0)
    const [isVisibleLiked, setIsVisibleLiked] = useState(false)

    useEffect(()=>{
        props.getListIdUserLikedComment(props.comment.id,(data)=>{
            setCountLike(data.length)
            data.includes(props.userAccountProfile.id) ? setLike(true) : setLike(false)
        })
    },[like,props.reload])

    const likeComment = () =>{
        props.likeComment(props.comment.id,(data)=>{
            props.onClickLikeComment()
            if(data.data === 'success'){
                setLike(true)
            }
        })
    }

    const unLikeComment = () =>{
        props.unLikeComment(props.comment.id,(data)=>{
            props.onClickLikeComment()
            if(data.data === 'success'){
                setLike(false)
            }
        })
    }

    return (
        <div style={{display: "flex", alignItems: "center"}}>
            {
                countLike > 0 ?
                    <p className="text-number-like margin-bt-4" onClick={()=>{setIsVisibleLiked(true)}}>{fShortenNumber(countLike)}</p>
                    :
                    <p className="text-number-like-none"></p>
            }
            <div className="wrap-like" style={{cursor:"pointer"}}>
                {
                    like ?
                        <svg className="_8-yf5 " height="13" fill="var(--like)"
                             viewBox="0 0 48 48" width="13" onClick={()=>{unLikeComment();setLike(!like)}}>
                            <path
                                d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                        </svg>
                        :
                        <div className="post__button black">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" onClick={()=>{likeComment();setLike(!like)}}>
                                <path
                                    d="M11.4995 21.2609C11.1062 21.2609 10.7307 21.1362 10.4133 20.9001C8.2588 19.3012 3.10938 15.3239 1.81755 12.9143C0.127895 9.76543 1.14258 5.72131 4.07489 3.89968C5.02253 3.31177 6.09533 3 7.18601 3C8.81755 3 10.3508 3.66808 11.4995 4.85726C12.6483 3.66808 14.1815 3 15.8131 3C16.9038 3 17.9766 3.31177 18.9242 3.89968C21.8565 5.72131 22.8712 9.76543 21.186 12.9143C19.8942 15.3239 14.7448 19.3012 12.5902 20.9001C12.2684 21.1362 11.8929 21.2609 11.4995 21.2609ZM7.18601 4.33616C6.34565 4.33616 5.5187 4.57667 4.78562 5.03096C2.43888 6.49183 1.63428 9.74316 2.99763 12.2819C4.19558 14.5177 9.58639 18.6242 11.209 19.8267C11.3789 19.9514 11.6158 19.9514 11.7856 19.8267C13.4082 18.6197 18.799 14.5133 19.997 12.2819C21.3603 9.74316 20.5557 6.48738 18.209 5.03096C17.4804 4.57667 16.6534 4.33616 15.8131 4.33616C14.3425 4.33616 12.9657 5.04878 12.0359 6.28696L11.4995 7.00848L10.9631 6.28696C10.0334 5.04878 8.6611 4.33616 7.18601 4.33616Z"
                                    fill="var(--text-dark)" stroke="var(--text-dark)"
                                    stroke-width="0.6"/>
                            </svg>
                        </div>
                }
            </div>
            <ModalDisplayLikedCommentPost idComment={props.comment.id} visible={isVisibleLiked} setVisible={()=>{setIsVisibleLiked(false)}} />
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
        getListIdUserLikedComment: (idComment,callback) =>{
          dispatch(comment.action.getListIdUserLikedComment(idComment,callback))
        },
        likeComment: (idComment,callback) =>{
          dispatch(comment.action.likeComment(idComment,callback))
        },
        unLikeComment: (idComment,callback) =>{
          dispatch(comment.action.unLikeComment(idComment,callback))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactCommentComponent)