import React, {useEffect} from "react";
import PostPostComponent from "./PostPostComponent";
import { Menu, Dropdown, Button, Space } from 'antd';
import HeaderButtonsDesktopComponent from "./HeaderButtonsDesktopComponent";
import homeActions from "../../redux/actions/homeActions";
import {connect} from "react-redux";
import HeaderSearchComponent from "./HeaderSearchComponent";

function Layout(props) {
    useEffect(()=>{
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
    })
    const changeTheme = () =>{
        document.documentElement.classList.toggle('darkTheme');

        // Saving current theme on LocalStorage
        if(document.documentElement.classList.contains('darkTheme')) {
            localStorage.setItem('theme', 'dark');
        }
        else {
            localStorage.setItem('theme', 'light');
        }
    }
    useEffect(()=>{
        props.getUserAccountProfile(()=>{})
    },[])
    return(
        <div className='instagram-home-page-wrap'>
            <header className="header">
            <nav className="header__content">
                <div className="header__buttons">
                    <a href="/" className="header__home">
                        <svg width="67.815" height="22.012" viewBox="0 0 67.815 22.012"
                             xmlns="http://www.w3.org/2000/svg">
                            <g id="svgGroup" stroke-linecap="round" fill-rule="evenodd" font-size="9pt" stroke="#000"
                               stroke-width="0.25mm" fill="var(--text-dark)" >
                                <path
                                    d="M 1.089 21.912 Q 0.462 21.912 0.231 21.549 Q 0 21.186 0 20.757 A 24.463 24.463 0 0 1 0.079 18.853 Q 0.18 17.556 0.413 16.071 Q 0.825 13.431 1.419 10.824 A 51.097 51.097 0 0 1 2.124 8.176 A 42.756 42.756 0 0 1 2.591 6.699 A 89.041 89.041 0 0 1 2.903 5.785 Q 3.328 4.567 3.679 3.687 A 29.414 29.414 0 0 1 3.729 3.564 A 11.161 11.161 0 0 1 4.279 2.435 Q 4.793 1.522 5.396 0.941 Q 6.336 0.033 7.59 0.033 Q 8.514 0.033 9.24 0.644 A 1.924 1.924 0 0 1 9.717 1.269 Q 9.997 1.832 10.086 2.708 A 7.242 7.242 0 0 1 10.098 2.838 Q 10.296 4.752 10.56 6.699 Q 10.824 8.646 11.154 10.247 A 23.77 23.77 0 0 0 11.358 11.153 Q 11.595 12.109 11.847 12.705 A 1.95 1.95 0 0 0 12.001 13.019 Q 12.276 13.464 12.705 13.464 A 0.995 0.995 0 0 0 13.346 13.224 Q 13.586 13.028 13.794 12.672 Q 14.223 11.946 14.718 10.692 A 57.989 57.989 0 0 0 15.451 8.728 A 66.757 66.757 0 0 0 15.692 8.036 Q 16.17 6.633 16.533 5.478 Q 16.962 4.224 17.507 2.954 A 7.198 7.198 0 0 1 18.196 1.692 A 5.83 5.83 0 0 1 18.909 0.842 A 2.909 2.909 0 0 1 20.895 0.003 A 3.818 3.818 0 0 1 21.054 0 Q 22.242 0 22.754 0.809 Q 23.214 1.536 23.26 3.024 A 11.02 11.02 0 0 1 23.265 3.366 A 41.228 41.228 0 0 1 23.209 5.47 A 47.53 47.53 0 0 1 23.166 6.204 Q 23.133 7.062 23.084 7.97 Q 23.034 8.877 23.034 9.834 A 33.286 33.286 0 0 0 23.104 11.954 A 39.207 39.207 0 0 0 23.183 12.969 A 15.701 15.701 0 0 0 23.572 15.333 A 13.851 13.851 0 0 0 23.777 16.071 A 7.051 7.051 0 0 0 24.397 17.521 A 5.787 5.787 0 0 0 25.113 18.513 Q 25.377 18.744 25.592 19.041 Q 25.806 19.338 25.806 19.701 Q 25.806 20.526 24.932 21.203 Q 24.057 21.879 22.935 21.879 A 2.514 2.514 0 0 1 22.347 21.815 A 1.584 1.584 0 0 1 21.417 21.219 A 3.802 3.802 0 0 1 21.048 20.607 Q 20.894 20.292 20.767 19.914 A 7.757 7.757 0 0 1 20.625 19.437 A 18.992 18.992 0 0 1 20.265 17.438 A 22.416 22.416 0 0 1 20.163 16.467 A 37.448 37.448 0 0 1 20.033 13.771 A 33.835 33.835 0 0 1 20.031 13.398 Q 20.031 11.022 20.213 9.026 A 75.605 75.605 0 0 0 20.292 8.092 Q 20.392 6.821 20.394 6.107 A 10.4 10.4 0 0 0 20.394 6.072 A 4.582 4.582 0 0 0 20.388 5.826 Q 20.374 5.57 20.329 5.402 A 0.919 0.919 0 0 0 20.295 5.297 A 0.356 0.356 0 0 0 20.079 5.092 Q 20.009 5.066 19.919 5.055 A 1.057 1.057 0 0 0 19.8 5.049 A 0.909 0.909 0 0 0 19.116 5.354 A 1.328 1.328 0 0 0 19.025 5.462 Q 18.785 5.777 18.612 6.276 A 5.134 5.134 0 0 0 18.513 6.6 A 130.52 130.52 0 0 1 18.059 8.036 A 161.097 161.097 0 0 1 17.556 9.57 Q 17.028 11.154 16.451 12.672 Q 15.873 14.19 15.213 15.378 Q 14.454 16.764 13.58 17.243 A 3.97 3.97 0 0 1 12.604 17.626 A 3.36 3.36 0 0 1 11.814 17.721 A 3.493 3.493 0 0 1 10.977 17.627 A 2.271 2.271 0 0 1 9.719 16.847 Q 9.009 15.972 8.679 14.916 Q 8.391 13.963 8.132 12.615 A 44.294 44.294 0 0 1 7.887 11.204 Q 7.525 8.919 7.36 6.062 A 68.14 68.14 0 0 1 7.359 6.039 A 3.115 3.115 0 0 0 7.311 5.624 Q 7.157 4.818 6.567 4.818 A 1.016 1.016 0 0 0 5.828 5.144 Q 5.533 5.44 5.313 6.006 A 23.528 23.528 0 0 0 4.973 7.125 Q 4.812 7.702 4.657 8.353 A 41.463 41.463 0 0 0 4.554 8.795 A 33.503 33.503 0 0 0 4.032 11.697 A 36.809 36.809 0 0 0 3.977 12.128 Q 3.762 13.86 3.762 15.543 Q 3.762 16.685 3.837 17.592 A 16.082 16.082 0 0 0 3.878 18.018 A 19.822 19.822 0 0 1 3.975 19.256 A 16.069 16.069 0 0 1 3.993 19.998 A 1.349 1.349 0 0 1 3.566 21.012 A 1.684 1.684 0 0 1 3.482 21.087 Q 2.97 21.516 2.277 21.714 Q 1.584 21.912 1.089 21.912 Z M 31.604 21.841 A 7.051 7.051 0 0 0 33.198 22.011 Q 36.234 22.011 38.445 19.899 Q 39.337 19.055 39.594 18.443 A 1.188 1.188 0 0 0 39.699 17.985 A 0.968 0.968 0 0 0 39.697 17.924 A 0.725 0.725 0 0 0 39.485 17.441 A 0.707 0.707 0 0 0 39.211 17.269 A 0.831 0.831 0 0 0 38.94 17.226 A 0.917 0.917 0 0 0 38.635 17.281 Q 38.371 17.374 38.082 17.622 A 5.015 5.015 0 0 1 37.433 18.072 A 6.048 6.048 0 0 1 36.35 18.563 A 6.89 6.89 0 0 1 35.849 18.714 A 5.771 5.771 0 0 1 34.386 18.909 A 4.769 4.769 0 0 1 33.63 18.851 A 3.456 3.456 0 0 1 31.796 17.985 A 3.077 3.077 0 0 1 30.95 16.698 A 3.8 3.8 0 0 1 30.756 15.543 A 4.187 4.187 0 0 0 31.112 15.77 Q 31.773 16.146 32.607 16.309 A 7.204 7.204 0 0 0 33.99 16.434 A 7.733 7.733 0 0 0 34.586 16.411 A 6.42 6.42 0 0 0 36.927 15.791 A 6.539 6.539 0 0 0 37.327 15.579 A 5.447 5.447 0 0 0 39.039 14.058 Q 39.831 12.969 39.831 11.682 A 4.168 4.168 0 0 0 39.821 11.384 A 3.133 3.133 0 0 0 38.643 9.092 A 3.785 3.785 0 0 0 38.242 8.805 Q 37.138 8.118 35.475 8.118 Q 33.396 8.118 31.664 9.257 Q 29.931 10.395 28.908 12.309 A 8.434 8.434 0 0 0 28.326 13.676 A 9.279 9.279 0 0 0 27.885 16.566 A 9.142 9.142 0 0 0 27.888 16.82 Q 27.913 17.697 28.108 18.437 A 4.716 4.716 0 0 0 29.288 20.576 A 4.431 4.431 0 0 0 29.527 20.803 Q 30.384 21.558 31.604 21.841 Z M 55.892 21.822 A 5.142 5.142 0 0 0 57.321 22.011 Q 59.169 22.011 60.539 20.988 A 7.67 7.67 0 0 0 61.309 20.328 A 8.441 8.441 0 0 0 62.799 18.348 Q 62.799 20.097 63.492 21.038 A 2.198 2.198 0 0 0 64.624 21.857 A 2.814 2.814 0 0 0 65.472 21.978 A 3.634 3.634 0 0 0 65.797 21.964 Q 66.52 21.899 66.941 21.533 A 2.727 2.727 0 0 0 67.209 21.265 A 2.114 2.114 0 0 0 67.634 20.526 A 6.142 6.142 0 0 0 67.635 20.52 Q 67.753 20.156 67.794 19.875 A 1.916 1.916 0 0 0 67.815 19.602 A 1.776 1.776 0 0 0 67.812 19.499 Q 67.792 19.157 67.634 19.041 Q 67.52 18.959 67.362 18.902 A 1.724 1.724 0 0 0 67.155 18.843 Q 66.033 18.612 65.654 17.639 A 5.342 5.342 0 0 1 65.366 16.578 A 7.065 7.065 0 0 1 65.274 15.411 Q 65.274 14.751 65.34 14.091 A 14.263 14.263 0 0 1 65.358 13.926 A 15.629 15.629 0 0 1 65.538 12.738 A 7.559 7.559 0 0 0 65.591 12.752 Q 65.911 12.837 66.033 12.837 Q 66.33 12.837 66.512 12.623 Q 66.693 12.408 66.792 12.144 Q 66.891 11.847 66.957 11.369 Q 67.002 11.04 67.017 10.796 A 3.513 3.513 0 0 0 67.023 10.593 A 1.654 1.654 0 0 0 66.791 9.733 Q 66.602 9.414 66.259 9.148 A 3.58 3.58 0 0 0 65.621 8.762 A 5.765 5.765 0 0 0 65.342 8.636 Q 64.618 8.333 63.751 8.197 A 9.736 9.736 0 0 0 62.238 8.085 A 10.706 10.706 0 0 0 61.05 8.15 A 8.614 8.614 0 0 0 58.377 8.877 Q 56.661 9.669 55.44 10.989 Q 54.219 12.309 53.576 13.943 Q 52.932 15.576 52.932 17.226 A 8.191 8.191 0 0 0 52.947 17.736 Q 52.994 18.479 53.179 19.099 A 3.997 3.997 0 0 0 54.137 20.774 A 3.925 3.925 0 0 0 55.892 21.822 Z M 46.095 21.893 A 4.751 4.751 0 0 0 47.19 22.011 Q 48.807 22.011 49.929 21.252 A 3.213 3.213 0 0 0 50.496 20.772 A 1.966 1.966 0 0 0 51.051 19.404 Q 51.051 19.151 50.982 18.983 A 0.531 0.531 0 0 0 50.82 18.761 Q 50.589 18.579 50.028 18.579 A 7.88 7.88 0 0 1 49.136 18.532 Q 47.962 18.397 47.256 17.886 A 1.799 1.799 0 0 1 47.209 17.851 Q 46.54 17.332 46.363 16.185 A 5.96 5.96 0 0 1 46.299 15.279 A 8.384 8.384 0 0 1 46.3 15.127 Q 46.308 14.71 46.356 14.246 A 14.248 14.248 0 0 1 46.481 13.349 Q 46.662 12.276 46.893 11.253 A 15.654 15.654 0 0 1 47.291 11.258 Q 47.612 11.266 47.897 11.288 A 8.084 8.084 0 0 1 48.477 11.352 A 21.936 21.936 0 0 1 48.876 11.416 Q 49.064 11.447 49.228 11.479 A 9.704 9.704 0 0 1 49.566 11.55 A 15.085 15.085 0 0 0 49.763 11.588 Q 49.968 11.626 50.127 11.649 Q 50.3 11.674 50.399 11.68 A 0.94 0.94 0 0 0 50.457 11.682 A 0.551 0.551 0 0 0 50.701 11.624 Q 51.022 11.468 51.299 10.89 A 4.25 4.25 0 0 0 51.446 10.544 A 3.508 3.508 0 0 0 51.678 9.306 A 2.243 2.243 0 0 0 51.658 8.993 Q 51.631 8.808 51.572 8.663 A 0.796 0.796 0 0 0 51.266 8.283 Q 50.982 8.102 50.535 8.045 A 3.512 3.512 0 0 0 50.094 8.019 A 7.359 7.359 0 0 0 49.793 8.025 A 8.428 8.428 0 0 0 48.857 8.118 Q 48.213 8.217 47.586 8.349 Q 47.652 7.986 47.702 7.64 A 5.222 5.222 0 0 0 47.708 7.596 A 4.755 4.755 0 0 0 47.751 6.963 A 3.937 3.937 0 0 0 47.748 6.81 Q 47.705 5.709 47.025 5.709 A 1.232 1.232 0 0 0 46.908 5.715 Q 46.522 5.752 46.04 6.026 A 4.919 4.919 0 0 0 45.59 6.32 A 10.601 10.601 0 0 0 44.84 6.919 A 13.579 13.579 0 0 0 43.907 7.821 A 12.854 12.854 0 0 0 43.315 8.492 A 10.412 10.412 0 0 0 42.504 9.62 Q 42.136 10.215 42.009 10.69 A 1.808 1.808 0 0 0 41.943 11.154 Q 41.943 11.748 42.669 11.748 Q 43.362 11.748 44.055 11.55 A 32.284 32.284 0 0 1 44.011 11.948 A 37.816 37.816 0 0 1 43.89 12.87 Q 43.791 13.563 43.692 14.289 Q 43.593 15.015 43.511 15.741 Q 43.428 16.467 43.428 17.226 A 9.616 9.616 0 0 0 43.438 17.672 Q 43.522 19.482 44.303 20.675 Q 44.917 21.614 46.095 21.893 Z M 58.377 18.579 Q 59.697 18.579 60.704 17.754 A 5.587 5.587 0 0 0 62.253 15.714 A 6.461 6.461 0 0 0 62.271 15.675 A 7.9 7.9 0 0 0 62.723 14.404 A 9.218 9.218 0 0 0 62.832 13.943 Q 63.03 13.002 63.096 12.078 A 5.577 5.577 0 0 0 62.423 11.816 A 7.352 7.352 0 0 0 61.809 11.649 A 6.788 6.788 0 0 0 60.393 11.485 A 7.545 7.545 0 0 0 60.291 11.484 A 5.586 5.586 0 0 0 58.726 11.694 A 4.381 4.381 0 0 0 56.975 12.672 Q 55.671 13.86 55.671 15.642 Q 55.671 16.962 56.397 17.771 A 2.389 2.389 0 0 0 57.871 18.543 A 3.423 3.423 0 0 0 58.377 18.579 Z M 33.693 14.256 Q 34.881 14.256 35.673 13.761 A 2.123 2.123 0 0 0 36.073 13.444 A 1.304 1.304 0 0 0 36.465 12.507 Q 36.465 11.925 36.011 11.585 A 1.45 1.45 0 0 0 35.937 11.534 Q 35.533 11.268 34.897 11.206 A 4.234 4.234 0 0 0 34.485 11.187 A 3.9 3.9 0 0 0 33.28 11.367 A 3.387 3.387 0 0 0 32.357 11.831 A 3.455 3.455 0 0 0 31.175 13.314 A 4.352 4.352 0 0 0 31.053 13.629 A 2.873 2.873 0 0 0 31.508 13.864 Q 31.741 13.96 32.018 14.036 A 5.504 5.504 0 0 0 32.241 14.091 Q 32.967 14.256 33.693 14.256 Z"
                                    vector-effect="non-scaling-stroke"/>
                            </g>
                        </svg>
                    </a>
                    <button className="header__theme-button" title="Toggle Theme" onClick={() =>{changeTheme()}}>
                        <svg
                            className="header__theme-button-moon"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="c"
                            viewBox="0 0 16 16"
                        >
                            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                        </svg>
                        <svg
                            className="header__theme-button-sun"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="var(--text-dark)"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                        </svg>
                    </button>
                </div>
                <HeaderSearchComponent />
                <div className="header__buttons header__buttons--mobile">
                    <a href="#">
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                x={3}
                                y={3}
                                width={18}
                                height={18}
                                rx={5}
                                stroke="var(--text-dark)"
                                strokeWidth="1.8"
                            />
                            <line
                                x1="12.1"
                                y1="6.9"
                                x2="12.1"
                                y2="17.1"
                                stroke="var(--text-dark)"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                            <line
                                x1="6.9"
                                y1="11.8"
                                x2="17.1"
                                y2="11.8"
                                stroke="var(--text-dark)"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                        </svg>
                    </a>
                    <a href="#">
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.4995 21.2609C11.1062 21.2609 10.7307 21.1362 10.4133 20.9001C8.2588 19.3012 3.10938 15.3239 1.81755 12.9143C0.127895 9.76543 1.14258 5.72131 4.07489 3.89968C5.02253 3.31177 6.09533 3 7.18601 3C8.81755 3 10.3508 3.66808 11.4995 4.85726C12.6483 3.66808 14.1815 3 15.8131 3C16.9038 3 17.9766 3.31177 18.9242 3.89968C21.8565 5.72131 22.8712 9.76543 21.186 12.9143C19.8942 15.3239 14.7448 19.3012 12.5902 20.9001C12.2684 21.1362 11.8929 21.2609 11.4995 21.2609ZM7.18601 4.33616C6.34565 4.33616 5.5187 4.57667 4.78562 5.03096C2.43888 6.49183 1.63428 9.74316 2.99763 12.2819C4.19558 14.5177 9.58639 18.6242 11.209 19.8267C11.3789 19.9514 11.6158 19.9514 11.7856 19.8267C13.4082 18.6197 18.799 14.5133 19.997 12.2819C21.3603 9.74316 20.5557 6.48738 18.209 5.03096C17.4804 4.57667 16.6534 4.33616 15.8131 4.33616C14.3425 4.33616 12.9657 5.04878 12.0359 6.28696L11.4995 7.00848L10.9631 6.28696C10.0334 5.04878 8.6611 4.33616 7.18601 4.33616Z"
                                fill="var(--text-dark)"
                                stroke="var(--text-dark)"
                                strokeWidth="0.6"
                            />
                        </svg>
                    </a>
                    <a href="#">
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.81038 19.7478C5.83176 19.4539 5.70787 19.1681 5.47873 18.9827C3.2792 17.2037 1.9 14.5525 1.9 11.5868C1.9 6.27627 6.38748 1.9 12.0098 1.9C17.6196 1.9 22.1078 6.27565 22.1078 11.5868C22.1078 16.8966 17.6092 21.2735 11.998 21.2735C11.0656 21.2735 10.1798 21.1544 9.32697 20.9277C9.15685 20.8825 8.97721 20.8882 8.81028 20.944L5.64643 22.0022L5.81038 19.7478Z"
                                stroke="var(--text-dark)"
                                strokeWidth="1.8"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M10.1498 8.7952C10.2222 8.80563 10.2825 8.81606 10.3548 8.82649C11.428 9.05591 12.5252 10.0362 13.3693 10.6202C13.8396 10.9539 14.2375 10.9226 14.7078 10.6097C15.7086 9.92147 16.7456 9.26448 17.7705 8.58664C18.0478 8.39893 18.3372 8.20079 18.6748 8.45107C19.0486 8.7222 18.8195 9.0142 18.6266 9.28534C17.6137 10.6827 16.6129 12.0801 15.588 13.4671C14.8886 14.4265 13.8999 14.5621 12.8388 13.8842C12.1032 13.4045 11.3436 12.9561 10.6201 12.4556C10.1378 12.1219 9.73984 12.1636 9.28163 12.4764C8.26876 13.1647 7.24382 13.8217 6.21889 14.4995C5.94156 14.6872 5.65216 14.8854 5.31454 14.6247C4.97691 14.3744 5.15778 14.0928 5.33865 13.8321C6.3877 12.393 7.42469 10.9539 8.47374 9.51476C8.82343 9.02463 9.47456 8.73263 10.1498 8.7952Z"
                                fill="var(--text-dark)"
                            />
                        </svg>
                    </a>
                </div>
                <HeaderButtonsDesktopComponent />
            </nav>
        </header>
            {props.children}
            <div className="alertCopyLink">
                <div className="alert-text">Link copied to clipboard</div>
            </div>
            <div className="alertUploading">
                <div className="alert-text">Uploading...</div>
            </div>
            <div className="alertUploadErr">
                <div className="alert-text">File size must be less than 40MB</div>
            </div>
        </div>
    )
}
function mapStateToProps(state) {
    return {
        userAccountProfile: state.home.userAccountProfile,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUserAccountProfile: (callback) => {
            dispatch(homeActions.action.getUserAccountProfile(callback))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Layout)