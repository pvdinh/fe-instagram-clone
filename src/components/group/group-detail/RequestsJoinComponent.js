import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Input} from "antd";
import ItemUserRequest from "./ItemUserRequest";
import groupAction from "../../../redux/actions/groupAction";


function RequestsJoinComponent(props) {
    const [page,setPage] = useState(0)
    const [size,setSize] = useState(2147483647)
    const [reload,setReload] = useState(false)

    useEffect(()=>{
        props.getMemberRequestInGroup(props.idGroup,{page:page,size:size})
    },[reload])

    return (
        <div className="wrap-list-requests-user">
            <div className="list-requests-user">
                <div className="label-request-member">Requests membership ({props.listMemberRequestInGroup.length})</div>
                <Input size="large" placeholder="Search user" />
                {
                    props.listMemberRequestInGroup.map((value,index)=>(
                        <ItemUserRequest type="request" item={value} reload={()=>{setReload(!reload)}} />
                    ))
                }
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        listMemberRequestInGroup:state.group.listMemberRequestInGroup,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMemberRequestInGroup:(idGroup,payload) =>{
            dispatch(groupAction.action.getMemberRequestInGroup(idGroup,payload))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestsJoinComponent)