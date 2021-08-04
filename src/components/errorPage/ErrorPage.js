import React from "react";

function ErrorPage() {
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
                            <li>
                                <a href="https://about.instagram.com/about-us" rel="nofollow noopener noreferrer" target="_blank">About</a>
                            </li>
                            <li>
                                <a href="https://help.instagram.com/" target="_blank">Help</a>
                            </li>
                            <li>
                                <a href="https://instagram-press.com/" target="_blank">Press</a>
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
        </div>
    )
}
export default ErrorPage