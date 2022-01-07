import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Modal} from "antd";
import homeActions from "../../../redux/actions/homeActions";
import ItemModalDisplayLikedPost from "../ItemModalDisplayLikedPost";
import profileAction from "../../../redux/actions/profileAction";

function ModalDisplayFollowing(props) {

    const [page,setPage] = useState(0)
    const [size,setSize] = useState(20)


    useEffect(()=>{
        props.findFollowingByCurrentUser({page:page,size:size})
    },[props.visible])

    const onCancel = () =>{
        props.setVisible()
    }

    return(
        <Modal centered visible={props.visible} onCancel={()=>{onCancel()}} width={400} className='wrap-modal-display-liked-post'
               title={(<div className="wrap-title-modal-display-liked-post">
                   <div></div>
                   <div className="content-title">Following</div>
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
                    props.listFollowing.map((value,index)=>(
                        value.id !== props.userAccountProfile.id ?
                            <ItemModalDisplayLikedPost item={value} />
                            :
                            null
                    ))
                }
            </div>
        </Modal>
    )
}

function mapStateToProps(state) {
    return {
        listFollowing:state.profile.listFollowing,
        userAccountProfile: state.home.userAccountProfile,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        endFollowing: (userFollowingId) => {
            dispatch(homeActions.action.endFollowing(userFollowingId))
        },
        findFollowingByCurrentUser: (payload) => {
            dispatch(profileAction.action.findFollowingByCurrentUser(payload))
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ModalDisplayFollowing)
