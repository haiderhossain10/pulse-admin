import React, { useEffect } from "react";
import { ReactComponent as Logo } from "./../assets/img/logo.svg";
import { Link } from "react-router-dom";
import FooterLogo from "./../assets/img/footer-logo.png";
import ProfileBg from "./../assets/img/profile-bg.png";

const Recharge = (props) => {
    useEffect(() => {
        document.title = props.title;
    }, []);
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
                    <div className="number-right-content fix-right-content">
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

                        <div className="recharge-form">
                            <h2>Recharge PulseWiFi</h2>
                            <form>
                                <div className="recharge-input">
                                    <input
                                        type="text"
                                        placeholder="Enter your Mobile Number"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Enter recharge amount ($)"
                                    />
                                </div>
                            </form>
                            <p>
                                Online Recharge for 901 to get: 1 year Disney+
                                Hotstar subscription, unlimited calls, 3GB/day +
                                48GB Extra for 7 Days
                            </p>
                        </div>

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
                    </div>
                </div>
            </div>
        </>
    );
};

export default Recharge;
