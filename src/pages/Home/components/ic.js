const IC = () => {

    const checkID = async () => {
        const obj = document.getElementsByClassName("check-id")[0];
        const id = obj.value
        if(id.length === 12) {
            const req = await fetch(`/api/v1/checkID/${id}`);
            const res = await req.json();
            if(res.id === "TidakWujud") {
                obj.classList.add("is-invalid");
                document.getElementsByClassName("check-id-danger")[0].classList.remove("visually-hidden");
            }else if(res.id === "Wujud") {
                obj.classList.add("is-valid");
            }
        } else {
            obj.classList.remove("is-valid");
            obj.classList.remove("is-invalid");
            document.getElementsByClassName("check-id-danger")[0].classList.add("visually-hidden");
        }
    }

    return (
        <div class="main m-3">
            <strong>This project is still on development. Use it at your own risk!</strong>
            <div class="form-floating mb-3 m-1">
                <input type="text" class="form-control check-id" id="floatingInput" placeholder="Your IC Number" onInput={checkID}></input>
                <label for="floatingInput">Your IC Number</label>
                <strong class="check-id-danger text-danger visually-hidden">Invalid IC Number</strong>
            </div>
        </div>
    );
};

export default IC;
