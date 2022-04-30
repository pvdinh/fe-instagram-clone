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
                    <PostComponent type="group" />
                }
            </Route>
            <Route exact path={"/g/:gId/requests"}>
                {
                    <RequestsJoinComponent />
                }
            </Route>
            <Route exact path={"/g/:gId/members"}>
                {
                    <MembershipComponent />
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