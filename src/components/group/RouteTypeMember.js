import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Route, Switch, Redirect, useHistory} from "react-router-dom";
import PostComponent from "../home/PostComponent";
import RequestsJoinComponent from "./group-detail/RequestsJoinComponent";
import MembershipComponent from "./group-detail/MembershipComponent";


function RouteTypeMember(props) {

    return (
        <Switch>
            <Route exact path={"/g/:gId"}>
                {
                    <PostComponent type="group-child" idGroup={props.idGroup} />
                }
            </Route>
            <Route exact path={"/g/:gId/requests"}>
                {
                    <RequestsJoinComponent idGroup={props.idGroup} />
                }
            </Route>
            <Route exact path={"/g/:gId/members"}>
                {
                    <MembershipComponent idGroup={props.idGroup} />
                }
            </Route>
        </Switch>
    )
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteTypeMember)