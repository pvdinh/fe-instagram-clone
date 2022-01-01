import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Route, Switch, Redirect, useHistory} from "react-router-dom";
import HavePostsComponents from "./HavePostsComponents";
import HaveNotPostsComponents from "./HaveNotPostsComponents";
import InfiniteScroll from "react-infinite-scroll-component";


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
            <Route exact path={"/:username/video"}>
                {
                    props.listPostVideos.length > 0 ?
                        <InfiniteScroll
                            dataLength={props.listPostVideos.length}
                            next={()=>{props.fetchMorePostVideo()}}
                            hasMore={true}
                        >
                            <HavePostsComponents listPostDetails={props.listPostVideos} currentPage={props.currentPage} size={props.size}
                                                 currentUserAccountSetting={props.currentUserAccountSetting}/>
                        </InfiniteScroll>
                        :
                        <HaveNotPostsComponents/>
                }
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
        listPostVideos: state.profile.listPostVideos,
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteTypeOfPost)