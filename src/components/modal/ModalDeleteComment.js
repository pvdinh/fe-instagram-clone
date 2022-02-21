import React from "react";
import {Modal} from "antd";
import {connect} from "react-redux";

function ModalDeleteComment(props) {
    return(
        <Modal centered visible={props.visible} className='instagram-home-page-wrap' onCancel={()=>{props.setVisible()}} footer={null} closable={false}>
            {
                props.comment.idUser === props.userAccountProfile.id || props.userAccountProfile.id === props.idUserPost ?
                    <>
                        <button className='options-dialog__button' style={{borderBottom:"1px solid var(--border)",color:"#ed4956",fontWeight: "700"}} onClick={()=>{props.deleteComment();props.setVisible()}}>Delete</button>
                        <button className='options-dialog__button' onClick={()=>{props.setVisible()}}>Cancel</button>
                    </>
                    :
                    <>
                        <button className='options-dialog__button' onClick={()=>{props.setVisible()}}>Cancel</button>
                    </>
            }
        </Modal>
    )
}
function mapStateToProps(state) {
    return {
        userAccountProfile:state.home.userAccountProfile,
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalDeleteComment)