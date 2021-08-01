import {GiCircle, IoIosCheckmarkCircle} from "react-icons/all";
import React, {useEffect, useState} from "react";

function ItemUserInSuggested(props) {
    const [selected,setSelected] = useState(false)

    useEffect(()=>{
        props.listSelected.indexOf(props.item) > -1 ? setSelected(true) : setSelected(false)
    },[props.listSelected])

    const onSelectReceiver = () =>{
        if(selected){
            props.onRemoveReceiver(props.item)
            setSelected(false)
        }else {
            props.onSelectReceiver(props.item)
            setSelected(true)
        }
    }

    return(
        <div className="side-menu__user-profile" onClick={()=>{onSelectReceiver()}}>
            <a target="_blank" className="side-menu__user-avatar">
                <img src={props.item.profilePhoto} alt="User Picture"/>
            </a>
            <div className="side-menu__user-info">
                <a target="_blank">{props.item.username}</a>
                <span>{props.item.displayName}</span>
            </div>
            {
                selected ?
                    <IoIosCheckmarkCircle className="check"/>
                    :
                    <GiCircle className="unCheck"/>
            }
        </div>
    )
}
export default ItemUserInSuggested