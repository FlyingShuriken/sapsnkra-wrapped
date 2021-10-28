// import { useState } from "react";

const Inputs= () => {

    const checkClassAndPaper = () => {
        const nokp = document.getElementsByClassName("check-id")[0].value;
        const self = document.getElementById("tahunc").value;
        document.getElementById("loading-d").classList.remove("visually-hidden");
        fetch(`/api/v1/checkClassAndPaper/${nokp}/${self}`)
            .then(response => response.json())
            .then(({status}) => {
                document.getElementById("loading-d").classList.add("visually-hidden");
                if(status.replace(/ /g,"")==="TidakWujud") {
                    document.getElementsByClassName("check-age-danger")[0].classList.remove("visually-hidden")
                    document.getElementsByClassName("tingc")[0].innerHTML = "";
                    document.getElementsByClassName("kelasc")[0].innerHTML = "";
                    return
                } else {
                    document.getElementsByClassName("check-age-danger")[0].classList.add("visually-hidden")
                    const s = status.match(/\|(.*)\|\(/g)[0].replace(/\(/g,"").split("|").filter(e => e !== '');
                    const a = s[0];
                    const k = s[1];
                    document.getElementsByClassName("tingc")[0].innerHTML = a;
                    document.getElementsByClassName("kelasc")[0].innerHTML = k;
                    document.getElementById("cboPep").innerHTML = status.match(/<option(.*)<\/option>/g)[0]
                    var arr = status.match(/,'(.*)'\)/g)[0].replace(/\)/g,"").split(",").slice(1);
                    arr.forEach(e => {arr[arr.indexOf(e)]=e.replace(/'/g,"")})
                    var inv_arr = ""
                    inv_arr += `<input type="hidden" name="nokp" id="nokp" value="${arr[0]}">`
                    inv_arr += `<input type="hidden" name="kodsek" id="kodsek" value="${arr[1]}">`
                    inv_arr += `<input type="hidden" name="ting" id="ting" value="${arr[2]}">`
                    inv_arr += `<input type="hidden" name="kelas" id="kelas" value="${arr[3]}">`
                    inv_arr += `<input type="hidden" name="tahun" id="tahun" value="${arr[4]}">`
                    document.getElementById("f-value").innerHTML = inv_arr
                    document.getElementById("cboPep").disabled = false;
                    const obj = document.getElementsByClassName("select-search__input")[0];
                    const x = document.forms[0]["kodsek"].value;
                    obj.value = x.split(" ")[0]
                }
            })
    }

    const fetchIfValid = () => {
        document.getElementById("loading-d").classList.remove("visually-hidden");
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
            document.getElementById("loading-d").classList.add("visually-hidden");
    }

    return (
        <div class="m-3">
            <span>Tahun:</span>
            <select class="form-select mb-2" disabled id="tahunc" name="tahunc" aria-label="Tahun" onChange={checkClassAndPaper}></select>
            <strong class="check-age-danger text-danger visually-hidden">No data is recorded in this year</strong>
            <p>Tahun/Tingkatan: <p class="tingc m-0"></p></p>
            <p>Kelas: <p class="kelasc m-0"></p></p>
            <span>Jenis Peperiksaan: </span>
            <div id="f-value"></div>
            <select class="form-select" disabled id="cboPep" name="cboPep" aria-label="Peperiksaan" onChange={fetchIfValid}></select>
        </div>
    );
};

export default Inputs;
