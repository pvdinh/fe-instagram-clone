import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Route, Switch, Redirect, useHistory} from "react-router-dom";
import HavePostsComponents from "./HavePostsComponents";
import HaveNotPostsComponents from "./HaveNotPostsComponents";


function RouteTypeOfPost(props) {

    return (
        <Switch>
            <Route exact path={"/:username"}>
                {
                    props.listPostDetails.length > 0 ?
                        <HavePostsComponents listPostDetails={props.listPostDetails}
                                             currentUserAccountSetting={props.currentUserAccountSetting}/>
                        :
                        <HaveNotPostsComponents/>
                }
            </Route>
            <Route exact path={"/:username/saved"}>
                {
                    props.listSavedPostDetails.length > 0 ?
                        <HavePostsComponents listPostDetails={props.listSavedPostDetails}
                                             currentUserAccountSetting={props.currentUserAccountSetting}/>
                        :
                        <HaveNotPostsComponents/>
                }
            </Route>
            <Route exact path={"/:username/igtv"}>
                <div>igtv</div>
            </Route>
            <Route exact path={"/:username/tagged"}>
                <div>tagged</div>
            </Route>

        </Switch>
    )
}

function mapStateToProps(state) {
    return {
        userAccountProfile: state.home.userAccountProfile,
        currentUserAccountSetting: state.profile.currentUserAccountSetting,
        listPostDetails: state.profile.listPostDetails,
        listSavedPostDetails: state.profile.listSavedPostDetails,
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteTypeOfPost)