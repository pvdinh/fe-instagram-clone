import {connect} from "react-redux";
import React, {useEffect, useState} from "react";
import {Modal, Tooltip} from "antd";
import {AiOutlineClose, CgRadioCheck, GiCircle, IoIosCheckmarkCircle} from "react-icons/all";
import ItemUserInSuggested from "./ItemUserInSuggested";

function ModalSelectReceiverComponent(props) {
    const [receiver,setReceiver]=useState([])


    useEffect(()=>{
        console.log("XXXX",props.receiverExisting)
    },[props.receiverExisting])

    const onSelectReceiver = (username)=>{
        setReceiver([...receiver,username])
    }
    const onRemoveReceiver = (username)=>{
        let index = receiver.indexOf(username)
        if(index > -1){
            receiver.splice(index,1)
            setReceiver([...receiver])
        }
    }

    const onCancel = ()=>{
        setReceiver([])
        props.setIsVisible()
    }

    return(
        <Modal className="wrap-modal-select-receiver" centered visible={props.isVisible}
               onCancel={()=>{onCancel()}} closable={null} footer={null}
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
                        {
                            receiver.map((value,index)=>(
                                <div className="item-selected">
                                    <div className="name">{value}</div>
                                    <Tooltip title="remove">
                                        <div className="remove" onClick={()=>{onRemoveReceiver(value)}}><AiOutlineClose /></div>
                                    </Tooltip>
                                </div>
                            ))
                        }
                        <input className="s21" autoComplete="off" placeholder="Search..."/>
                    </div>
                </div>
                <div className="suggested">
                    <div className="s1">Suggested</div>
                    <div className="s2">
                        {
                            props.receiverExisting.map((value,index)=>(
                                <ItemUserInSuggested item={value} listSelected={receiver} onRemoveReceiver={(username)=>{onRemoveReceiver(username)}} onSelectReceiver={(username)=>{onSelectReceiver(username)}} />
                            ))
                        }
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