import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Header from './components/Header';

// Testing new branch
export default () => {
    return (
<BrowserRouter> 
    <div>
        <Header />
        <MarketingApp />
    </div>
    </BrowserRouter>
    );
};
