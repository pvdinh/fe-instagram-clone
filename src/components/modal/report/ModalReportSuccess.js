import React, {useState} from "react";
import {Modal} from "antd";
import ModalConfirmUnFollow from "../ModalConfirmUnFollow";

function ModalReportSuccess(props) {

    const [isModalUnfollowVisible,setIsModalUnfollowVisible] = useState(false)


    const onCancel = () =>{
        props.setVisible()
    }
    return(
        <div>
            <Modal centered visible={props.visible} onCancel={()=>{onCancel()}} width={430} className='wrap-modal-report-post-success'
                   title={null}
                   footer={null} closable={false}>
                <div className="wrap-modal-report-post-success-body">
                    <div className="wrap-top-modal">
                        <div className="w1">
                            <svg aria-label="checkmark" className="_8-yf5 " color="#58c322" fill="#58c322" height="48"
                                 role="img" viewBox="0 0 24 24" width="48">
                                <path
                                    d="M12.001.504a11.5 11.5 0 1011.5 11.5 11.513 11.513 0 00-11.5-11.5zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5zM16.293 8.3l-5.792 5.788-2.794-2.796a1 1 0 10-1.414 1.414l3.5 3.503a1 1 0 001.414.001l6.5-6.495A1 1 0 0016.293 8.3z"></path>
                            </svg>
                        </div>
                        <div className="w2">Thanks for letting us know</div>
                        <div className="w3">Your feedback is important in helping us keep the Instagram community safe.</div>
                    </div>
                    <div className="wrap-item-report-success-modal" onClick={()=>{}}>
                        <div className="wrap-content" onClick={()=>{onCancel();setIsModalUnfollowVisible(true)}}>Unfollow {props.userAccountFollowing.username}?</div>
                        <div className="wrap-icon">
                            <svg aria-label="chevron" className="_8-yf5 " color="#c7c7c7" fill="#c7c7c7" height="17"
                                 role="img" viewBox="0 0 24 24" width="17">
                                <path
                                    d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
                            </svg></div>
                    </div>
                    <div className="wrap-btn">
                        <button className="btn-close" onClick={()=>{onCancel()}}>Close</button>
                    </div>
                </div>
            </Modal>

            <ModalConfirmUnFollow userAccountFollowing={props.userAccountFollowing} visible={isModalUnfollowVisible} setVisible={()=>{setIsModalUnfollowVisible(false)}} />
        </div>
    )
}
export default ModalReportSuccess