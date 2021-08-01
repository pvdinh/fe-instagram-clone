import {connect} from "react-redux";
import React, {useState} from "react";
import {Modal, Tooltip} from "antd";
import {AiOutlineClose, CgRadioCheck, GiCircle, IoIosCheckmarkCircle} from "react-icons/all";

function ModalSelectReceiverComponent(props) {
    const [selected,setSelected] = useState(false)
    return(
        <Modal className="wrap-modal-select-receiver" centered visible={props.isVisible}
               onCancel={()=>{props.setIsVisible()}} closable={null} footer={null}
               title={(<div className="wrap-header-new-post">
                   <div className="icon-close" onClick={()=>{props.setIsVisible()}}>
                       <AiOutlineClose/>
                   </div>
                   <div className="title-div">New Message</div>
                   <div className="next-div">Next</div>
               </div>)}
        >
            <div className="body-modal-select-receiver">
                <div className="selected">
                    <div className="s1">
                        <h4>To:</h4>
                    </div>
                    <div className="s2">
                        <div className="item-selected">
                            <div className="name">dinh123</div>
                            <Tooltip title="remove">
                                <div className="remove"><AiOutlineClose /></div>
                            </Tooltip>
                        </div>
                        <input className="s21" autoComplete="off" placeholder="Search..."/>
                    </div>
                </div>
                <div className="suggested">
                    <div className="s1">Suggested</div>
                    <div className="s2">
                        <div className="side-menu__user-profile">
                            <a href="https://github.com/leocosta1" target="_blank" className="side-menu__user-avatar">
                                <img src="http://res.cloudinary.com/dinhpv/image/upload/v1626605290/instargram-clone/fnvb273cxogfhsuz0dcq.jpg" alt="User Picture"/>
                            </a>
                            <div className="side-menu__user-info">
                                <a href="https://github.com/leocosta1" target="_blank">dinh123</a>
                                <span>dinh123</span>
                            </div>
                            {
                                selected ?
                                    <IoIosCheckmarkCircle className="check"/>
                                    :
                                    <GiCircle className="unCheck"/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ModalSelectReceiverComponent)