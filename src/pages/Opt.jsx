import React, { useEffect } from "react";
import { ReactComponent as Logo } from "./../assets/img/logo.svg";
import ImageMan from "./../assets/img/number-man.png";
import BrandLogo from "./../assets/img/brand-logo.png";
import { Link } from "react-router-dom";
import { ReactComponent as Apple } from "./../assets/img/apple-btn.svg";
import { ReactComponent as Google } from "./../assets/img/google-btn.svg";
import FooterLogo from "./../assets/img/footer-logo.png";

const Opt = (props) => {
    useEffect(() => {
        document.title = props.title;
    }, [props]);
    return (
        <div>
            <div className="number-box opt-box">
                <div className="number-sidebar opt-sidebar">
                    <div className="number-logo">
                        <Link to="/">
                            <Logo />
                        </Link>
                    </div>
                    <h2>
                        Download <span>Plusewifi</span> on the android or ios
                        app for a better experince
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec at risus maximus, suscipit lorem quis,{" "}
                    </p>
                    <div className="number-btn">
                        <button>
                            <Apple />
                        </button>
                        <button>
                            <Google />
                        </button>
                    </div>
                    <div className="opt-sidebar-mobile">
                        <img src={BrandLogo} alt="Brand Logo" />
                    </div>
                </div>
                <div className="number-right-content opt-right-content">
                    <div className="mobile-header">
                        <Logo />
                    </div>
                    <div className="opt-verification">
                        <h4>OTP Verification</h4>
                        <p>
                            Enter the 5 digit OTP sent to <br /> +91 987654321
                            (Email incorrect? <a href="#">Change</a> )
                        </p>
                        <form>
                            <div className="opt-input">
                                <input type="number" min="1" max="1" />
                                <input
                                    type="number"
                                    min="1"
                                    max="1"
                                    minLength="1"
                                />
                                <input type="number" min="1" max="1" />
                                <input type="number" min="1" max="1" />
                            </div>
                            <div className="opt-btn">
                                <button type="submit">verify</button>
                                <Link to="/">Resend OTP in 39 sec</Link>
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
        </div>
    );
};

export default Opt;
