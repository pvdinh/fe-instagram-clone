import React, {useState} from "react";
import ModalFeedback from "../modal/feedback/ModalFeedback";

function ErrorPage() {
    const [isModalFeedbackVisible,setIsModalFeedbackVisible] = useState(false)


    return(
        <div className="wrap-error-page">
            <div className="body-error-page">
                <div className="beg1">Sorry, this page isn't available.</div>
                <div className="beg2">The link you followed may be broken, or the page may have been removed. <a href="/">Go back to Instagram.</a></div>
            </div>
            <div className="footer-error-page">
                <footer className="site-footer">
                    <nav>
                        <ul>
                            <li><a onClick={()=>{setIsModalFeedbackVisible(true)}}>Feedback</a></li>
                            <li>
                                <a href="#" rel="nofollow noopener noreferrer" target="_blank">About</a>
                            </li>
                            <li>
                                <a href="#" target="_blank">Help</a>
                            </li>
                            <li>
                                <a href="#" target="_blank">Press</a>
                            </li>
                            <li><a href="#">API</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li>
                                <a href="#">Privacy</a>
                            </li>
                            <li>
                                <a href="#">Terms</a>
                            </li>
                            <li>
                                <a href="#">Locations</a>
                            </li>
                            <li>
                                <a href="#">Top Accounts</a>
                            </li>
                            <li>
                                <a href="#">Suggested Accounts</a>
                            </li>
                            <li>
                                <a href="#">Hashtags</a>
                            </li>
                            <li>
                                <a href="#">Language</a>
                            </li>
                        </ul>
                    </nav>
                    <span className="copyright">© 2021 Instagram from Facebook</span>
                </footer>
            </div>
            <ModalFeedback visible={isModalFeedbackVisible} setVisible={()=>{setIsModalFeedbackVisible(false)}} />
        </div>
    )
}
export default ErrorPage