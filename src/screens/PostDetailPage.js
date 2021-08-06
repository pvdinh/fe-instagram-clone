import {connect} from "react-redux";
import PostDetailComponentPage from "../components/detail-post/PostDetailComponentPage";
import postActions from "../redux/actions/postActions";

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
        getPostInformationFromPId:(pId,callback)=>{
            dispatch(postActions.action.getPostInformationFromPId(pId,callback))
        },
        getCommentPost: (pId, callback) => {
            dispatch(postActions.action.getCommentPost(pId, callback))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostDetailComponentPage)