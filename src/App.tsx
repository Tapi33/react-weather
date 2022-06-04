import React from 'react';
import { Routes, Route } from "react-router-dom"
import {Home} from "./pages/home/Home";
import {MonthStatistics} from "./pages/MonthStatistics/MonthStatistics";
import {Header} from "./shared/header/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"month-statistics"} element={<MonthStatistics />} />
            </Routes>
        </div>
    );
}

export default App;
