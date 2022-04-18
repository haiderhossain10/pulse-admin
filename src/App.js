import React from "react";
import { Route, Routes } from "react-router-dom";
import Connected from "./pages/Connected";
import Index from "./pages/Index";
import Opt from "./pages/Opt";
import Payment from "./pages/Payment";
import ProfileSetup from "./pages/ProfileSetup";
import Recharge from "./pages/Recharge";

const App = () => {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<Index title="Puls Dashboard | Index Page" />}
                />
                <Route
                    path="/otp"
                    element={<Opt title="Puls Dashboard | OTP Page" />}
                />
                <Route
                    path="/profile-setup"
                    element={
                        <ProfileSetup title="Puls Dashboard | Profile Setup Page" />
                    }
                />
                <Route
                    path="/connected"
                    element={
                        <Connected title="Puls Dashboard | Connected Page" />
                    }
                />
                <Route
                    path="/recharge"
                    element={
                        <Recharge title="Puls Dashboard | Recharge Page" />
                    }
                />
                <Route
                    path="/payment"
                    element={<Payment title="Puls Dashboard | Recharge Page" />}
                />
            </Routes>
        </>
    );
};

export default App;
