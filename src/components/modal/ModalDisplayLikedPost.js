import React, {useEffect, useState} from "react";
import homeActions from "../../redux/actions/homeActions";
import {connect} from "react-redux";
import {Modal} from "antd";
import postActions from "../../redux/actions/postActions";
import ItemModalDisplayLikedPost from "./ItemModalDisplayLikedPost";

function ModalDisplayLikedPost(props) {

    const [page,setPage] = useState(0)
    const [size,setSize] = useState(20)


    useEffect(()=>{
        props.getUserAccountSettingLikedPost(props.pId,{page:page,size:size,})
    },[props.visible])

    const onCancel = () =>{
        props.setVisible()
    }

    return(
        <Modal centered visible={props.visible} onCancel={()=>{onCancel()}} width={400} className='wrap-modal-display-liked-post'
               title={(<div className="wrap-title-modal-display-liked-post">
                   <div></div>
                   <div className="content-title">Liked</div>
                   <div className="icon-close" onClick={()=>{onCancel()}}>
                       <svg aria-label="Close" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img"
                            viewBox="0 0 24 24" width="24">
                           <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                 stroke-width="2" x1="21" x2="3" y1="3" y2="21"></line>
                           <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                 stroke-width="2" x1="21" x2="3" y1="21" y2="3"></line>
                       </svg>
                   </div>
               </div>)}
               footer={null} closable={false}>
            <div className="wrap-div-modal-display-liked-post">
                {
                    props.listUserAccountSettingLikedPost.map((value,index)=>(
                        <ItemModalDisplayLikedPost item={value} />
                    ))
                }
            </div>
        </Modal>
    )
}

function mapStateToProps(state) {
    return {
        listUserAccountSettingLikedPost:state.post.listUserAccountSettingLikedPost,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        endFollowing: (userFollowingId) => {
            dispatch(homeActions.action.endFollowing(userFollowingId))
        },
        getUserAccountSettingLikedPost:(pId,payload)=>{
          dispatch(postActions.action.getUserAccountSettingLikedPost(pId,payload))
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ModalDisplayLikedPost)
