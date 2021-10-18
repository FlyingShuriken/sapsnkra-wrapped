// import { useState, useEffect, useRef } from "react";
// import axios from 'axios';

import "./index.css";
import IC from "./components/ic";
import School from "./components/school";

const Home = () => {

    return (
        <div class="main">
            <IC/>
            <div class="m-3"><School /></div>
        </div>
    );
};

export default Home;