import React, {useState} from "react";
import {Modal} from "antd";
import ModalReportSuccess from "./ModalReportSuccess";

function ModalReport(props) {
    const [isModalReportSuccessVisible, setIsModalReportSuccessVisible] = useState(false);

    const onCancel = () =>{
        props.setVisible()
    }
    const onReport = (type) =>{
        props.setVisible()
        setIsModalReportSuccessVisible(true)
    }
    return(
        <div>
            <Modal centered visible={props.visible} onCancel={()=>{onCancel()}} bodyStyle={{height: "auto"}} width={430} className='wrap-modal-display-liked-post'
                   title={(<div className="wrap-title-modal-display-liked-post">
                       <div></div>
                       <div className="content-title">Report</div>
                       <div className="icon-close" onClick={()=>{onCancel()}}>
                           <svg aria-label="Close" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img"
                                viewBox="0 0 24 24" width="24">
                               <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                     stroke-width="2" x1="21" x2="3" y1="3" y2="21"></line>
                               <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                     stroke-width="2" x1="21" x2="3" y1="21" y2="3"></line>
                           </svg>
                       </div>
                   </div>)}
                   footer={null} closable={false}>
                <div className="wrap-div-modal-display-report-post">
                    <div className="wrap-header-report-modal">Why are you reporting this post?</div>
                    <div className="wrap-item-report-modal" onClick={()=>{onReport(1)}}>
                        <div className="wrap-content">It's spam</div>
                        <div className="wrap-icon">
                            <svg aria-label="chevron" className="_8-yf5 " color="#c7c7c7" fill="#c7c7c7" height="17"
                                 role="img" viewBox="0 0 24 24" width="17">
                                <path
                                    d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
                            </svg></div>
                    </div>
                    <div className="wrap-item-report-modal" onClick={()=>{onReport(2)}}>
                        <div className="wrap-content">Nudity or sexual activity</div>
                        <div className="wrap-icon">
                            <svg aria-label="chevron" className="_8-yf5 " color="#c7c7c7" fill="#c7c7c7" height="17"
                                 role="img" viewBox="0 0 24 24" width="17">
                                <path
                                    d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
                            </svg></div>
                    </div>
                    <div className="wrap-item-report-modal" onClick={()=>{onReport(3)}}>
                        <div className="wrap-content">Hate speech or symbols</div>
                        <div className="wrap-icon">
                            <svg aria-label="chevron" className="_8-yf5 " color="#c7c7c7" fill="#c7c7c7" height="17"
                                 role="img" viewBox="0 0 24 24" width="17">
                                <path
                                    d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
                            </svg></div>
                    </div>
                    <div className="wrap-item-report-modal" onClick={()=>{onReport(4)}}>
                        <div className="wrap-content">Violence or dangerous organizations</div>
                        <div className="wrap-icon">
                            <svg aria-label="chevron" className="_8-yf5 " color="#c7c7c7" fill="#c7c7c7" height="17"
                                 role="img" viewBox="0 0 24 24" width="17">
                                <path
                                    d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
                            </svg></div>
                    </div>
                    <div className="wrap-item-report-modal" onClick={()=>{onReport(5)}}>
                        <div className="wrap-content">Sale of illegal or regulated goods</div>
                        <div className="wrap-icon">
                            <svg aria-label="chevron" className="_8-yf5 " color="#c7c7c7" fill="#c7c7c7" height="17"
                                 role="img" viewBox="0 0 24 24" width="17">
                                <path
                                    d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
                            </svg></div>
                    </div>
                    <div className="wrap-item-report-modal" onClick={()=>{onReport(6)}}>
                        <div className="wrap-content">Bullying or harassment</div>
                        <div className="wrap-icon">
                            <svg aria-label="chevron" className="_8-yf5 " color="#c7c7c7" fill="#c7c7c7" height="17"
                                 role="img" viewBox="0 0 24 24" width="17">
                                <path
                                    d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
                            </svg></div>
                    </div>
                    <div className="wrap-item-report-modal" onClick={()=>{onReport(7)}}>
                        <div className="wrap-content">Intellectual property violation</div>
                        <div className="wrap-icon">
                            <svg aria-label="chevron" className="_8-yf5 " color="#c7c7c7" fill="#c7c7c7" height="17"
                                 role="img" viewBox="0 0 24 24" width="17">
                                <path
                                    d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
                            </svg></div>
                    </div>
                    <div className="wrap-item-report-modal" onClick={()=>{onReport(8)}}>
                        <div className="wrap-content">Suicide or self-injury</div>
                        <div className="wrap-icon">
                            <svg aria-label="chevron" className="_8-yf5 " color="#c7c7c7" fill="#c7c7c7" height="17"
                                 role="img" viewBox="0 0 24 24" width="17">
                                <path
                                    d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
                            </svg></div>
                    </div>
                    <div className="wrap-item-report-modal" onClick={()=>{onReport(9)}}>
                        <div className="wrap-content">Eating disorders</div>
                        <div className="wrap-icon">
                            <svg aria-label="chevron" className="_8-yf5 " color="#c7c7c7" fill="#c7c7c7" height="17"
                                 role="img" viewBox="0 0 24 24" width="17">
                                <path
                                    d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
                            </svg></div>
                    </div>
                    <div className="wrap-item-report-modal" onClick={()=>{onReport(10)}}>
                        <div className="wrap-content">Scam or fraud</div>
                        <div className="wrap-icon">
                            <svg aria-label="chevron" className="_8-yf5 " color="#c7c7c7" fill="#c7c7c7" height="17"
                                 role="img" viewBox="0 0 24 24" width="17">
                                <path
                                    d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
                            </svg></div>
                    </div>
                    <div className="wrap-item-report-modal" onClick={()=>{onReport(11)}}>
                        <div className="wrap-content">False information</div>
                        <div className="wrap-icon">
                            <svg aria-label="chevron" className="_8-yf5 " color="#c7c7c7" fill="#c7c7c7" height="17"
                                 role="img" viewBox="0 0 24 24" width="17">
                                <path
                                    d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
                            </svg></div>
                    </div>
                    <div className="wrap-item-report-modal" onClick={()=>{onReport(12)}}>
                        <div className="wrap-content">I just don't like it</div>
                        <div className="wrap-icon">
                            <svg aria-label="chevron" className="_8-yf5 " color="#c7c7c7" fill="#c7c7c7" height="17"
                                 role="img" viewBox="0 0 24 24" width="17">
                                <path
                                    d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path>
                            </svg></div>
                    </div>
                </div>
            </Modal>
            <ModalReportSuccess userAccountFollowing={props.userAccountFollowing} visible={isModalReportSuccessVisible} setVisible={()=>{setIsModalReportSuccessVisible(false)}} />
        </div>
    )
}
export default ModalReport