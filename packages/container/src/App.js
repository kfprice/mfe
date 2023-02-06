import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Header from './components/Header';

// container change ewuifaghowepfl
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
