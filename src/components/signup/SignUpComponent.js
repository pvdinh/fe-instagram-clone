import React, {useEffect, useState} from "react";
import {FaFacebookF} from "react-icons/all";
import {API_BASE_URL, FACEBOOK_AUTH_URL} from "../../constants";
import {full} from "@cloudinary/base/qualifiers/fontHinting";

function SignUpComponent(props) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [phoneOrEmail, setPhoneOrEmail] = useState("")
    const [fullname, setFullname] = useState("")
    const [checkLogin, setCheckLogin] = useState(false)

    useEffect(() => {
        if (username !== "" && username !== "" && username.split(" ").join("") !== "" && password.split(" ").join("") !== "") {
            setCheckLogin(true)
        } else setCheckLogin(false)
    }, [username, password,phoneOrEmail,fullname])

    const onSubmit = () => {

    }

    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangeFullname = (e) => {
        setFullname(e.target.value)
    }
    const onChangePhoneOrEmail = (e) => {
        setPhoneOrEmail(e.target.value)
    }
    return (
        <div className='instagram-signup-page-wrap'>
            <section className="section-all">
                {/* 1-Role Main */}
                <main className="main" role="main">
                    <div className="wrapper">
                        <article className="article">
                            <div className="content">
                                <div className="login-box">
                                    <div className="header">
                                        <img className="logo"
                                             src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
                                             alt="Instagram"/>
                                    </div>
                                    <h2 className="text-below-logo">Sign up to see photos and videos from your friends.</h2>
                                    <a href={`${FACEBOOK_AUTH_URL}`} className="fb btn-login-fb">
                                        <FaFacebookF /> &nbsp; Login with Facebook
                                    </a>
                                    <div className="wrap-text-or">
                                        <div className="left-text"></div>
                                        <div className="text-or">OR</div>
                                        <div className="right-text"></div>
                                    </div>
                                    {/* Header end */}
                                    <div className="form-wrap">
                                        <form className="form">
                                            <div className="input-box">
                                                <input type="text" id="phoneOrEmail" value={phoneOrEmail} aria-describedby
                                                       onChange={(e) => {
                                                           onChangePhoneOrEmail(e)
                                                       }}
                                                       placeholder="Mobile Number or Email"
                                                       aria-required="true" maxLength={30} autoCapitalize="off"
                                                       autoCorrect="off" name="phoneOrEmail" required/>
                                            </div>
                                            <div className="input-box">
                                                <input type="text" name="fullname" value={fullname} id="fullname"
                                                       onChange={(e) => {
                                                           onChangeFullname(e)
                                                       }}
                                                       placeholder="Full Name" aria-describedby maxLength={30}
                                                       aria-required="true" autoCapitalize="off" autoCorrect="off" />
                                            </div>

                                            <div className="input-box">
                                                <input type="text" name="username" value={username} id="username"
                                                       onChange={(e) => {
                                                           onChangeUsername(e)
                                                       }}
                                                       placeholder="Username" aria-describedby maxLength={30}
                                                       aria-required="true" autoCapitalize="off" autoCorrect="off"/>
                                            </div>

                                            <div className="input-box">
                                                <input type="password" name="password" value={password} id="password"
                                                       onChange={(e) => {
                                                           onChangePassword(e)
                                                       }}
                                                       placeholder="Password" aria-describedby maxLength={30}
                                                       aria-required="true" autoCapitalize="off" autoCorrect="off"
                                                       required/>
                                            </div>
                                            <span className="button-box">
                          {
                              checkLogin ?
                                  <button className="btn" type="button" name="submit" onClick={()=>{onSubmit()}}>Sign up</button> :
                                  <button className="btn-disabled" disabled type="button" name="submit">Sign up</button>
                          }
                        </span>
                                            <a className="forgot">
                                                <p>By signing up, you agree to our <a target="_blank"
                                                                                      href="https://help.instagram.com/581066165581870"
                                                                                      tabIndex="0">Terms</a> , <a
                                                    target="_blank" href="https://help.instagram.com/519522125107875"
                                                    tabIndex="0">Data Policy</a> and
                                                    <a target="_blank"
                                                       href="/legal/cookies/"
                                                       tabIndex="0">Cookies
                                                        Policy</a> .</p>
                                            </a>
                                        </form>
                                    </div>
                                    {/* Form-wrap end */}
                                </div>
                                {/* Login-box end */}
                                <div className="login-box">
                                    <p className="text">Don't have an account?<a href="#">Sign up</a></p>
                                </div>
                                {/* Signup-box end */}
                                <div className="app">
                                    <p>Get the app.</p>
                                    <div className="app-img">
                                        <a href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8">
                                            <img
                                                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/4b70f6fae447.png"/>
                                        </a>
                                        <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26utm_medium%3Dbadge">
                                            <img
                                                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/f06b908907d5.png"/>
                                        </a>
                                    </div>
                                    {/* App-img end*/}
                                </div>
                                {/* App end */}
                            </div>
                            {/* Content end */}
                        </article>
                    </div>
                    {/* Wrapper end */}
                </main>
                {/* 2-Role Footer */}
                <footer className="footer" role="contentinfo">
                    <div className="footer-container">
                        <nav className="footer-nav" role="navigation">
                            <ul>
                                <li><a href>About Us</a></li>
                                <li><a href>Support</a></li>
                                <li><a href>Blog</a></li>
                                <li><a href>Press</a></li>
                                <li><a href>Api</a></li>
                                <li><a href>Jobs</a></li>
                                <li><a href>Privacy</a></li>
                                <li><a href>Terms</a></li>
                                <li><a href>Directory</a></li>
                                <li>
                    <span className="language">Language
                      <select name="language" className="select" onchange="la(this.value)">
                        <option value="#">English</option>
                        <option value="http://ru-instafollow.bitballoon.com">Russian</option>
                      </select>
                    </span>
                                </li>
                            </ul>
                        </nav>
                        <span className="footer-logo">© 2018 Instagram</span>
                    </div>
                    {/* Footer container end */}
                </footer>
            </section>
        </div>
    )
}

export default SignUpComponent