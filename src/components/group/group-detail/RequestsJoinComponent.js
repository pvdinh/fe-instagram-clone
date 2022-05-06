import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Input} from "antd";
import ItemUserRequest from "./ItemUserRequest";
import groupAction from "../../../redux/actions/groupAction";


function RequestsJoinComponent(props) {
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(2147483647)
    const [reload, setReload] = useState(false)
    const [search, setSearch] = useState("")

    useEffect(() => {
        props.getMemberRequestInGroup(props.idGroup, {page: page, size: size})
    }, [reload])

    useEffect(()=>{
        props.searchMemberRequestInGroup(props.idGroup, {page: page, size: size},search, () => {
        })
    },[reload])

    const onSearch = (e) => {
        setSearch(e.target.value)
        props.searchMemberRequestInGroup(props.idGroup, {page: page, size: size}, e.target.value, () => {
        })
    }

    return (
        <div className="wrap-list-requests-user">
            <div className="list-requests-user">
                <div className="label-request-member">Requests membership ({props.listMemberRequestInGroup.length})
                </div>
                <Input size="large" placeholder="Search user" onChange={(e) => {
                    onSearch(e)
                }}/>
                {
                    search.split(" ").join("") !== "" ?
                        props.listMemberRequestSearchInGroup.map((value, index) => (
                            <ItemUserRequest type="request" item={value} reload={() => {
                                setReload(!reload)
                            }}/>
                        ))
                        :
                        props.listMemberRequestInGroup.map((value, index) => (
                            <ItemUserRequest type="request" item={value} reload={() => {
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
        listMemberRequestInGroup: state.group.listMemberRequestInGroup,
        listMemberRequestSearchInGroup: state.group.listMemberRequestSearchInGroup,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMemberRequestInGroup: (idGroup, payload) => {
            dispatch(groupAction.action.getMemberRequestInGroup(idGroup, payload))
        },
        searchMemberRequestInGroup: (idGroup, payload, search, callback) => {
            dispatch(groupAction.action.searchMemberRequestInGroup(idGroup, payload, search, callback))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestsJoinComponent)