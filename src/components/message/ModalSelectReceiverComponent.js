import {connect} from "react-redux";
import React, {useEffect, useState} from "react";
import {Modal, Tooltip} from "antd";
import {AiOutlineClose, CgRadioCheck, GiCircle, IoIosCheckmarkCircle} from "react-icons/all";
import ItemUserInSuggested from "./ItemUserInSuggested";
import messageActions from "../../redux/actions/messageActions";

function ModalSelectReceiverComponent(props) {
    const [receiver,setReceiver]=useState([])
    const [displayResultSearch,setDisplayResultSearch]=useState(false)
    const [searchValue,setSearchValue]=useState("")

    const onSelectReceiver = (username)=>{
        if(displayResultSearch){
            setDisplayResultSearch(false)
            setSearchValue("")
        }
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

    const onSearch = (event) =>{
        if(event.target.value.split(" ").join("") !== ""){
            setSearchValue(event.target.value)
            props.findReceiverByUsername(event.target.value)
            setDisplayResultSearch(true)
        }else {
            setSearchValue(event.target.value)
            setDisplayResultSearch(false)
        }
    }
    const onClickBeginChat = () =>{
        props.onBeginChat(receiver[0].id)
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
                   <div className="next-div" onClick={()=>{onClickBeginChat()}}>Next</div>
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
                                    <div className="name">{value.username}</div>
                                    <Tooltip title="remove">
                                        <div className="remove" onClick={()=>{onRemoveReceiver(value)}}><AiOutlineClose /></div>
                                    </Tooltip>
                                </div>
                            ))
                        }
                        <input className="s21" autoComplete="off" value={searchValue} onChange={(event)=>{onSearch(event)}} placeholder="Search..."/>
                    </div>
                </div>
                <div className="suggested">
                    {
                        props.listReceiverResultSearch.length > 0 && displayResultSearch ?
                            <div className="s2">
                                {
                                    props.listReceiverResultSearch.map((value,index)=>(
                                        <ItemUserInSuggested item={value} listSelected={receiver} onRemoveReceiver={(username)=>{onRemoveReceiver(username)}} onSelectReceiver={(username)=>{onSelectReceiver(username)}} />
                                    ))
                                }
                            </div>
                            :
                            <div>
                                <div className="s1">Suggested</div>
                                <div className="s2">
                                    {
                                        props.receiverExisting.map((value,index)=>(
                                            <ItemUserInSuggested item={value.userAccountSettingReceiver} listSelected={receiver} onRemoveReceiver={(username)=>{onRemoveReceiver(username)}} onSelectReceiver={(username)=>{onSelectReceiver(username)}} />
                                        ))
                                    }
                                </div>
                            </div>
                    }
                </div>
            </div>
        </Modal>
    )
}
function mapStateToProps(state) {
    return {
        listReceiverResultSearch:state.message.listReceiverResultSearch,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        findReceiverByUsername:(search)=>{
            dispatch(messageActions.action.findReceiverByUsername(search))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ModalSelectReceiverComponent)