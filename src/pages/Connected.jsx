import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./../assets/img/logo.svg";
import { ReactComponent as Apple } from "./../assets/img/apple-btn.svg";
import { ReactComponent as Google } from "./../assets/img/google-btn.svg";
import ConnectTower from "./../assets/img/connect-tower.png";
import ConnectLaptop from "./../assets/img/connect-laptop.png";
import FooterLogo from "./../assets/img/footer-white-logo.png";
import ConnectLine from "./../assets/img/connect-line.png";

const Connected = (props) => {
    useEffect(() => {
        document.title = props.title;
    }, [props]);
    return (
        <div className="connect-box">
            <div className="main-header">
                <div className="main-header-logo">
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>
                <div className="main-header-lang">
                    <select>
                        <option>English</option>
                        <option>Bangla</option>
                        <option>Hindi</option>
                    </select>
                </div>
            </div>
            <div className="main-connect-info">
                <h2>Voila! You are Now Connected to the Internet</h2>
                <p>
                    You have 15 minutes of free internet access, Please download
                    our app or <Link to="/">Click Here</Link> to recharge a
                    package to continue the Internet
                </p>
                <button>Recharge Now</button>

                <div className="number-btn">
                    <button>
                        <Apple />
                    </button>
                    <button>
                        <Google />
                    </button>
                </div>
            </div>
            <img className="connect-tower" src={ConnectTower} />
            <img className="connect-laptop" src={ConnectLaptop} />
            <div className="footer-content footer-fix">
                <div className="footer-content-info">
                    <ul>
                        <li>Terms and Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                    <p>
                        © 2022 Simplifon Technologies Private Limited - All
                        Rights Reserved
                    </p>
                </div>
                <img src={FooterLogo} alt="Footer Logo" />
            </div>
        </div>
    );
};

export default Connected;
