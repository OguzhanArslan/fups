import { Routes, Route } from "react-router-dom";

import Login from "./Pages/Login/Login"
import Dashboard from "./Pages/Dashboard/Dashboard"

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} exact />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </>

    );
}

export default App;
