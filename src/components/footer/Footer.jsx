import React from "react";
import FooterLogo from "./../../assets/img/footer-logo.png";

const Footer = () => {
    return (
        <>
            <div className="footer-box">
                <p>© 2022 Pulse wifi. All Rights Reserved.</p>
                <div className="footer-right">
                    <p>Partner MIET GOI</p>
                    <img src={FooterLogo} alt="Footer Logo" />
                </div>
            </div>
        </>
    );
};

export default Footer;
