import React from "react";
import {connect} from "react-redux";
import {Modal} from "antd";
import homeActions from "../../../redux/actions/homeActions";

function ModalConfirmRemoveFollow(props) {



    const removeFollowing = (id)=>{
        props.removeFollowing(id)
        props.setVisible()
    }
    return (
        <Modal centered visible={props.visible} onCancel={()=>{props.setVisible()}} width={400} className='instagram-home-page-wrap'  footer={null} closable={false}>
                    <>
                        <div className="options-dialog__button wrap-user-confirm">
                            <img className="wrap-avatar" src={props.userAccountFollowing.profilePhoto} />
                            <div className="wrap-username" style={{fontSize:"20px",color:"var(--text-dark)"}}>Remove Follower?</div>
                            <div style={{color:"var(--text-light)"}} >Instagram wont tell {props.userAccountFollowing.username} they were removed from your followers</div>
                        </div>
                        <button className='options-dialog__button' style={{borderBottom:"1px solid var(--border)",color:"#ed4956",fontWeight: "700"}} onClick={()=>{removeFollowing(props.userAccountFollowing.id)}} >Remove</button>
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
        removeFollowing: (id) => {
            dispatch(homeActions.action.removeFollowing(id))
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ModalConfirmRemoveFollow)