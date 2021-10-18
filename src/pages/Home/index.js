// import { useState, useEffect, useRef } from "react";

import "./index.css";
import IC from "./components/ic";
import School from "./components/school";
import Inputs from "./components/inputs";

const Home = () => {

    const switchInternalSchoolCode = () => {
        const obj = document.getElementsByClassName("select-search__input")[0];
        const x = document.forms[0]["kodsek"].value;
        obj.value = x.split(" ")[0]
    }

    return (
        <div class="main">
            <form method="POST" action="https://sapsnkra.moe.gov.my/ibubapa2/slipmr.php" target="_blank">
                <IC/>
                <div class="m-3"><School /></div>
                <Inputs />
                <button type="submit" class="btn btn-primary m-3" onClick={switchInternalSchoolCode}>Submit</button>
            </form>
        </div>
    );
};

export default Home;
