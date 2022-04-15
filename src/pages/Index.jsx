import React, { useEffect } from "react";
import { ReactComponent as Logo } from "./../assets/img/logo.svg";
import NumberMobile from "./../assets/img/number-mobile.png";
import ImageMan from "./../assets/img/number-man.png";
import { Link } from "react-router-dom";
import { ReactComponent as Apple } from "./../assets/img/apple-btn.svg";
import { ReactComponent as Google } from "./../assets/img/google-btn.svg";
import FooterLogo from "./../assets/img/footer-logo.png";

const Index = (props) => {
    useEffect(() => {
        document.title = props.title;
    }, [props]);
    return (
        <>
            <div className="number-box">
                <div className="number-sidebar">
                    <div className="number-logo">
                        <Link to="/">
                            <Logo />
                        </Link>
                    </div>
                    <div className="number-hand-img">
                        <img src={NumberMobile} alt="" />
                    </div>
                    <h2>
                        Install <span>PulseWiFi</span> app on the Android or iOS
                        for <span> Seamless WiFi Experience</span>
                    </h2>
                    <div className="number-btn">
                        <button>
                            <Apple />
                        </button>
                        <button>
                            <Google />
                        </button>
                    </div>
                </div>
                <div className="number-right-content">
                    <div className="mobile-header">
                        <Logo />
                    </div>
                    <div className="lang-select">
                        <select>
                            <option value="">English</option>
                            <option value="">Hindi</option>
                            <option value="">Bangla</option>
                        </select>
                    </div>
                    <div className="number-info">
                        <h2>Hola! You areconnected to the PM-WanI PulseWiFi</h2>
                        <svg
                            width="79"
                            height="112"
                            viewBox="0 0 79 112"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M73.5864 111.573L0.648978 28.8474L78.5002 0.499854L73.5864 111.573Z"
                                fill="black"
                            />
                        </svg>
                    </div>
                    <div className="number-form">
                        <form>
                            <h4>Enter Mobile Number to Continue</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Donec at risus maximus,
                                suscipit lorem quis,
                            </p>
                            <div className="number-input">
                                <input
                                    type="number"
                                    placeholder="+91"
                                    minLength="1"
                                    maxLength="3"
                                />
                                <input
                                    type="number"
                                    placeholder="9933-711-955"
                                />
                                <button type="submit">Continue</button>
                            </div>
                        </form>
                    </div>
                    <svg
                        className="object-box"
                        width="154"
                        height="196"
                        viewBox="0 0 154 196"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="84.8571" height="196" fill="#FFEAEB" />
                        <path
                            d="M66 196.001V105.057L99 146.181V196.001H66Z"
                            fill="#EC8E92"
                        />
                        <path
                            d="M154 145.645L99.4545 145.825L66 105.057H117.818L154 145.645Z"
                            fill="#FFDADC"
                        />
                        <path
                            d="M99 146.005L154 145.823V195.999H99V146.005Z"
                            fill="#BC3C44"
                        />
                        <rect
                            x="15.7148"
                            y="105.057"
                            width="50.2857"
                            height="90.944"
                            fill="#BC3C44"
                        />
                        <rect
                            x="28.2852"
                            y="51.7441"
                            width="7.85714"
                            height="72.128"
                            fill="white"
                        />
                        <rect
                            x="36.1445"
                            y="51.7441"
                            width="4.71429"
                            height="72.128"
                            fill="#61050A"
                        />
                    </svg>
                    <div className="footer-content">
                        <div className="footer-content-info">
                            <ul>
                                <li>Terms and Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                            <p>
                                © 2022 Simplifon Technologies Private Limited -
                                All Rights Reserved
                            </p>
                        </div>
                        <img src={FooterLogo} alt="Footer Logo" />
                    </div>

                    <img
                        className="object-man"
                        src={ImageMan}
                        alt="Object Man"
                    />
                </div>
            </div>
        </>
    );
};

export default Index;
