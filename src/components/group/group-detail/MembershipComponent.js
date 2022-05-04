import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Input} from "antd";
import ItemUserRequest from "./ItemUserRequest";
import groupAction from "../../../redux/actions/groupAction";


function MembershipComponent(props) {
    const [page,setPage] = useState(0)
    const [size,setSize] = useState(2147483647)

    useEffect(()=>{
        props.getMemberInGroup(props.idGroup,{page:page,size:size})
    },[])

    return (
        <div className="wrap-list-requests-user">
            <div className="list-requests-user">
                <div className="label-request-member">Members ({props.listMemberInGroup.length})</div>
                <Input size="large" placeholder="Search user" />

                {
                    props.listMemberInGroup.map((value,index)=>(
                        <ItemUserRequest type="member" item={value} />
                    ))
                }
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        listMemberInGroup:state.group.listMemberInGroup,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMemberInGroup:(idGroup,payload) =>{
          dispatch(groupAction.action.getMemberInGroup(idGroup,payload))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MembershipComponent)