// import { useState } from "react";

const Inputs= () => {

    const tingupper = () => {
        const self = document.getElementById("ting");
        let p = self.selectionStart;
        self.value = self.value.toUpperCase();
        self.setSelectionRange(p, p);
    }

    const kelasupper = () => {
        const self = document.getElementById("kelas");
        let p = self.selectionStart;
        self.value = self.value.toUpperCase();
        self.setSelectionRange(p, p);
    }

    const cbopepupper = () => {
        const self = document.getElementById("cboPep");
        let p = self.selectionStart;
        self.value = self.value.toUpperCase();
        self.setSelectionRange(p, p);
    }

    return (
        <div class="m-3">
            <span>Darjah/Tingkatan(eg.Darjah 1 = D1, Tingkatan 1 = T1)</span>
            <input autoComplete="off" type="text" aria-label="Darjah/Tingkatan" class="form-control" id="ting" name="ting" onInput={tingupper}></input>
            <span>Kelas(eg.APPLE, HIGH_RAJIN)</span>
            <input autoComplete="off" type="text" aria-label="Kelas" class="form-control" id="kelas" name="kelas" onInput={kelasupper}></input>
            <span>Jenis Peperiksaan(eg.<br></br>1. PEPERIKSAAN PERTENGAHAN TAHUN = PPT, <br></br>2. PEPERIKSAAN AKHIR TAHUN = PAT , <br></br>3. UPSR = UPSRC, <br></br>4. Ujian 1 = U1</span>
            <input autoComplete="off" type="text" aria-label="Jenis Peperiksaan" class="form-control" id="cboPep" name="cboPep" onInput={cbopepupper}></input>
        </div>
    );
};

export default Inputs;
