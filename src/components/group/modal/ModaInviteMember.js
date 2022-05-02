import {connect} from "react-redux";
import React, {useEffect, useState} from "react";
import {Modal, Tooltip} from "antd";
import {AiOutlineClose, CgRadioCheck, GiCircle, IoIosCheckmarkCircle} from "react-icons/all";
import ItemUserInSuggested from "../../message/ItemUserInSuggested";
import messageActions from "../../../redux/actions/messageActions";
import groupAction from "../../../redux/actions/groupAction";

function ModalInviteMember(props) {
    const [receiver, setReceiver] = useState([])
    const [displayResultSearch, setDisplayResultSearch] = useState(false)
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        setSearchValue("")
    }, [props.isVisible])

    const onSelectReceiver = (username) => {
        if (displayResultSearch) {
            setDisplayResultSearch(false)
            // setSearchValue("")
        }
        setReceiver([...receiver, username])
    }
    const onRemoveReceiver = (username) => {
        let index = receiver.indexOf(username)
        if (index > -1) {
            receiver.splice(index, 1)
            setReceiver([...receiver])
        }
    }

    const onCancel = () => {
        setReceiver([])
        props.setIsVisible()
    }

    const onSearch = (event) => {
        if (event.target.value.split(" ").join("") !== "") {
            setSearchValue(event.target.value)
            props.findReceiverByUsername(event.target.value)
            setDisplayResultSearch(true)
        } else {
            setSearchValue(event.target.value)
            setDisplayResultSearch(false)
        }
    }
    const onClickInviteMember = () => {
        setReceiver([])
        let data ={
            idGroup: props.idGroup,
            idUser: receiver[0].id,
        }
        props.addMemberIntoGroup(data,(m)=>{
            if(m === 'success'){
                let elementAlert = document.getElementsByClassName("alertSendInviteToGroup")
                elementAlert[0].classList.add("show")
                const setTimeOut = setTimeout(()=>{
                    elementAlert[0].classList.remove("show")
                },2000)
            }else {
                let elementAlert = document.getElementsByClassName("alertSendInviteToGroupDuplicate")
                elementAlert[0].classList.add("show")
                const setTimeOut = setTimeout(()=>{
                    elementAlert[0].classList.remove("show")
                },2000)
            }
        })
        // props.setIsVisible()
    }

    return (
        <Modal className="wrap-modal-select-receiver" centered visible={props.isVisible}
               onCancel={() => {
                   onCancel()
               }} closable={null} footer={null}
               title={(<div className="wrap-header-new-post">
                   <div className="icon-close" onClick={() => {
                       props.setIsVisible()
                   }}>
                       <AiOutlineClose/>
                   </div>
                   <div className="title-div">Invite member</div>
                   {
                       receiver.length > 0 ?
                           <div className="next-div" onClick={() => {
                               onClickInviteMember()
                           }}>Invite</div>
                           :
                           <div className="next-div-disable" onClick={() => {
                           }}>Invite</div>
                   }
               </div>)}
        >
            <div className="body-modal-select-receiver">
                <div className="selected">
                    <div className="s1">
                        <h4>To:</h4>
                    </div>
                    <div className="s2">
                        {
                            receiver.map((value, index) => (
                                <div className="item-selected">
                                    <div className="name">{value.username}</div>
                                    <Tooltip title="remove">
                                        <div className="remove" onClick={() => {
                                            onRemoveReceiver(value)
                                        }}><AiOutlineClose/></div>
                                    </Tooltip>
                                </div>
                            ))
                        }
                        {
                            receiver.length < 1
                                ?
                                <input className="s21" autoComplete="off" value={searchValue} onChange={(event) => {
                                    onSearch(event)
                                }} placeholder="Search..."/>
                                :
                                null
                        }
                    </div>
                </div>
                <div className="suggested">
                    <div className="s2">
                        {
                            receiver.length < 1 ?

                                props.listReceiverResultSearch.map((value, index) => (
                                    <ItemUserInSuggested item={value} listSelected={receiver}
                                                         onRemoveReceiver={(username) => {
                                                             onRemoveReceiver(username)
                                                         }} onSelectReceiver={(username) => {
                                        onSelectReceiver(username)
                                    }}/>
                                ))

                                :

                                null
                        }
                    </div>
                </div>
            </div>
        </Modal>
    )
}

function mapStateToProps(state) {
    return {
        listReceiverResultSearch: state.message.listReceiverResultSearch,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        findReceiverByUsername: (search) => {
            dispatch(messageActions.action.findReceiverByUsername(search))
        },
        addMemberIntoGroup: (payload,callback) =>{
            dispatch(groupAction.action.addMemberIntoGroup(payload,callback))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalInviteMember)