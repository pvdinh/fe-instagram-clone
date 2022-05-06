import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Input} from "antd";
import ItemUserRequest from "./ItemUserRequest";
import groupAction from "../../../redux/actions/groupAction";


function MembershipComponent(props) {
    const [page,setPage] = useState(0)
    const [size,setSize] = useState(2147483647)
    const [reload, setReload] = useState(false)
    const [search, setSearch] = useState("")

    useEffect(()=>{
        props.getMemberInGroup(props.idGroup,{page:page,size:size})
    },[reload])

    useEffect(()=>{
        props.searchMemberInGroup(props.idGroup, {page: page, size: size},search, () => {
        })
    },[reload])

    const onSearch = (e) => {
        setSearch(e.target.value)
        props.searchMemberInGroup(props.idGroup, {page: page, size: size}, e.target.value, () => {
        })
    }

    return (
        <div className="wrap-list-requests-user">
            <div className="list-requests-user">
                <div className="label-request-member">Members ({props.listMemberInGroup.length})</div>
                <Input size="large" placeholder="Search user" onChange={(e) => {
                    onSearch(e)
                }} />

                {
                    search.split(" ").join("") !== "" ?
                        props.listMemberSearchInGroup.map((value, index) => (
                            <ItemUserRequest type="member" item={value} reload={() => {
                                setReload(!reload)
                            }}/>
                        ))
                        :
                    props.listMemberInGroup.map((value,index)=>(
                        <ItemUserRequest type="member" item={value} reload={() => {
                            setReload(!reload)
                        }}/>
                    ))
                }
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        listMemberInGroup:state.group.listMemberInGroup,
        listMemberSearchInGroup:state.group.listMemberSearchInGroup,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMemberInGroup:(idGroup,payload) =>{
          dispatch(groupAction.action.getMemberInGroup(idGroup,payload))
        },
        searchMemberInGroup:(idGroup,payload,search,callback) =>{
            dispatch(groupAction.action.searchMemberInGroup(idGroup,payload,search, callback))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MembershipComponent)