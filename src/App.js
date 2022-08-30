import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login/Login"
import Dashboard from "./Pages/Dashboard/Dashboard"

function App() {
    const [isLogin, setLogin] = useState((localStorage.getItem("token") ? localStorage.getItem("token") : false));

    return (
        <Router>
            <Routes>
                <Route path="/" element={(isLogin ? <Dashboard isLogin={isLogin} setLogin={setLogin} /> : <Login setLogin={setLogin} />)} />
            </Routes>
        </Router>
    );
}

export default App;
