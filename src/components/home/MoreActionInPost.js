import React, {useState} from "react";
import {Modal} from "antd";
import homeActions from "../../redux/actions/homeActions";
import {connect} from "react-redux";

function MoreActionInPost(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);



    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const endFollowing = (userFollowingId)=>{
        props.endFollowing(userFollowingId)
        setIsModalVisible(false)
    }
    return (
        <>
            <button className="post__more-options" onClick={()=>{showModal()}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6.5" cy="11.5" r="1.5" fill="var(--text-dark)"/>
                    <circle cx="12" cy="11.5" r="1.5" fill="var(--text-dark)"/>
                    <circle cx="17.5" cy="11.5" r="1.5" fill="var(--text-dark)"/>
                </svg>
            </button>
            <Modal centered visible={isModalVisible} className='instagram-home-page-wrap' onCancel={handleCancel} footer={null} closable={false}>
                <button className='options-dialog__button' style={{borderBottom:"1px solid var(--border)"}} onClick={()=>{endFollowing(props.userAccountFollowing.id)}}>Unfollow</button>
                <button className='options-dialog__button' style={{borderBottom:"1px solid var(--border)"}}>Unfollow</button>
                <button className='options-dialog__button'>Unfollow</button>
            </Modal>
        </>
    )
}
function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        endFollowing: (userFollowingId) => {
            dispatch(homeActions.action.endFollowing(userFollowingId))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoreActionInPost)