import React, {useEffect} from "react";
import PostComponent from "./PostComponent";
import UserProfileComponent from "./UserProfileComponent";
function HomeComponent() {
    useEffect(()=>{
        // Getting the scrollbar width to adjust the header alignment
        const content = document.querySelector('.main-container');
        const scrollbarWidth = content.offsetWidth - content.clientWidth;
// Setting the property when the page load
        document.onload = setScrollbarWidth(scrollbarWidth);
        function setScrollbarWidth(width) {
            document.documentElement.style.setProperty('--scrollbar-width', `${width}px`);
        }
        const toggleThemeBtn = document.querySelector('.header__theme-button');
        document.onload = setInitialTheme(localStorage.getItem('theme'));
        function setInitialTheme(themeKey) {
            if(themeKey === 'dark') {
                document.documentElement.classList.add('darkTheme');
            }
            else {
                document.documentElement.classList.remove('darkTheme');
            }
        }

// Toggle theme button
        toggleThemeBtn.addEventListener('click', () => {
            // Toggle root class
            document.documentElement.classList.toggle('darkTheme');

            // Saving current theme on LocalStorage
            if(document.documentElement.classList.contains('darkTheme')) {
                localStorage.setItem('theme', 'dark');
            }
            else {
                localStorage.setItem('theme', 'light');
            }
        });
    })
    return(
        <div>
            <main className="main-container">
                <section className="content-container">
                    <div className="content">
                        <div className="stories">
                            <button className="stories__left-button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="var(--primary)"
                                          d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z"></path>
                                </svg>
                            </button>
                            <div className='stories__content'>
                                <button className="story story--has-story">
                                    <div className="story__avatar">
                                        <div className="story__border">
                                            <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                                                <circle r="31" cy="32" cx="32"/>
                                                <defs>
                                                    <linearGradient y2="0" x2="1" y1="1" x1="0" id="--story-gradient">
                                                        <stop offset="0" stop-color="#f09433"/>
                                                        <stop offset="0.25" stop-color="#e6683c"/>
                                                        <stop offset="0.5" stop-color="#dc2743"/>
                                                        <stop offset="0.75" stop-color="#cc2366"/>
                                                        <stop offset="1" stop-color="#bc1888"/>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="story__picture">
                                            <img src="https://res.cloudinary.com/dinhpv/image/upload/v1624981802/instagram-clone/test_zmmdlh.jpg" alt="User Picture" />
                                        </div>
                                    </div>
                                    <span className="story__user">usernick1</span>
                                </button>
                                <button className="story">
                                    <div className="story__avatar">
                                        <div className="story__border">
                                            <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                                                <circle r="31" cy="32" cx="32"/>
                                                <defs>
                                                    <linearGradient y2="0" x2="1" y1="1" x1="0" id="--story-gradient">
                                                        <stop offset="0" stop-color="#f09433"/>
                                                        <stop offset="0.25" stop-color="#e6683c"/>
                                                        <stop offset="0.5" stop-color="#dc2743"/>
                                                        <stop offset="0.75" stop-color="#cc2366"/>
                                                        <stop offset="1" stop-color="#bc1888"/>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="story__picture">
                                            <img src="https://res.cloudinary.com/dinhpv/image/upload/v1624981802/instagram-clone/test_zmmdlh.jpg" alt="User Picture" />
                                        </div>
                                    </div>
                                    <span className="story__user">usernick1</span>
                                </button>
                                <button className="story story--has-story">
                                    <div className="story__avatar">
                                        <div className="story__border">
                                            <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                                                <circle r="31" cy="32" cx="32"/>
                                                <defs>
                                                    <linearGradient y2="0" x2="1" y1="1" x1="0" id="--story-gradient">
                                                        <stop offset="0" stop-color="#f09433"/>
                                                        <stop offset="0.25" stop-color="#e6683c"/>
                                                        <stop offset="0.5" stop-color="#dc2743"/>
                                                        <stop offset="0.75" stop-color="#cc2366"/>
                                                        <stop offset="1" stop-color="#bc1888"/>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="story__picture">
                                            <img src="https://res.cloudinary.com/dinhpv/image/upload/v1624981802/instagram-clone/test_zmmdlh.jpg" alt="User Picture" />
                                        </div>
                                    </div>
                                    <span className="story__user">usernick1</span>
                                </button>
                                <button className="story">
                                    <div className="story__avatar">
                                        <div className="story__border">
                                            <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                                                <circle r="31" cy="32" cx="32"/>
                                                <defs>
                                                    <linearGradient y2="0" x2="1" y1="1" x1="0" id="--story-gradient">
                                                        <stop offset="0" stop-color="#f09433"/>
                                                        <stop offset="0.25" stop-color="#e6683c"/>
                                                        <stop offset="0.5" stop-color="#dc2743"/>
                                                        <stop offset="0.75" stop-color="#cc2366"/>
                                                        <stop offset="1" stop-color="#bc1888"/>
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className="story__picture">
                                            <img src="https://res.cloudinary.com/dinhpv/image/upload/v1624981802/instagram-clone/test_zmmdlh.jpg" alt="User Picture" />
                                        </div>
                                    </div>
                                    <span className="story__user">usernick1</span>
                                </button>
                            </div>
                            <button className="stories__right-button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="var(--primary)"
                                          d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path>
                                </svg>
                            </button>
                        </div>
                        <PostComponent />
                    </div>

                    <section className="side-menu">
                        <UserProfileComponent />

                        <div className="side-menu__suggestions-section">
                            <div className="side-menu__suggestions-header">
                                <h2>Suggestions for You</h2>
                                <button>See All</button>
                            </div>
                            <div className="side-menu__suggestions-content">
                                <div className="side-menu__suggestion">
                                    <a href="#" className="side-menu__suggestion-avatar">
                                        <img src="https://res.cloudinary.com/dinhpv/image/upload/v1624981802/instagram-clone/test_zmmdlh.jpg" alt="User Picture"/>
                                    </a>
                                    <div className="side-menu__suggestion-info">
                                        <a href="#">usernick16</a>
                                        <span>Followed by user1, user2 and 9 others</span>
                                    </div>
                                    <button className="side-menu__suggestion-button">Follow</button>
                                </div>
                                <div className="side-menu__suggestion">
                                    <a href="#" className="side-menu__suggestion-avatar">
                                        <img src="https://res.cloudinary.com/dinhpv/image/upload/v1624981802/instagram-clone/test_zmmdlh.jpg" alt="User Picture"/>
                                    </a>
                                    <div className="side-menu__suggestion-info">
                                        <a href="#">usernick17</a>
                                        <span>Followed by user1, user2 and 3 others</span>
                                    </div>
                                    <button className="side-menu__suggestion-button">Follow</button>
                                </div>
                                <div className="side-menu__suggestion">
                                    <a href="#" className="side-menu__suggestion-avatar">
                                        <img src="https://res.cloudinary.com/dinhpv/image/upload/v1624981802/instagram-clone/test_zmmdlh.jpg" alt="User Picture"/>
                                    </a>
                                    <div className="side-menu__suggestion-info">
                                        <a href="#">usernick18</a>
                                        <span>Followed by user1 and 9 others</span>
                                    </div>
                                    <button className="side-menu__suggestion-button">Follow</button>
                                </div>
                                <div className="side-menu__suggestion">
                                    <a href="#" className="side-menu__suggestion-avatar">
                                        <img src="https://res.cloudinary.com/dinhpv/image/upload/v1624981802/instagram-clone/test_zmmdlh.jpg" alt="User Picture"/>
                                    </a>
                                    <div className="side-menu__suggestion-info">
                                        <a href="#">usernick19</a>
                                        <span>Followed by user1 and 3 others</span>
                                    </div>
                                    <button className="side-menu__suggestion-button">Follow</button>
                                </div>
                                <div className="side-menu__suggestion">
                                    <a href="#" className="side-menu__suggestion-avatar">
                                        <img src="https://res.cloudinary.com/dinhpv/image/upload/v1624981802/instagram-clone/test_zmmdlh.jpg" alt="User Picture"/>
                                    </a>
                                    <div className="side-menu__suggestion-info">
                                        <a href="#">usernick20</a>
                                        <span>Followed by user1 and 6 others</span>
                                    </div>
                                    <button className="side-menu__suggestion-button">Follow</button>
                                </div>
                            </div>
                        </div>

                        <div className="side-menu__footer">
                            <div className="side-menu__footer-links">
                                <ul className="side-menu__footer-list">
                                    <li className="side-menu__footer-item">
                                        <a className="side-menu__footer-link" href="#">About</a>
                                    </li>
                                    <li className="side-menu__footer-item">
                                        <a className="side-menu__footer-link" href="#">Help</a>
                                    </li>
                                    <li className="side-menu__footer-item">
                                        <a className="side-menu__footer-link" href="#">Press</a>
                                    </li>
                                    <li className="side-menu__footer-item">
                                        <a className="side-menu__footer-link" href="#">API</a>
                                    </li>
                                    <li className="side-menu__footer-item">
                                        <a className="side-menu__footer-link" href="#">Jobs</a>
                                    </li>
                                    <li className="side-menu__footer-item">
                                        <a className="side-menu__footer-link" href="#">Privacy</a>
                                    </li>
                                    <li className="side-menu__footer-item">
                                        <a className="side-menu__footer-link" href="#">Terms</a>
                                    </li>
                                    <li className="side-menu__footer-item">
                                        <a className="side-menu__footer-link" href="#">Locations</a>
                                    </li>
                                    <li className="side-menu__footer-item">
                                        <a className="side-menu__footer-link" href="#">Top Accounts</a>
                                    </li>
                                    <li className="side-menu__footer-item">
                                        <a className="side-menu__footer-link" href="#">Hashtag</a>
                                    </li>
                                    <li className="side-menu__footer-item">
                                        <a className="side-menu__footer-link" href="#">Language</a>
                                    </li>
                                </ul>
                            </div>

                            <span className="side-menu__footer-copyright">&copy; 2021 instagram from facebook</span>
                        </div>
                    </section>
                </section>
            </main>
            <nav className="navbar">
                <a href="#" className="navbar__button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.45307 11.751L11.9773 2.02175L21.5015 11.751C21.7906 12.0463 21.9545 12.4468 21.9545 12.8711V20.4556C21.9545 20.7747 21.7037 21 21.4427 21H15.964C15.713 21 15.4721 20.7849 15.4721 20.476V15.8886C15.4721 13.9497 13.9267 12.34 11.9773 12.34C10.0279 12.34 8.48244 13.9497 8.48244 15.8886V20.476C8.48244 20.7849 8.24157 21 7.99053 21H2.51187C2.25085 21 2 20.7747 2 20.4556V12.8711C2 12.4468 2.16397 12.0463 2.45307 11.751Z"
                            stroke="var(--text-dark)" stroke-width="2"/>
                    </svg>
                </a>
                <a href="#" className="navbar__button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M21.669 21.6543C21.8625 21.4622 21.863 21.1494 21.6703 20.9566L17.3049 16.5913C18.7912 14.9327 19.7017 12.7525 19.7017 10.3508C19.7017 5.18819 15.5135 1 10.3508 1C5.18819 1 1 5.18819 1 10.3508C1 15.5135 5.18819 19.7017 10.3508 19.7017C12.7624 19.7017 14.9475 18.7813 16.606 17.2852L20.9739 21.653C21.1657 21.8449 21.4765 21.8454 21.669 21.6543ZM1.9843 10.3508C1.9843 5.7394 5.7394 1.9843 10.3508 1.9843C14.9623 1.9843 18.7174 5.7394 18.7174 10.3508C18.7174 14.9623 14.9623 18.7174 10.3508 18.7174C5.7394 18.7174 1.9843 14.9623 1.9843 10.3508Z"
                              fill="var(--text-dark)" stroke="var(--text-dark)" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                </a>
                <a href="#" className="navbar__button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M18 2.8H7C5.23269 2.8 3.8 4.23269 3.8 6V17C3.8 18.7673 5.23269 20.2 7 20.2H18C19.7673 20.2 21.2 18.7673 21.2 17V6C21.2 4.23269 19.7673 2.8 18 2.8ZM7 1C4.23858 1 2 3.23858 2 6V17C2 19.7614 4.23858 22 7 22H18C20.7614 22 23 19.7614 23 17V6C23 3.23858 20.7614 1 18 1H7Z"
                              fill="var(--text-dark)"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22 7.99995H3V6.19995H22V7.99995Z"
                              fill="var(--text-dark)"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M10 6.99989L6 1.99989L7.57349 1.12573L11.5735 6.12573L10 6.99989Z"
                              fill="var(--text-dark)"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M16.5 6.99989L12.5 1.99989L14.0735 1.12573L18.0735 6.12573L16.5 6.99989Z"
                              fill="var(--text-dark)"/>
                        <path
                            d="M15.75 13.0671C16.0833 13.2595 16.0833 13.7407 15.75 13.9331L10.5 16.9642C10.1667 17.1566 9.75 16.9161 9.75 16.5312L9.75 10.469C9.75 10.0841 10.1667 9.84354 10.5 10.036L15.75 13.0671Z"
                            fill="var(--text-dark)"/>
                    </svg>
                </a>
                <a href="#" className="navbar__button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M17.6007 7.94185H6.47927C5.84559 7.94185 5.32113 8.43455 5.2816 9.06699L4.80842 16.638C4.6573 19.0559 6.57759 21.0999 9.00024 21.0999H15.0797C17.5023 21.0999 19.4226 19.0559 19.2715 16.638L18.7983 9.06699C18.7588 8.43455 18.2343 7.94185 17.6007 7.94185ZM6.47927 6.14185C4.89508 6.14185 3.58393 7.37361 3.48511 8.95471L3.01192 16.5257C2.79604 19.9799 5.53931 22.9 9.00024 22.9H15.0797C18.5406 22.9 21.2839 19.9799 21.068 16.5257L20.5948 8.95471C20.496 7.37361 19.1849 6.14185 17.6007 6.14185H6.47927Z"
                              fill="var(--text-dark)"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M12.2761 2.8C11.0812 2.8 10.1125 3.76867 10.1125 4.96359V6.1419H8.3125V4.96359C8.3125 2.77456 10.0871 1 12.2761 1C14.4651 1 16.2397 2.77456 16.2397 4.96359V6.1419H14.4397V4.96359C14.4397 3.76867 13.471 2.8 12.2761 2.8Z"
                              fill="var(--text-dark)"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M12.2757 12.3118C13.4706 12.3118 14.4393 11.3431 14.4393 10.1482L14.4393 9.91256C14.4393 9.41551 14.8422 9.01256 15.3393 9.01256C15.8363 9.01256 16.2393 9.41551 16.2393 9.91256L16.2393 10.1482C16.2393 12.3373 14.4647 14.1118 12.2757 14.1118C10.0866 14.1118 8.31208 12.3373 8.31208 10.1482L8.31208 9.91257C8.31208 9.41551 8.71502 9.01257 9.21208 9.01257C9.70913 9.01257 10.1121 9.41551 10.1121 9.91257L10.1121 10.1482C10.1121 11.3431 11.0807 12.3118 12.2757 12.3118Z"
                              fill="var(--text-dark)"/>
                    </svg>
                </a>
                <button className="navbar__button profile-button">
                    <div className="profile-button__border"></div>
                    <div className="profile-button__picture">
                        <img src="https://res.cloudinary.com/dinhpv/image/upload/v1624981802/instagram-clone/test_zmmdlh.jpg" alt="User Picture"/>
                    </div>
                </button>
            </nav>
        </div>
    )
}
export default HomeComponent