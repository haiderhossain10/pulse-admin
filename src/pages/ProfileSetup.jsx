import React, { useEffect } from "react";
import { ReactComponent as Logo } from "./../assets/img/logo.svg";
import ImageMan from "./../assets/img/number-man.png";
import { Link } from "react-router-dom";
import FooterLogo from "./../assets/img/footer-logo.png";
import ProfileBg from "./../assets/img/profile-bg.png";

const ProfileSetup = (props) => {
    useEffect(() => {
        document.title = props.title;
    }, [props]);
    return (
        <>
            <div>
                <div className="number-box profile-box">
                    <div className="number-sidebar profile-sidebar">
                        <div className="number-logo">
                            <Link to="/">
                                <Logo />
                            </Link>
                        </div>
                        <div className="profile-bg">
                            <img src={ProfileBg} alt="Profile Background" />
                        </div>
                    </div>
                    <div className="number-right-content opt-right-content">
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
                        <div className="profile-form">
                            <h4>Profile Setup</h4>
                            <p>Enter your information to continue</p>
                            <form>
                                <div className="input-container">
                                    <div className="input-box">
                                        <label>First Name</label>
                                        <input type="text" />
                                    </div>
                                    <div className="input-box">
                                        <label>Last Name</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="input-container">
                                    <div className="input-box">
                                        <label>Email</label>
                                        <input type="email" />
                                    </div>
                                    <div className="input-box">
                                        <label>State</label>
                                        <select>
                                            <option>West Bengal</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="input-container">
                                    <div className="input-box">
                                        <label>District</label>
                                        <select>
                                            <option>Purba Barddhanan</option>
                                            <option>Purba Barddhanan</option>
                                        </select>
                                    </div>
                                    <div className="input-box">
                                        <label>Pin Code</label>
                                        <input type="number" />
                                    </div>
                                </div>
                                <button>Next</button>
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
                                    © 2022 Simplifon Technologies Private
                                    Limited - All Rights Reserved
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
        </>
    );
};

export default ProfileSetup;
