// import { useState, useEffect, useRef } from "react";

import "./index.css";
import IC from "./components/ic";
import School from "./components/school";
import Inputs from "./components/inputs";
import Header from "./components/header"

const Home = () => {

    return (
        <div class="main">
            <Header />
            <form>
                <IC/>
                <div class="m-3"><School /></div>
                <Inputs />
                <div class="d-flex align-items-center visually-hidden mx-3" id="loading-d">
                    <strong>Loading...</strong>
                    <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                </div>
            </form>
            <div class="response" id="response"></div>
        </div>
    );
};

export default Home;
