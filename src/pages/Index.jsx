import React, { useEffect } from "react";
import { ReactComponent as Logo } from "./../assets/img/logo.svg";
import NumberMobile from "./../assets/img/number-mobile.png";
import GoogleBtn from "./../assets/img/google-btn.png";
import AppleBtn from "./../assets/img/apple-btn.png";
import ImageMan from "./../assets/img/number-man.png";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";

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
                    <img src={NumberMobile} alt="" />
                    <h2>
                        Download <span>Pluse</span> on the android or ios app
                        for a<span> Better Experince</span>
                    </h2>
                    <div className="number-btn">
                        <button>
                            <img src={GoogleBtn} alt="Google Button" />
                        </button>
                        <button>
                            <img src={AppleBtn} alt="Apple Button" />
                        </button>
                    </div>
                </div>
                <div className="number-right-content">
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
                                suscipit lorem quis,{" "}
                            </p>
                            <div className="number-input">
                                <input type="number" placeholder="+91" />
                                <button type="submit">Continue</button>
                            </div>
                        </form>
                    </div>
                    <svg
                        className="object-box"
                        width="154"
                        height="197"
                        viewBox="0 0 154 197"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="84.8571" height="196.429" fill="#FFEAEB" />
                        <path
                            d="M66 196.429V105.286L99 146.5V196.429H66Z"
                            fill="#EC8E92"
                        />
                        <path
                            d="M154 145.963L99.4545 146.143L66 105.286H117.818L154 145.963Z"
                            fill="#FFDADC"
                        />
                        <path
                            d="M99 146.325L154 146.143V196.428H99V146.325Z"
                            fill="#BC3C44"
                        />
                        <rect
                            x="15.7148"
                            y="105.286"
                            width="50.2857"
                            height="91.1429"
                            fill="#BC3C44"
                        />
                        <rect
                            x="28.2852"
                            y="51.8574"
                            width="7.85714"
                            height="72.2857"
                            fill="white"
                        />
                        <rect
                            x="36.1445"
                            y="51.8574"
                            width="4.71429"
                            height="72.2857"
                            fill="#61050A"
                        />
                    </svg>
                </div>

                <img className="object-man" src={ImageMan} alt="Object Man" />
                <Footer />
            </div>
        </>
    );
};

export default Index;
