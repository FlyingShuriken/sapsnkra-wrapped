const Inputs= () => {

    return (
        <div class="m-3">
            <span>Darjah/Tingkatan(eg.Darjah 1 = D1, Tingkatan 1 = T1)</span>
            <input type="text" aria-label="Darjah/Tingkatan" class="form-control" name="ting"></input>
            <span>Kelas(eg.APPLE, HIGH_RAJIN)</span>
            <input type="text" aria-label="Kelas" class="form-control" name="kelas"></input>
            <span>Jenis Peperiksaan(eg.<br></br>1. PEPERIKSAAN PERTENGAHAN TAHUN = PPT, <br></br>2. PEPERIKSAAN AKHIR TAHUN = PAT , <br></br>3. UPSR = UPSRC, <br></br>4. Ujian 1 = U1</span>
            <input type="text" aria-label="Jenis Peperiksaan" class="form-control" name="cboPep"></input>
        </div>
    );
};

export default Inputs;
