import {connect} from "react-redux";
import PostDetailComponentPage from "../components/detail-post/PostDetailComponentPage";
import postActions from "../redux/actions/postActions";
import homeActions from "../redux/actions/homeActions";

function mapStateToProps(state) {
    return {
        userAccountProfile: state.home.userAccountProfile,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        likePostInPostDetail: (pId) => {
            dispatch(postActions.action.likePostInPostDetail(pId))
        },
        unlikePostInPostDetail: (pId) => {
            dispatch(postActions.action.unlikePostInPostDetail(pId))
        },
        commentPost: (data, callback) => {
            dispatch(postActions.action.commentPost(data, callback))
        },
        changePrivacyPost: (data, callback) => {
            dispatch(postActions.action.changePrivacyPost(data, callback))
        },
        getPostInformationFromPId:(pId,callback)=>{
            dispatch(postActions.action.getPostInformationFromPId(pId,callback))
        },
        getCommentPost: (pId, callback) => {
            dispatch(postActions.action.getCommentPost(pId, callback))
        },
        checkSavedPost: (pId, callback) => {
            dispatch(postActions.action.checkSavedPost(pId, callback))
        },
        beginSavePost: (pId, callback) => {
            dispatch(postActions.action.beginSavePost(pId, callback))
        },
        endSavePost: (pId, callback) => {
            dispatch(postActions.action.endSavePost(pId, callback))
        },
        getUserAccountProfile: (callback) => {
            dispatch(homeActions.action.getUserAccountProfile(callback))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostDetailComponentPage)