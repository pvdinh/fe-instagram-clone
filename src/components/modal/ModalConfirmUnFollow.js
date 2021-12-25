import React from "react";
import {connect} from "react-redux";
import {Modal} from "antd";
import homeActions from "../../redux/actions/homeActions";

function ModalConfirmUnFollow(props) {



    const endFollowing = (userFollowingId)=>{
        props.endFollowing(userFollowingId)
        props.setVisible()
    }
    return (
        <Modal centered visible={props.visible} onCancel={()=>{props.setVisible()}} width={400} className='instagram-home-page-wrap'  footer={null} closable={false}>
                    <>
                        <div className="options-dialog__button wrap-user-confirm">
                            <img className="wrap-avatar" src={props.userAccountFollowing.profilePhoto} />
                            <div className="wrap-username">Unfollow  {props.userAccountFollowing.username}?</div>
                        </div>
                        <button className='options-dialog__button' style={{borderBottom:"1px solid var(--border)",color:"#ed4956",fontWeight: "700"}} onClick={()=>{endFollowing(props.userAccountFollowing.id)}} >Unfollow</button>
                        <button className='options-dialog__button' onClick={()=>props.setVisible()} >Cancel</button>
                    </>
        </Modal>
    )
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        endFollowing: (userFollowingId) => {
            dispatch(homeActions.action.endFollowing(userFollowingId))
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ModalConfirmUnFollow)