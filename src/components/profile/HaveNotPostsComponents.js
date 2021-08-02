import React from "react";

function HaveNotPostsComponents() {
    return(
        <div className="tabbed-pane__have_not_posts">
            <div>
                <img src="https://www.instagram.com/static/images/mediaUpsell.jpg/6efc710a1d5a.jpg" alt="image" />
            </div>
            <div className="wrap-right">
                <div className="right-center">
                    <div className="r1">
                        Start capturing and sharing your moments.
                    </div>
                    <div className="r2">
                        Get the app to share your first photo or video.
                    </div>
                    <div className="r3">
                        <div>
                            <a href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.profilePage.badge&mt=8&vt=li">
                                <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="App Store" />
                            </a>
                        </div>
                        <div>
                            <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DprofilePage%26ig_mid%3D058E033F-15DA-403E-9C0C-CAF1179541DC%26utm_content%3Dli%26utm_medium%3Dbadge">
                                <img alt="Google Play" src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HaveNotPostsComponents