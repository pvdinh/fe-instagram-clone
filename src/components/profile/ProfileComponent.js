import React, {useEffect} from "react";
import {GoVerified} from "react-icons/all";
import HavePostsComponents from "./HavePostsComponents";
import HaveNotPostsComponents from "./HaveNotPostsComponents";

function ProfileComponent(props) {

    useEffect(()=>{
        props.getUserProfile(props.match.params.username,()=>{})
    },[])
    useEffect(()=>{
        if(props.userAccountProfile.username !== undefined)
        {
            console.log(props.match.params.username)
        }
        console.log(props.match.params.username)
    },[props.userAccountProfile])
    return(
       <div className="wrap-body-page-profile">
           <div style={{maxWidth:"1100px",margin:"10px auto"}}>
               <main>
                   <section className="bio">
                       <div className="bio__img-block">
                           <a href><img className="bio__img" src={props.currentUserAccountSetting.profilePhoto} alt="profile picture" /></a>
                       </div>
                       <div className="bio__header">
                           <h1 className="bio__account">{props.currentUserAccountSetting.username}</h1>
                           <div className="wrap-setting">
                               <div><span className="bio__verified"><GoVerified /></span></div>
                               <div className="b1">
                                   <div className="b11">
                                       <button className="bio__follow">Edit Profile</button>
                                   </div>
                                   <div className="b12">
                                       <button className="btn-setting">
                                           <svg aria-label="Options" className="_8-yf5 " fill="#262626" height="24" role="img"
                                                viewBox="0 0 48 48" width="24">
                                               <path clip-rule="evenodd"
                                                     d="M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z"
                                                     fill-rule="evenodd"></path>
                                           </svg>
                                       </button>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="bio__stats">
                           <span className="bio__posts stats"><strong>{props.currentUserAccountSetting.posts}</strong> posts</span>
                           <span className="bio_followers stats"><strong>{props.currentUserAccountSetting.followers}</strong> followers</span>
                           <span className="bio__following stats"><strong>{props.currentUserAccountSetting.following}</strong> following</span>
                       </div>
                       <div className="bio_blurb">
                           <h2 className="bio__name">{props.currentUserAccountSetting.displayName}</h2>
                           <h2 className="bio__name">{props.currentUserAccountSetting.description}</h2>
                           <a className="bio__description" href={props.currentUserAccountSetting.website}>
                               {props.currentUserAccountSetting.website}
                           </a>
                       </div>
                   </section>
                   <nav className="wrap-mobile-stats">
                       <ul className="mobile-stats">
                           <li className="mobile-stats__posts stats">
                               <a href><strong>5,097</strong><br />posts</a>
                           </li>
                           <li className="mobile-stats_followers stats">
                               <a href><strong>165M</strong><br />followers</a>
                           </li>
                           <li className="mobile-stats__following stats">
                               <a href><strong>37</strong><br />following</a>
                           </li>
                       </ul>
                   </nav>
                   <section className="tabbed-pane">
                       <nav>
                               {
                                   props.match.params.username === props.userAccountProfile.username ?
                                       <ul className="tabbed-pane__header">
                                           <li>
                                               <a href className="tab-link">
                                                   <div className="wrap-type-post">
                                                       <svg aria-label="" className="_8-yf5 " fill="#262626" height="12" role="img"
                                                            viewBox="0 0 48 48" width="12">
                                                           <path clip-rule="evenodd"
                                                                 d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
                                                                 fill-rule="evenodd"></path>
                                                       </svg>
                                                       <span className="tab-link-text"> Posts</span>
                                                   </div>
                                               </a>
                                           </li>
                                           <li>
                                               <a href className="tab-link">
                                                   <div className="wrap-type-post">
                                                       <svg aria-label="" className="_8-yf5 " fill="#8e8e8e" height="12" role="img"
                                                            viewBox="0 0 48 48" width="12">
                                                           <path
                                                               d="M41 10c-2.2-2.1-4.8-3.5-10.4-3.5h-3.3L30.5 3c.6-.6.5-1.6-.1-2.1-.6-.6-1.6-.5-2.1.1L24 5.6 19.7 1c-.6-.6-1.5-.6-2.1-.1-.6.6-.7 1.5-.1 2.1l3.2 3.5h-3.3C11.8 6.5 9.2 7.9 7 10c-2.1 2.2-3.5 4.8-3.5 10.4v13.1c0 5.7 1.4 8.3 3.5 10.5 2.2 2.1 4.8 3.5 10.4 3.5h13.1c5.7 0 8.3-1.4 10.5-3.5 2.1-2.2 3.5-4.8 3.5-10.4V20.5c0-5.7-1.4-8.3-3.5-10.5zm.5 23.6c0 5.2-1.3 7-2.6 8.3-1.4 1.3-3.2 2.6-8.4 2.6H17.4c-5.2 0-7-1.3-8.3-2.6-1.3-1.4-2.6-3.2-2.6-8.4v-13c0-5.2 1.3-7 2.6-8.3 1.4-1.3 3.2-2.6 8.4-2.6h13.1c5.2 0 7 1.3 8.3 2.6 1.3 1.4 2.6 3.2 2.6 8.4v13zM34.6 25l-9.1 2.8v-3.7c0-.5-.2-.9-.6-1.2-.4-.3-.9-.4-1.3-.2l-11.1 3.4c-.8.2-1.2 1.1-1 1.9.2.8 1.1 1.2 1.9 1l9.1-2.8v3.7c0 .5.2.9.6 1.2.3.2.6.3.9.3.1 0 .3 0 .4-.1l11.1-3.4c.8-.2 1.2-1.1 1-1.9s-1.1-1.2-1.9-1z"></path>
                                                       </svg>
                                                       <span className="tab-link-text"> IGTV</span>
                                                   </div>
                                               </a>
                                           </li>
                                           <li>
                                               <a href className="tab-link">
                                                   <div className="wrap-type-post">
                                                       <svg aria-label="" className="_8-yf5 " fill="#8e8e8e" height="12" role="img"
                                                            viewBox="0 0 48 48" width="12">
                                                           <path
                                                               d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                                                       </svg>
                                                       <span className="tab-link-text"> Saved</span>
                                                   </div>
                                               </a>
                                           </li>
                                           <li>
                                               <a href className="tab-link">
                                                   <div className="wrap-type-post">
                                                       <svg aria-label="" className="_8-yf5 " fill="#8e8e8e" height="12" role="img"
                                                            viewBox="0 0 48 48" width="12">
                                                           <path
                                                               d="M41.5 5.5H30.4c-.5 0-1-.2-1.4-.6l-4-4c-.6-.6-1.5-.6-2.1 0l-4 4c-.4.4-.9.6-1.4.6h-11c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h35c3.3 0 6-2.7 6-6v-30c0-3.3-2.7-6-6-6zm-29.4 39c-.6 0-1.1-.6-1-1.2.7-3.2 3.5-5.6 6.8-5.6h12c3.4 0 6.2 2.4 6.8 5.6.1.6-.4 1.2-1 1.2H12.1zm32.4-3c0 1.7-1.3 3-3 3h-.6c-.5 0-.9-.4-1-.9-.6-5-4.8-8.9-9.9-8.9H18c-5.1 0-9.4 3.9-9.9 8.9-.1.5-.5.9-1 .9h-.6c-1.7 0-3-1.3-3-3v-30c0-1.7 1.3-3 3-3h11.1c1.3 0 2.6-.5 3.5-1.5L24 4.1 26.9 7c.9.9 2.2 1.5 3.5 1.5h11.1c1.7 0 3 1.3 3 3v30zM24 12.5c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6zm0 16.1c-3.6 0-6.6-2.9-6.6-6.6 0-3.6 2.9-6.6 6.6-6.6s6.6 2.9 6.6 6.6c0 3.6-3 6.6-6.6 6.6z"></path>
                                                       </svg>
                                                       <span className="tab-link-text"> Tagged</span>
                                                   </div>
                                               </a>
                                           </li>
                                       </ul>
                                       :

                                       <ul className="tabbed-pane__header__other">
                                           <li>
                                               <a href className="tab-link">
                                                   <div className="wrap-type-post">
                                                       <svg aria-label="" className="_8-yf5 " fill="#262626" height="12" role="img"
                                                            viewBox="0 0 48 48" width="12">
                                                           <path clip-rule="evenodd"
                                                                 d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
                                                                 fill-rule="evenodd"></path>
                                                       </svg>
                                                       <span className="tab-link-text"> Posts</span>
                                                   </div>
                                               </a>
                                           </li>
                                           <li>
                                               <a href className="tab-link">
                                                   <div className="wrap-type-post">
                                                       <svg aria-label="" className="_8-yf5 " fill="#8e8e8e" height="12" role="img"
                                                            viewBox="0 0 48 48" width="12">
                                                           <path
                                                               d="M41 10c-2.2-2.1-4.8-3.5-10.4-3.5h-3.3L30.5 3c.6-.6.5-1.6-.1-2.1-.6-.6-1.6-.5-2.1.1L24 5.6 19.7 1c-.6-.6-1.5-.6-2.1-.1-.6.6-.7 1.5-.1 2.1l3.2 3.5h-3.3C11.8 6.5 9.2 7.9 7 10c-2.1 2.2-3.5 4.8-3.5 10.4v13.1c0 5.7 1.4 8.3 3.5 10.5 2.2 2.1 4.8 3.5 10.4 3.5h13.1c5.7 0 8.3-1.4 10.5-3.5 2.1-2.2 3.5-4.8 3.5-10.4V20.5c0-5.7-1.4-8.3-3.5-10.5zm.5 23.6c0 5.2-1.3 7-2.6 8.3-1.4 1.3-3.2 2.6-8.4 2.6H17.4c-5.2 0-7-1.3-8.3-2.6-1.3-1.4-2.6-3.2-2.6-8.4v-13c0-5.2 1.3-7 2.6-8.3 1.4-1.3 3.2-2.6 8.4-2.6h13.1c5.2 0 7 1.3 8.3 2.6 1.3 1.4 2.6 3.2 2.6 8.4v13zM34.6 25l-9.1 2.8v-3.7c0-.5-.2-.9-.6-1.2-.4-.3-.9-.4-1.3-.2l-11.1 3.4c-.8.2-1.2 1.1-1 1.9.2.8 1.1 1.2 1.9 1l9.1-2.8v3.7c0 .5.2.9.6 1.2.3.2.6.3.9.3.1 0 .3 0 .4-.1l11.1-3.4c.8-.2 1.2-1.1 1-1.9s-1.1-1.2-1.9-1z"></path>
                                                       </svg>
                                                       <span className="tab-link-text"> IGTV</span>
                                                   </div>
                                               </a>
                                           </li>
                                       </ul>
                               }

                       </nav>
                       {
                           props.listPostDetails.length > 0 ?
                               <HavePostsComponents listPostDetails={props.listPostDetails} currentUserAccountSetting={props.currentUserAccountSetting} />
                               :
                               <HaveNotPostsComponents />
                       }
                       <div className="tabbed-pane__igtv" />
                       <div className="tabbed-pane__tagged" />
                   </section>
               </main>
               <footer className="site-footer">
                   <nav>
                       <ul>
                           <li>
                               <a href="https://about.instagram.com/about-us" rel="nofollow noopener noreferrer" target="_blank">About</a>
                           </li>
                           <li>
                               <a href="https://help.instagram.com/">Help</a>
                           </li>
                           <li>
                               <a href="https://instagram-press.com/">Press</a>
                           </li>
                           <li><a href="/developer/">API</a></li>
                           <li><a href="/about/jobs/">Jobs</a></li>
                           <li>
                               <a href="/legal/privacy/">Privacy</a>
                           </li>
                           <li>
                               <a href="/legal/terms/">Terms</a>
                           </li>
                           <li>
                               <a href="/explore/locations/">Locations</a>
                           </li>
                           <li>
                               <a href="/directory/profiles/">Top Accounts</a>
                           </li>
                           <li>
                               <a href="/directory/suggested/kimkardashian">Suggested Accounts</a>
                           </li>
                           <li>
                               <a href="/directory/hashtags/">Hashtags</a>
                           </li>
                           <li>
                <span className="site-footer__language">Language<select aria-label="Switch Display Language">
                    <option value="af">Afrikaans</option>
                    <option value="cs">Čeština</option>
                    <option value="da">Dansk</option>
                    <option value="de">Deutsch</option>
                    <option value="el">Ελληνικά</option>
                    <option value="en">English</option>
                    <option value="es">Español (España)</option>
                    <option value="es-la">Español</option>
                    <option value="fi">Suomi</option>
                    <option value="fr">Français</option>
                    <option value="id">Bahasa Indonesia</option>
                    <option value="it">Italiano</option>
                    <option value="ja">日本語</option>
                    <option value="ko">한국어</option>
                    <option value="ms">Bahasa Melayu</option>
                    <option value="nb">Norsk</option>
                    <option value="nl">Nederlands</option>
                    <option value="pl">Polski</option>
                    <option value="pt-br">Português (Brasil)</option>
                    <option value="pt">Português (Portugal)</option>
                    <option value="ru">Русский</option>
                    <option value="sv">Svenska</option>
                    <option value="th">ภาษาไทย</option>
                    <option value="tl">Filipino</option>
                    <option value="tr">Türkçe</option>
                    <option value="zh-cn">中文(简体)</option>
                    <option value="zh-tw">中文(台灣)</option>
                    <option value="bn">বাংলা</option>
                    <option value="gu">ગુજરાતી</option>
                    <option value="hi">हिन्दी</option>
                    <option value="hr">Hrvatski</option>
                    <option value="hu">Magyar</option>
                    <option value="kn">ಕನ್ನಡ</option>
                    <option value="ml">മലയാളം</option>
                    <option value="mr">मराठी</option>
                    <option value="ne">नेपाली</option>
                    <option value="pa">ਪੰਜਾਬੀ</option>
                    <option value="si">සිංහල</option>
                    <option value="sk">Slovenčina</option>
                    <option value="ta">தமிழ்</option>
                    <option value="te">తెలుగు</option>
                    <option value="vi">Tiếng Việt</option>
                    <option value="zh-hk">中文(香港)</option>
                    <option value="bg">Български</option>
                    <option value="fr-ca">Français (Canada)</option>
                    <option value="ro">Română</option>
                    <option value="sr">Српски</option>
                    <option value="uk">Українська</option>
                  </select></span>
                           </li>
                       </ul>
                   </nav>
                   <span className="copyright">© 2020 Instagram from Facebook</span>
               </footer>
           </div>
       </div>
    )
}
export default ProfileComponent