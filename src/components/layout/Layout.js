import React, {useEffect} from "react";

function Layout(props) {
    return(
        <div className='instagram-home-page-wrap'>
            <header className="header">
                <div className="container">
                    <div className="section left">
                        <button id="cam">
                            <svg className="_8-yf5 " height={24} viewBox="0 0 48 48" width={24}>
                                <path
                                    clipRule="evenodd"
                                    d="M38.5 46h-29c-5 0-9-4-9-9V17c0-5 4-9 9-9h1.1c1.1 0 2.2-.6 2.7-1.7l.5-1c1-2 3.1-3.3 5.4-3.3h9.6c2.3 0 4.4 1.3 5.4 3.3l.5 1c.5 1 1.5 1.7 2.7 1.7h1.1c5 0 9 4 9 9v20c0 5-4 9-9 9zm6-29c0-3.3-2.7-6-6-6h-1.1C35.1 11 33 9.7 32 7.7l-.5-1C31 5.6 29.9 5 28.8 5h-9.6c-1.1 0-2.2.6-2.7 1.7l-.5 1c-1 2-3.1 3.3-5.4 3.3H9.5c-3.3 0-6 2.7-6 6v20c0 3.3 2.7 6 6 6h29c3.3 0 6-2.7 6-6V17zM24 38c-6.4 0-11.5-5.1-11.5-11.5S17.6 15 24 15s11.5 5.1 11.5 11.5S30.4 38 24 38zm0-20c-4.7 0-8.5 3.8-8.5 8.5S19.3 35 24 35s8.5-3.8 8.5-8.5S28.7 18 24 18z"
                                    fillRule="evenodd"
                                />
                            </svg>
                        </button>
                        <button className="logo">
                            <svg
                                width={106}
                                height={30}
                                viewBox="0 0 106 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M80.6488 8.99263C80.0249 9.0164 78.5596 9.42394 78.2957 13.4978C78.0317 17.5711 79.1117 18.6254 80.0249 18.7452C80.9366 18.865 82.5455 17.4038 82.641 13.066C82.7376 8.7292 80.6488 8.99263 80.6488 8.99263ZM60.8616 21.5196C57.2529 24.6383 56.9409 26.8661 56.9409 26.8661C56.9409 26.8661 56.5844 28.6929 58.3223 28.7819C60.4105 28.9938 60.7609 26.4576 60.8171 24.2373C60.8444 23.1892 60.8616 21.5196 60.8616 21.5196ZM58.7233 8.86623C58.0897 8.8905 56.4955 9.44568 56.136 13.3891C55.868 17.516 56.9642 18.5844 57.8905 18.7058C58.8168 18.8271 60.45 17.3461 60.5466 12.9522C60.6446 8.5578 58.7233 8.86623 58.7233 8.86623ZM45.9516 8.84802C45.3276 8.87179 43.8623 9.27933 43.5989 13.3532C43.3349 17.4265 44.415 18.4808 45.3276 18.6006C46.2398 18.7204 47.8482 17.2592 47.9438 12.9219C48.0408 8.58409 45.9516 8.84802 45.9516 8.84802ZM105.981 15.7762C105.981 20.4032 103.178 20.3293 103.178 20.3293C100.511 20.4239 99.8289 17.605 99.6605 14.7396C99.5341 12.5846 99.6605 10.1864 99.6605 10.1864C99.6605 10.1864 99.6418 10.0757 99.5685 10.1864C98.6765 11.806 98.0703 14.2633 97.773 16.165C97.5571 17.5448 97.5348 18.7002 97.5348 18.7002C97.5348 18.7002 97.5717 18.9596 97.3513 19.1077C95.9042 19.7737 94.9698 18.8296 94.6401 17.7749C94.2007 16.7758 93.9439 10.7603 93.9439 10.4458C93.9439 10.1308 93.687 10.372 93.687 10.372C91.6903 13.7218 91.6721 18.6451 91.6721 19.6442C91.6721 20.6438 89.9681 20.3293 89.9681 20.3293C88.5205 20.2181 88.5756 19.5148 88.5756 19.5148L88.5099 18.32C88.0073 19.2478 87.0718 20.4527 85.6343 20.3597C83.4581 20.2191 83.0359 17.9655 83.0041 17.5853C83.0041 17.5853 81.921 20.3915 78.9398 20.3597C76.9153 20.3283 76.1027 18.235 76.1027 18.235C76.1027 18.235 75.2897 20.4229 73.298 20.344C71.3053 20.2646 69.6636 17.9655 69.791 14.9854C69.9184 12.0047 70.3805 10.5141 70.3805 10.5141C70.3805 10.5141 70.5403 10.2127 70.2693 10.197C69.9988 10.1814 68.2771 10.2289 68.2771 10.2289C68.2771 10.2289 67.3048 14.1293 63.193 18.9803C63.193 18.9803 63.2259 20.4967 63.2244 22.1835C63.2223 25.3725 62.8259 29.6506 58.5069 30C54.7697 29.7472 54.9806 26.8661 54.9806 26.8661C54.8916 26.0197 55.4261 24.4603 57.6539 22.366C59.8817 20.2722 60.7726 19.4703 60.7726 19.4703L60.6841 18.1334C59.2577 20.4947 57.0749 20.3612 57.0749 20.3612C57.0749 20.3612 55.3891 20.704 53.9714 18.1956C53.5542 19.0547 52.6072 20.5205 51.0579 20.3501C48.8807 20.1104 48.4484 17.9377 48.4165 17.5545C48.4165 17.5545 47.3284 20.3819 44.3351 20.3501C42.302 20.3177 41.4859 18.2097 41.4859 18.2097C41.2502 17.7825 41.0687 17.1343 40.9737 16.7525C40.9494 16.8304 40.9216 16.9153 40.8832 17.0144C40.422 18.1941 39.2803 20.251 37.5288 20.2773C34.311 20.2773 34.175 15.2857 34.175 15.2857C33.2446 17.4998 31.4223 20.3359 28.0296 20.3167C24.6368 20.2965 24.2298 19.0734 24.2298 18.8984C24.2298 18.7235 24.1716 18.5293 24.5594 17.966C24.9473 17.4028 25.2769 17.1697 25.5479 17.1697C25.8195 17.1697 26.3044 17.5777 26.3044 17.5777C26.3044 17.5777 27.0411 18.2957 27.8743 18.2957C28.9407 18.2573 29.1733 17.4028 29.2512 16.5285C29.3285 15.6548 28.7081 14.7224 27.8551 13.9453C27.0021 13.1686 26.3428 12.5861 26.3428 12.5861C25.1217 14.6451 24.1908 16.0431 23.5128 17.2475C21.8644 19.9279 20.2292 20.3425 19.5967 20.258C18.724 20.1418 17.8902 19.2478 17.8518 16.6453C17.8128 14.0429 18.0454 9.59484 18.0454 9.36175C18.0454 9.12865 17.8325 9.24545 17.8325 9.24545C14.5753 12.7024 13.606 19.8111 13.606 19.9471C13.606 20.0836 13.3153 20.2383 13.0245 20.2383C12.7338 20.2383 13.1216 20.2191 11.9581 20.1802C10.7952 20.1418 10.8726 17.9276 10.8726 17.9276L10.9499 7.34125C10.9691 6.99186 11.2993 6.83664 12.4041 7.12788C13.5094 7.41912 13.4705 7.78823 13.4705 7.78823L13.4316 13.9261C16.2813 5.51593 18.4332 6.83664 19.7322 7.47727C21.0312 8.1184 20.8567 9.05078 20.8567 9.05078C20.8567 9.05078 20.7212 13.6737 20.6626 15.3054C20.6049 16.9371 20.837 17.5777 21.2056 17.6364C22.1167 17.8497 25.3543 11.5951 25.3543 11.5951C23.9198 10.0413 24.703 8.1447 25.8195 7.32204C26.5779 6.76281 27.5062 6.70062 27.5062 6.70062C27.5062 6.70062 28.9599 6.62275 28.9215 7.84638C28.9599 9.1868 27.4673 10.8185 27.4673 10.8185C30.356 12.8774 31.7131 13.965 31.9264 15.5572C32.022 16.3212 31.8486 16.8006 31.8486 16.8006C33.904 15.0137 34.0587 13.0134 34.0587 13.0134L34.0976 6.33151L31.0542 6.29308C31.0542 6.29308 30.8216 6.27336 30.7827 5.71009C30.7827 4.6417 31.345 4.19472 31.345 4.19472L34.2528 4.23366C34.2528 4.23366 34.3499 1.22314 34.3691 0.737234C34.4657 0.0384547 34.9117 -0.0591317 36.1914 0.271044C37.4707 0.60122 37.4707 0.892462 37.4707 0.892462L37.3154 4.40861C37.3154 4.40861 40.5146 4.56383 40.9413 4.60277C41.3675 4.6417 41.5031 4.75799 41.4065 5.47649C41.3094 6.1955 40.8832 6.37045 40.8832 6.37045L37.277 6.44781L37.0252 14.1981C37.0252 15.402 37.0829 18.2381 38.2074 18.2183C39.7779 18.2957 40.7087 14.7806 40.7087 14.7806L40.7259 14.7528C40.7082 14.2047 40.7193 13.5473 40.7977 12.8096C41.095 9.98519 42.3545 6.67534 45.2467 6.67534C45.2467 6.67534 47.0078 6.61163 47.9362 8.36869L47.968 7.72958C47.968 7.72958 47.9038 6.96304 49.1209 7.15468C50.3374 7.34631 50.753 7.82564 50.7212 8.20891C50.7212 8.20891 50.4972 13.1292 50.6256 16.0371C50.7884 17.7259 51.0787 18.7245 51.9377 18.6562C52.6785 18.5485 53.2043 17.5357 53.5229 16.6731C52.4474 7.72654 57.3434 6.64197 57.3434 6.64197C57.3434 6.64197 59.5105 6.4832 60.4985 8.29082L60.5304 7.68811C60.5304 7.68811 60.4348 6.89579 61.5831 7.11776C61.5831 7.11776 62.0609 7.18097 62.5711 7.37109C63.0808 7.5612 63.24 7.68811 63.24 8.16391C63.24 8.6392 63.1445 16.9988 63.1445 16.9988C63.1445 16.9988 65.6949 13.5741 66.3325 10.2446C66.3325 10.2446 65.44 9.57866 65.5042 8.62757C65.5675 7.67598 66.0453 6.53477 67.4484 6.53477C68.851 6.53477 68.9147 7.77104 68.6917 8.62757C68.6917 8.62757 69.8709 8.46881 70.8907 8.21498C71.9111 7.96166 73.2818 7.80289 73.3774 9.38854C73.4411 9.9594 73.1858 10.4033 73.1858 10.4033C73.1858 10.4033 72.3889 13.923 72.5163 15.3499C72.6442 16.7768 73.027 18.9328 74.1424 18.679C75.2578 18.4256 75.6406 16.8405 75.6406 16.8405C75.6406 16.8405 75.1921 15.0056 75.4171 12.8764C75.7139 10.0732 76.9679 6.7886 79.8479 6.7886C79.8479 6.7886 81.6014 6.72489 82.5262 8.46881L82.5576 7.83475C82.5576 7.83475 82.4939 7.07378 83.7059 7.26389C84.9164 7.45451 85.3315 7.9298 85.2991 8.31004C85.2991 8.31004 85.0761 13.1934 85.2041 16.0795C85.3659 17.7557 85.6546 18.7467 86.5106 18.679C87.3358 18.6547 88.0315 17.2602 88.4618 16.123L88.4563 15.7023L88.4841 7.45654C88.5528 6.98478 88.9791 6.95697 88.9791 6.95697L89.9681 7.10967C91.356 7.31799 91.1634 7.84537 91.1634 7.84537V12.5093C92.1939 9.34455 92.6889 8.13661 93.1561 7.33165C93.554 6.64551 94.8596 7.09552 94.8596 7.09552C94.8596 7.09552 96.2753 7.47069 96.3026 8.77522C96.2617 10.9272 96.564 14.4322 96.564 14.4322C96.5691 14.4878 96.6171 14.505 96.6439 14.4807C96.6651 14.4615 96.6672 14.4044 96.6672 14.4044C96.9483 12.1488 98.2311 8.44656 98.7443 7.48435C99.257 6.52213 100.741 7.20676 100.741 7.20676C102.518 7.81756 102.28 8.8723 102.28 8.8723C101.749 17.9231 102.866 18.5151 103.526 18.5708C104.185 18.6264 104.534 17.7749 104.68 17.3674C104.827 16.9608 105.01 16.0725 105.12 15.7205C105.229 15.3691 105.578 15.3504 105.578 15.3504C105.578 15.3504 105.981 15.4429 105.981 15.7762ZM2.79514 2.02861C4.79895 0.0627241 6.04027 0.00407117 6.04027 0.00407117C6.04027 0.00407117 6.43112 -0.0550874 7.37917 0.277616C8.32723 0.61032 8.36616 1.11898 8.36616 1.11898V15.5067C8.48802 19.534 7.48687 21.0822 6.28449 22.1582C5.60138 22.7134 5.05227 22.7842 4.98451 22.7842C4.81867 22.7842 4.69175 22.7645 4.66192 22.54C4.6331 22.3149 4.83788 21.7279 4.83788 21.7279C5.44413 20.1918 5.39508 17.5317 5.39508 17.5317L5.45374 2.02861C5.45374 2.02861 5.50278 1.74495 5.25856 1.83293C2.89323 3.86758 2.59997 6.73349 2.5216 8.12245C2.48266 10.2056 3.38673 11.2816 3.38673 11.2816C3.38673 11.2816 3.62134 11.4869 3.59201 11.7802C3.59201 12.1766 3.22543 12.1473 3.22543 12.1473C2.33603 12.0643 0.918752 11.0566 0.410595 9.84361C-0.0105937 8.94764 2.44643e-05 7.98037 2.44643e-05 7.98037C0.0293509 6.76231 0.791839 3.99449 2.79514 2.02861Z"
                                />
                            </svg>
                        </button>
                        <button id="btnTheme">
                            <svg
                                id="moon"
                                width={24}
                                height={24}
                                viewBox="0 0 16 16"
                                className="bi bi-moon"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M14.53 10.53a7 7 0 0 1-9.058-9.058A7.003 7.003 0 0 0 8 15a7.002 7.002 0 0 0 6.53-4.47z"
                                />
                            </svg>
                            <svg
                                id="sun"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeMiterlimit={10}
                                    strokeWidth={2}
                                    d="M12 6.2c-3.3 0-6 2.7-6 6s2.7 6 6 6c3.3 0 6-2.7 6-6S15.3 6.2 12 6.2L12 6.2zM12 1.2L12 3.2M12 21.2L12 23.2M23 12.2L21 12.2M3 12.2L1 12.2M4.2 4.4L5.6 5.8M18.4 18.6L19.8 20M19.8 4.4L18.4 5.8M5.6 18.6L4.2 20"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="section mid">
                        <button className="logo">
                            <svg
                                width={106}
                                height={30}
                                viewBox="0 0 106 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M80.6488 8.99263C80.0249 9.0164 78.5596 9.42394 78.2957 13.4978C78.0317 17.5711 79.1117 18.6254 80.0249 18.7452C80.9366 18.865 82.5455 17.4038 82.641 13.066C82.7376 8.7292 80.6488 8.99263 80.6488 8.99263ZM60.8616 21.5196C57.2529 24.6383 56.9409 26.8661 56.9409 26.8661C56.9409 26.8661 56.5844 28.6929 58.3223 28.7819C60.4105 28.9938 60.7609 26.4576 60.8171 24.2373C60.8444 23.1892 60.8616 21.5196 60.8616 21.5196ZM58.7233 8.86623C58.0897 8.8905 56.4955 9.44568 56.136 13.3891C55.868 17.516 56.9642 18.5844 57.8905 18.7058C58.8168 18.8271 60.45 17.3461 60.5466 12.9522C60.6446 8.5578 58.7233 8.86623 58.7233 8.86623ZM45.9516 8.84802C45.3276 8.87179 43.8623 9.27933 43.5989 13.3532C43.3349 17.4265 44.415 18.4808 45.3276 18.6006C46.2398 18.7204 47.8482 17.2592 47.9438 12.9219C48.0408 8.58409 45.9516 8.84802 45.9516 8.84802ZM105.981 15.7762C105.981 20.4032 103.178 20.3293 103.178 20.3293C100.511 20.4239 99.8289 17.605 99.6605 14.7396C99.5341 12.5846 99.6605 10.1864 99.6605 10.1864C99.6605 10.1864 99.6418 10.0757 99.5685 10.1864C98.6765 11.806 98.0703 14.2633 97.773 16.165C97.5571 17.5448 97.5348 18.7002 97.5348 18.7002C97.5348 18.7002 97.5717 18.9596 97.3513 19.1077C95.9042 19.7737 94.9698 18.8296 94.6401 17.7749C94.2007 16.7758 93.9439 10.7603 93.9439 10.4458C93.9439 10.1308 93.687 10.372 93.687 10.372C91.6903 13.7218 91.6721 18.6451 91.6721 19.6442C91.6721 20.6438 89.9681 20.3293 89.9681 20.3293C88.5205 20.2181 88.5756 19.5148 88.5756 19.5148L88.5099 18.32C88.0073 19.2478 87.0718 20.4527 85.6343 20.3597C83.4581 20.2191 83.0359 17.9655 83.0041 17.5853C83.0041 17.5853 81.921 20.3915 78.9398 20.3597C76.9153 20.3283 76.1027 18.235 76.1027 18.235C76.1027 18.235 75.2897 20.4229 73.298 20.344C71.3053 20.2646 69.6636 17.9655 69.791 14.9854C69.9184 12.0047 70.3805 10.5141 70.3805 10.5141C70.3805 10.5141 70.5403 10.2127 70.2693 10.197C69.9988 10.1814 68.2771 10.2289 68.2771 10.2289C68.2771 10.2289 67.3048 14.1293 63.193 18.9803C63.193 18.9803 63.2259 20.4967 63.2244 22.1835C63.2223 25.3725 62.8259 29.6506 58.5069 30C54.7697 29.7472 54.9806 26.8661 54.9806 26.8661C54.8916 26.0197 55.4261 24.4603 57.6539 22.366C59.8817 20.2722 60.7726 19.4703 60.7726 19.4703L60.6841 18.1334C59.2577 20.4947 57.0749 20.3612 57.0749 20.3612C57.0749 20.3612 55.3891 20.704 53.9714 18.1956C53.5542 19.0547 52.6072 20.5205 51.0579 20.3501C48.8807 20.1104 48.4484 17.9377 48.4165 17.5545C48.4165 17.5545 47.3284 20.3819 44.3351 20.3501C42.302 20.3177 41.4859 18.2097 41.4859 18.2097C41.2502 17.7825 41.0687 17.1343 40.9737 16.7525C40.9494 16.8304 40.9216 16.9153 40.8832 17.0144C40.422 18.1941 39.2803 20.251 37.5288 20.2773C34.311 20.2773 34.175 15.2857 34.175 15.2857C33.2446 17.4998 31.4223 20.3359 28.0296 20.3167C24.6368 20.2965 24.2298 19.0734 24.2298 18.8984C24.2298 18.7235 24.1716 18.5293 24.5594 17.966C24.9473 17.4028 25.2769 17.1697 25.5479 17.1697C25.8195 17.1697 26.3044 17.5777 26.3044 17.5777C26.3044 17.5777 27.0411 18.2957 27.8743 18.2957C28.9407 18.2573 29.1733 17.4028 29.2512 16.5285C29.3285 15.6548 28.7081 14.7224 27.8551 13.9453C27.0021 13.1686 26.3428 12.5861 26.3428 12.5861C25.1217 14.6451 24.1908 16.0431 23.5128 17.2475C21.8644 19.9279 20.2292 20.3425 19.5967 20.258C18.724 20.1418 17.8902 19.2478 17.8518 16.6453C17.8128 14.0429 18.0454 9.59484 18.0454 9.36175C18.0454 9.12865 17.8325 9.24545 17.8325 9.24545C14.5753 12.7024 13.606 19.8111 13.606 19.9471C13.606 20.0836 13.3153 20.2383 13.0245 20.2383C12.7338 20.2383 13.1216 20.2191 11.9581 20.1802C10.7952 20.1418 10.8726 17.9276 10.8726 17.9276L10.9499 7.34125C10.9691 6.99186 11.2993 6.83664 12.4041 7.12788C13.5094 7.41912 13.4705 7.78823 13.4705 7.78823L13.4316 13.9261C16.2813 5.51593 18.4332 6.83664 19.7322 7.47727C21.0312 8.1184 20.8567 9.05078 20.8567 9.05078C20.8567 9.05078 20.7212 13.6737 20.6626 15.3054C20.6049 16.9371 20.837 17.5777 21.2056 17.6364C22.1167 17.8497 25.3543 11.5951 25.3543 11.5951C23.9198 10.0413 24.703 8.1447 25.8195 7.32204C26.5779 6.76281 27.5062 6.70062 27.5062 6.70062C27.5062 6.70062 28.9599 6.62275 28.9215 7.84638C28.9599 9.1868 27.4673 10.8185 27.4673 10.8185C30.356 12.8774 31.7131 13.965 31.9264 15.5572C32.022 16.3212 31.8486 16.8006 31.8486 16.8006C33.904 15.0137 34.0587 13.0134 34.0587 13.0134L34.0976 6.33151L31.0542 6.29308C31.0542 6.29308 30.8216 6.27336 30.7827 5.71009C30.7827 4.6417 31.345 4.19472 31.345 4.19472L34.2528 4.23366C34.2528 4.23366 34.3499 1.22314 34.3691 0.737234C34.4657 0.0384547 34.9117 -0.0591317 36.1914 0.271044C37.4707 0.60122 37.4707 0.892462 37.4707 0.892462L37.3154 4.40861C37.3154 4.40861 40.5146 4.56383 40.9413 4.60277C41.3675 4.6417 41.5031 4.75799 41.4065 5.47649C41.3094 6.1955 40.8832 6.37045 40.8832 6.37045L37.277 6.44781L37.0252 14.1981C37.0252 15.402 37.0829 18.2381 38.2074 18.2183C39.7779 18.2957 40.7087 14.7806 40.7087 14.7806L40.7259 14.7528C40.7082 14.2047 40.7193 13.5473 40.7977 12.8096C41.095 9.98519 42.3545 6.67534 45.2467 6.67534C45.2467 6.67534 47.0078 6.61163 47.9362 8.36869L47.968 7.72958C47.968 7.72958 47.9038 6.96304 49.1209 7.15468C50.3374 7.34631 50.753 7.82564 50.7212 8.20891C50.7212 8.20891 50.4972 13.1292 50.6256 16.0371C50.7884 17.7259 51.0787 18.7245 51.9377 18.6562C52.6785 18.5485 53.2043 17.5357 53.5229 16.6731C52.4474 7.72654 57.3434 6.64197 57.3434 6.64197C57.3434 6.64197 59.5105 6.4832 60.4985 8.29082L60.5304 7.68811C60.5304 7.68811 60.4348 6.89579 61.5831 7.11776C61.5831 7.11776 62.0609 7.18097 62.5711 7.37109C63.0808 7.5612 63.24 7.68811 63.24 8.16391C63.24 8.6392 63.1445 16.9988 63.1445 16.9988C63.1445 16.9988 65.6949 13.5741 66.3325 10.2446C66.3325 10.2446 65.44 9.57866 65.5042 8.62757C65.5675 7.67598 66.0453 6.53477 67.4484 6.53477C68.851 6.53477 68.9147 7.77104 68.6917 8.62757C68.6917 8.62757 69.8709 8.46881 70.8907 8.21498C71.9111 7.96166 73.2818 7.80289 73.3774 9.38854C73.4411 9.9594 73.1858 10.4033 73.1858 10.4033C73.1858 10.4033 72.3889 13.923 72.5163 15.3499C72.6442 16.7768 73.027 18.9328 74.1424 18.679C75.2578 18.4256 75.6406 16.8405 75.6406 16.8405C75.6406 16.8405 75.1921 15.0056 75.4171 12.8764C75.7139 10.0732 76.9679 6.7886 79.8479 6.7886C79.8479 6.7886 81.6014 6.72489 82.5262 8.46881L82.5576 7.83475C82.5576 7.83475 82.4939 7.07378 83.7059 7.26389C84.9164 7.45451 85.3315 7.9298 85.2991 8.31004C85.2991 8.31004 85.0761 13.1934 85.2041 16.0795C85.3659 17.7557 85.6546 18.7467 86.5106 18.679C87.3358 18.6547 88.0315 17.2602 88.4618 16.123L88.4563 15.7023L88.4841 7.45654C88.5528 6.98478 88.9791 6.95697 88.9791 6.95697L89.9681 7.10967C91.356 7.31799 91.1634 7.84537 91.1634 7.84537V12.5093C92.1939 9.34455 92.6889 8.13661 93.1561 7.33165C93.554 6.64551 94.8596 7.09552 94.8596 7.09552C94.8596 7.09552 96.2753 7.47069 96.3026 8.77522C96.2617 10.9272 96.564 14.4322 96.564 14.4322C96.5691 14.4878 96.6171 14.505 96.6439 14.4807C96.6651 14.4615 96.6672 14.4044 96.6672 14.4044C96.9483 12.1488 98.2311 8.44656 98.7443 7.48435C99.257 6.52213 100.741 7.20676 100.741 7.20676C102.518 7.81756 102.28 8.8723 102.28 8.8723C101.749 17.9231 102.866 18.5151 103.526 18.5708C104.185 18.6264 104.534 17.7749 104.68 17.3674C104.827 16.9608 105.01 16.0725 105.12 15.7205C105.229 15.3691 105.578 15.3504 105.578 15.3504C105.578 15.3504 105.981 15.4429 105.981 15.7762ZM2.79514 2.02861C4.79895 0.0627241 6.04027 0.00407117 6.04027 0.00407117C6.04027 0.00407117 6.43112 -0.0550874 7.37917 0.277616C8.32723 0.61032 8.36616 1.11898 8.36616 1.11898V15.5067C8.48802 19.534 7.48687 21.0822 6.28449 22.1582C5.60138 22.7134 5.05227 22.7842 4.98451 22.7842C4.81867 22.7842 4.69175 22.7645 4.66192 22.54C4.6331 22.3149 4.83788 21.7279 4.83788 21.7279C5.44413 20.1918 5.39508 17.5317 5.39508 17.5317L5.45374 2.02861C5.45374 2.02861 5.50278 1.74495 5.25856 1.83293C2.89323 3.86758 2.59997 6.73349 2.5216 8.12245C2.48266 10.2056 3.38673 11.2816 3.38673 11.2816C3.38673 11.2816 3.62134 11.4869 3.59201 11.7802C3.59201 12.1766 3.22543 12.1473 3.22543 12.1473C2.33603 12.0643 0.918752 11.0566 0.410595 9.84361C-0.0105937 8.94764 2.44643e-05 7.98037 2.44643e-05 7.98037C0.0293509 6.76231 0.791839 3.99449 2.79514 2.02861Z"
                                />
                            </svg>
                        </button>
                        <div className="search-bar">
                            <svg className="_8-yf5 " height={24} viewBox="0 0 48 48" width={24}>
                                <path d="M20 40C9 40 0 31 0 20S9 0 20 0s20 9 20 20-9 20-20 20zm0-37C10.6 3 3 10.6 3 20s7.6 17 17 17 17-7.6 17-17S29.4 3 20 3z" />
                                <path d="M46.6 48.1c-.4 0-.8-.1-1.1-.4L32 34.2c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l13.5 13.5c.6.6.6 1.5 0 2.1-.2.3-.6.4-1 .4z" />
                            </svg>
                            <input id="search" type="text" placeholder="Search" />
                        </div>
                    </div>
                    <div className="section right">
                        <div className="desktop">
                            <button>
                                <svg className="_8-yf5 " height={24} viewBox="0 0 48 48" width={24}>
                                    <path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z" />
                                </svg>
                            </button>
                            <button>
                                <svg className="_8-yf5 " height={24} viewBox="0 0 48 48" width={24}>
                                    <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z" />
                                </svg>
                            </button>
                            <button>
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
                            </button>
                            <button>
                                <svg className="_8-yf5 " height={24} viewBox="0 0 48 48" width={24}>
                                    <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
                                </svg>
                            </button>
                            <button>
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
                            </button>
                        </div>
                        <div className="mobile">
                            <button>
                                <svg className="_8-yf5 " height={24} viewBox="0 0 48 48" width={24}>
                                    <path d="M20 40C9 40 0 31 0 20S9 0 20 0s20 9 20 20-9 20-20 20zm0-37C10.6 3 3 10.6 3 20s7.6 17 17 17 17-7.6 17-17S29.4 3 20 3z" />
                                    <path d="M46.6 48.1c-.4 0-.8-.1-1.1-.4L32 34.2c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l13.5 13.5c.6.6.6 1.5 0 2.1-.2.3-.6.4-1 .4z" />
                                </svg>
                            </button>
                            <button>
                                <svg className="_8-yf5 " height={24} viewBox="0 0 48 48" width={24}>
                                    <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            {props.children}
        </div>
    )
}
export default Layout