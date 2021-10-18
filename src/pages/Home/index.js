// import { useState, useEffect, useRef } from "react";

import "./index.css";
import IC from "./components/ic";
import School from "./components/school";
import Inputs from "./components/inputs";

const Home = () => {

    return (
        <div class="main">
            <IC/>
            <div class="m-3"><School /></div>
            <Inputs />
        </div>
    );
};

export default Home;
