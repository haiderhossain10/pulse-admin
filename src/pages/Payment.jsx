import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./../assets/img/logo-02.svg";
import Razorpay from "./../assets/img/razorpay.png";
import instamojo from "./../assets/img/instamojo.png";
import Card1 from "./../assets/img/card-01.png";
import Card2 from "./../assets/img/card-02.png";
import Card3 from "./../assets/img/card-03.png";
import Card4 from "./../assets/img/card-04.png";
import FooterLogo from "./../assets/img/footer-logo.png";

const Payment = () => {
    return (
        <>
            <div className="payment-box">
                <div className="main-header">
                    <div className="main-header-logo">
                        <Link to="/">
                            <Logo />
                        </Link>
                    </div>
                    <div className="lang-select">
                        <select>
                            <option value="">English</option>
                            <option value="">Hindi</option>
                            <option value="">Bangla</option>
                        </select>
                    </div>
                </div>
                <div className="payment-content-box">
                    <div className="payment-option">
                        <h2>Choose Payment Gateway</h2>
                        <div className="payment-bar">
                            <label className="payment-radio">
                                <input type="radio" name="payment" />
                                <span></span>
                            </label>
                            <div className="payment-card">
                                <img src={Razorpay} alt="Razorpay" />
                                <ul>
                                    <li>Cards, UPI, Wallets</li>
                                    <li>Paypal, Netbanking</li>
                                </ul>
                            </div>
                            <div className="payment-card-option">
                                <img src={Card1} alt="card  1" />
                                <img src={Card2} alt="card  2" />
                                <img src={Card3} alt="card  3" />
                                <img src={Card4} alt="card  4" />
                            </div>
                        </div>
                        <div className="payment-bar">
                            <label className="payment-radio">
                                <input type="radio" name="payment" />
                                <span></span>
                            </label>
                            <div className="payment-card">
                                <img src={instamojo} alt="Razorpay" />
                                <ul>
                                    <li>Credit Card, Debit Card, Netbanking</li>
                                    <li>Wallets, UPI, NEFT/ Bank Transfer </li>
                                </ul>
                            </div>
                            <div className="payment-card-option">
                                <img src={Card1} alt="card  1" />
                                <img src={Card2} alt="card  2" />
                                <img src={Card3} alt="card  3" />
                                <img src={Card4} alt="card  4" />
                            </div>
                        </div>
                    </div>
                    <div className="payment-info">
                        <p>Recharge Summary</p>
                        <div className="payment-recharge-box">
                            <div className="payment-charge-profile">
                                <div className="payment-img">
                                    <svg
                                        width="45"
                                        height="45"
                                        viewBox="0 0 45 45"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M22.5 39.375C31.8198 39.375 39.375 31.8198 39.375 22.5C39.375 13.1802 31.8198 5.625 22.5 5.625C13.1802 5.625 5.625 13.1802 5.625 22.5C5.625 31.8198 13.1802 39.375 22.5 39.375Z"
                                            stroke="#FF2431"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M23.4375 5.625C26.5962 10.6868 28.2709 16.5335 28.2709 22.5C28.2709 28.4665 26.5962 34.3132 23.4375 39.375M6.75 16.875H38.25H6.75ZM6.75 28.125H38.25H6.75ZM21.5625 5.625C18.4038 10.6868 16.7291 16.5335 16.7291 22.5C16.7291 28.4665 18.4038 34.3132 21.5625 39.375V5.625Z"
                                            stroke="#FF2431"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4>Daily</h4>
                                    <h6>₹15</h6>
                                    <p>Change Plane</p>
                                </div>
                            </div>
                            <div className="payment-table">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Date and Time </td>
                                            <td>11 Mar, 2022 at 3:32 am</td>
                                        </tr>
                                        <tr>
                                            <td>Mobile Number</td>
                                            <td>9933711955</td>
                                        </tr>
                                        <tr>
                                            <td>Amount</td>
                                            <td>₹15.00</td>
                                        </tr>
                                        <tr>
                                            <td>Order ID</td>
                                            <td>Pre9663010185831955</td>
                                        </tr>
                                        <tr>
                                            <td>Mode of Payment</td>
                                            <td>UPI</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="payment-dashed"></div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Total</td>
                                            <td>
                                                <b>$49:00</b>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button>Proceed to Recharge</button>
                            </div>
                        </div>
                        <h4>Don’t worry. Your money is safe!</h4>
                        <p>100% secured payments</p>
                    </div>
                </div>
                <div className="footer-content footer-fix footer-color-fix">
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
        </>
    );
};

export default Payment;
