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

    const fetchIfValid = () => {
        switchInternalSchoolCode()
        const nokp = document.getElementsByClassName("check-id")[0].value;
        const kodsek = document.getElementsByClassName("select-search__input")[0].value;
        const ting = document.getElementById("ting").value;
        const kelas = document.getElementById("kelas").value;
        const tahun = document.getElementById("tahun").value;
        const cboPep = document.getElementById("cboPep").value;

        fetch(`../api/v1/check/${kodsek}/${tahun}/${ting}/${kelas}/${nokp}/${cboPep}`)
            .then(function(response) {
                return response.json();
            }).then(res => {
                console.log(res);
                document.getElementById("response").innerHTML = (res["res"])
                document.getElementById("response").innerHTML = document.getElementById("response").innerHTML.replace(/width="[0-9][0-9][0-9]"|width="[1-9]"|width="[0-9][0-9]"/g,"")
                document.getElementById("response").classList.add("border-dark");
                const url = document.getElementsByTagName("img")[0].src;
                const pathname = new URL(url).pathname
                document.getElementsByTagName("img")[0].src = `https://sapsnkra.moe.gov.my/${pathname}`
                document.getElementById("response").scrollIntoView({behavior: 'smooth'});
            })
    }

    return (
        <div class="main">
            <form>
                <IC/>
                <div class="m-3"><School /></div>
                <Inputs />
                <button type="button" class="btn btn-primary m-3" onClick={fetchIfValid}>Check</button>
            </form>
            <div class="response" id="response"></div>
        </div>
    );
};

export default Home;
