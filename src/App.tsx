import React from 'react';
import {Routes, Route} from "react-router-dom"
import {Home} from "./pages/home/Home";
import {MonthStatistics} from "./pages/MonthStatistics/MonthStatistics";
import {Header} from "./shared/header/Header";
import {Popup} from "./shared/Popup/Popup";

function App() {
    return (
        <div className="global_container">
            <div className="container">
                <Header/>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"month-statistics"} element={<MonthStatistics/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
