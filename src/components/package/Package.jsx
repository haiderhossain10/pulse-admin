import React from "react";
import HeroImg from "./../../assets/img/hero-bage.png";
import MovieImg from "./../../assets/img/movie-bage.png";

const Package = () => {
    return (
        <>
            <div className="package-card">
                <div className="package-title">
                    <p>1yr Disney+ Hotstar Mobile & 48GB Extra</p>
                </div>
                <div className="package-price">
                    <h2>₹12</h2>
                </div>
                <div className="package-info">
                    <ul>
                        <li>
                            50GB <span>Data</span>
                        </li>
                        <li>
                            84 Days <span>Validity</span>
                        </li>
                    </ul>
                    <div className="package-bage">
                        <span>Validity</span>
                        <img src={HeroImg} alt="hero bage" />
                        <img src={MovieImg} alt="movie bage" />
                    </div>
                </div>
                <button>Buy</button>
            </div>
        </>
    );
};

export default Package;
