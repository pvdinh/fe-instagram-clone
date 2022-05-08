import React from "react";
import {connect} from "react-redux";
import {Modal} from "antd";

function ModalConfirmDeletePost(props) {

    return (
        <Modal centered visible={props.visible} onCancel={()=>{props.setVisible()}} width={400} className='instagram-home-page-wrap'  footer={null} closable={false}>
                    <>
                        <div className="options-dialog__button wrap-user-confirm">
                            <div className="wrap-username">Delete post?</div>
                        </div>
                        <button className='options-dialog__button' style={{borderBottom:"1px solid var(--border)",color:"#ed4956",fontWeight: "700"}} onClick={()=>{props.delete();props.setVisible()}} >Delete</button>
                        <button className='options-dialog__button' onClick={()=>props.setVisible()} >Cancel</button>
                    </>
        </Modal>
    )
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps,mapDispatchToProps)(ModalConfirmDeletePost)