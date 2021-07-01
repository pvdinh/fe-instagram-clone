import React, {useEffect} from "react";
import PostComponent from "./PostComponent";
import UserProfileComponent from "./UserProfileComponent";
function HomeComponent() {
    useEffect(()=>{
        // Elements
        const btnTheme = document.getElementById('btnTheme');
        const sun = document.getElementById('sun');
        const moon = document.getElementById('moon');
// Set Initial Theme based on localStorage
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme == 'dark') {
            document.documentElement.classList.add('darkMode');
            sun.style.display = 'block';
            moon.style.display = 'none';
        }
        else {
            document.documentElement.classList.remove('darkMode');
            sun.style.display = 'none';
            moon.style.display = 'block';
        }
//  Switch Theme
        btnTheme.addEventListener('click', () => {
            let theme;
            document.documentElement.classList.toggle('darkMode');

            // Save Theme on localStorage
            if(document.documentElement.classList.contains('darkMode')) {
                theme = 'dark';
                sun.style.display = 'block';
                moon.style.display = 'none';
            }
            else {
                theme = 'light';
                sun.style.display = 'none';
                moon.style.display = 'block';
            }

            localStorage.setItem('theme', theme);
        })
    })
    return(
        <div>
            <main className="page">
                <section>
                    <div className="content">
                        <div className="stories">
                            <button className="story">
            <span className="avatar">
              <img
                  src="https://res.cloudinary.com/dinhpv/image/upload/v1624981802/instagram-clone/test_zmmdlh.jpg"
                  alt="User"
              />
            </span>
                                <span className="name">user-story</span>
                            </button>
                            <button className="story">
            <span className="avatar">
              <img
                  src="https://res.cloudinary.com/dinhpv/image/upload/v1624981802/instagram-clone/test_zmmdlh.jpg"
                  alt="User"
              />
            </span>
                                <span className="name">user-story</span>
                            </button>
                            <button className="story">
            <span className="avatar">
              <img
                  src="https://res.cloudinary.com/dinhpv/image/upload/v1624981802/instagram-clone/test_zmmdlh.jpg"
                  alt="User"
              />
            </span>
                                <span className="name">user-story</span>
                            </button>
                            <button className="story">
            <span className="avatar">
              <img
                  src="https://res.cloudinary.com/dinhpv/image/upload/v1624981802/instagram-clone/test_zmmdlh.jpg"
                  alt="User"
              />
            </span>
                                <span className="name">user-story</span>
                            </button>
                            <button className="story">
            <span className="avatar">
              <img
                  src="https://res.cloudinary.com/dinhpv/image/upload/v1624981802/instagram-clone/test_zmmdlh.jpg"
                  alt="User"
              />
            </span>
                                <span className="name">user-story</span>
                            </button>
                            <button className="story">
            <span className="avatar">
              <img
                  src="https://res.cloudinary.com/dinhpv/image/upload/v1624981802/instagram-clone/test_zmmdlh.jpg"
                  alt="User"
              />
            </span>
                                <span className="name">user-story</span>
                            </button>
                        </div>
                        <PostComponent />
                    </div>
                    <div className="sidebar">
                        <UserProfileComponent />
                        <div className="suggestions">
                            <h3>Suggestions for you</h3>
                            <div className="profiles">
                                <div className="profile">
                                    <div className="avatar">
                                        <img
                                            src="https://res.cloudinary.com/dinhpv/image/upload/v1624981802/instagram-clone/test_zmmdlh.jpg"
                                            alt="User"
                                        />
                                    </div>
                                    <div className="desc">
                                        <a href="#">user_nick</a>
                                        <span>
                  Followed by <a href="#">another-user</a> and more 12 people
                </span>
                                    </div>
                                </div>
                                <div className="profile">
                                    <div className="avatar">
                                        <img
                                            src="https://res.cloudinary.com/dinhpv/image/upload/v1624981802/instagram-clone/test_zmmdlh.jpg"
                                            alt="User"
                                        />
                                    </div>
                                    <div className="desc">
                                        <a href="#">user_nick</a>
                                        <span>
                  Followed by <a href="#">another-user</a> and more 12 people
                </span>
                                    </div>
                                </div>
                                <div className="profile">
                                    <div className="avatar">
                                        <img
                                            src="https://res.cloudinary.com/dinhpv/image/upload/v1624981802/instagram-clone/test_zmmdlh.jpg"
                                            alt="User"
                                        />
                                    </div>
                                    <div className="desc">
                                        <a href="#">user_nick</a>
                                        <span>
                  Followed by <a href="#">another-user</a> and more 12 people
                </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <div className="navbar">
                <a href="#">
                    <svg className="_8-yf5 " height={24} viewBox="0 0 48 48" width={24}>
                        <path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z" />
                    </svg>
                </a>
                <a href="#">
                    <svg
                        width={24}
                        height={24}
                        viewBox="0 0 25 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.7325 1.5H18.6054C21.0068 1.5 22.9689 3.381 23.0986 5.75H18.0506L15.7325 1.5ZM14.0238 1.5H8.73245L11.0506 5.75H16.342L14.0238 1.5ZM9.342 5.75L7.02382 1.5H6.60541C4.20402 1.5 2.24196 3.381 2.11223 5.75H9.342ZM0.605408 7.25V6V5.75H0.610522C0.741586 2.55223 3.37544 0 6.60541 0H18.6054C21.8354 0 24.4692 2.55223 24.6003 5.75H24.6054V6V7.25V18C24.6054 21.3137 21.9191 24 18.6054 24H6.60541C3.2917 24 0.605408 21.3137 0.605408 18V7.25ZM23.1054 7.25V18C23.1054 20.4853 21.0907 22.5 18.6054 22.5H6.60541C4.12013 22.5 2.10541 20.4853 2.10541 18V7.25H23.1054ZM9.26227 11.1734C9.26227 10.4169 10.0698 9.9344 10.736 10.2928L16.282 13.2762C16.9837 13.6536 16.9837 14.6601 16.282 15.0375L10.736 18.0209C10.0698 18.3793 9.26227 17.8968 9.26227 17.1403L9.26227 11.1734Z"
                        />
                    </svg>
                </a>
                <a href="#">
                    <svg className="_8-yf5 " height={24} viewBox="0 0 48 48" width={24}>
                        <path d="M31.8 48H16.2c-6.6 0-9.6-1.6-12.1-4C1.6 41.4 0 38.4 0 31.8V16.2C0 9.6 1.6 6.6 4 4.1 6.6 1.6 9.6 0 16.2 0h15.6c6.6 0 9.6 1.6 12.1 4C46.4 6.6 48 9.6 48 16.2v15.6c0 6.6-1.6 9.6-4 12.1-2.6 2.5-5.6 4.1-12.2 4.1zM16.2 3C10 3 7.8 4.6 6.1 6.2 4.6 7.8 3 10 3 16.2v15.6c0 6.2 1.6 8.4 3.2 10.1 1.6 1.6 3.8 3.1 10 3.1h15.6c6.2 0 8.4-1.6 10.1-3.2 1.6-1.6 3.1-3.8 3.1-10V16.2c0-6.2-1.6-8.4-3.2-10.1C40.2 4.6 38 3 31.8 3H16.2z" />
                        <path d="M36.3 25.5H11.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h24.6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z" />
                        <path d="M24 37.8c-.8 0-1.5-.7-1.5-1.5V11.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v24.6c0 .8-.7 1.5-1.5 1.5z" />
                    </svg>
                </a>
                <a href="#">
                    <svg className="_8-yf5 " height={24} viewBox="0 0 48 48" width={24}>
                        <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
                    </svg>
                </a>
                <a href="#">
                    <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 23"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.0483 0C8.59656 0 5.79834 2.79822 5.79834 6.25C5.79834 9.70178 8.59656 12.5 12.0483 12.5C15.5001 12.5 18.2983 9.70178 18.2983 6.25C18.2983 2.79822 15.5001 0 12.0483 0ZM7.29834 6.25C7.29834 3.62665 9.42499 1.5 12.0483 1.5C14.6717 1.5 16.7983 3.62665 16.7983 6.25C16.7983 8.87335 14.6717 11 12.0483 11C9.42499 11 7.29834 8.87335 7.29834 6.25ZM2.29834 19.75C2.29834 17.9549 3.75313 16.5 5.54771 16.5H18.549C20.3429 16.5 21.7983 17.9589 21.7983 19.75V22.75H23.2983V19.75C23.2983 17.1318 21.1726 15 18.549 15H5.54771C2.92445 15 0.79834 17.1268 0.79834 19.75V22.75H2.29834V19.75Z"
                        />
                    </svg>
                </a>
            </div>
        </div>
    )
}
export default HomeComponent