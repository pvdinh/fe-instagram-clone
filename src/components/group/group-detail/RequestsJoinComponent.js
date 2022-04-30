import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Input} from "antd";
import ItemUserRequest from "./ItemUserRequest";


function RequestsJoinComponent(props) {

    return (
        <div className="wrap-list-requests-user">
            <div className="list-requests-user">
                <div className="label-request-member">Requests membership</div>
                <Input size="large" placeholder="Search user" />
                {
                    [1,1,1,1,1].map((value,index)=>(
                        <ItemUserRequest type="request" />
                    ))
                }
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestsJoinComponent)