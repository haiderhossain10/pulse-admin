import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Opt from "./pages/Opt";

const App = () => {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<Index title="Puls Dashboard | Index Page" />}
                />
                <Route
                    path="/opt"
                    element={<Opt title="Puls Dashboard | OPT Page" />}
                />
            </Routes>
        </>
    );
};

export default App;
