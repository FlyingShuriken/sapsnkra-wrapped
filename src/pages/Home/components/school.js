import SelectSearch from 'react-select-search';
import { useState } from "react";

const School = () => {

    const [school, setSchool] = useState('');
    const checkStudentValid = (self) => {
        setSchool(self)
        console.log(self)
        const ic = document.getElementsByClassName("check-id")[0].value
        document.getElementById("loading-d").classList.remove("visually-hidden");
        fetch(`/api/v1/checkStudentValid/${self}/${ic}`)
            .then(response => response.json())
            .then(({status}) => {
                document.getElementById("loading-d").classList.add("visually-hidden");
                console.log(status)
                const obj = document.getElementsByClassName("select-search__input")[0];
                if(status === "TidakWujud") {
                    obj.classList.add("is-invalid");
                    obj.classList.remove("is-valid");
                    document.getElementsByClassName("check-school-danger")[0].classList.remove("visually-hidden");
                }else if(status === "Wujud") {
                    obj.classList.add("is-valid");
                    obj.classList.remove("is-invalid");
                    document.getElementsByClassName("check-school-danger")[0].classList.add("visually-hidden");
                    fetch(`/api/v1/checkValidYear/${ic}`)
                        .then(response => response.json())
                        .then(({status}) => {
                            document.getElementById("tahunc").innerHTML = status.match(/<option(.*)<\/option>/g)[1]
                            document.getElementById("tahunc").disabled = false;
                        })
                }
            })
    }

    return (
        <div class="main">
            <SelectSearch
                value={school}
                onChange={checkStudentValid}
                options={[]}
                getOptions={(query) => {
                    if(query.length > 3){
                    return new Promise((resolve, reject) => {
                        fetch(`/api/v1/search/${query}`)
                            .then(response => response.json())
                            .then(({ school }) => {
                                resolve(school.map(({ id, name, poscode }) => ({ value: id, name: `${id} - ${poscode} - ${name}` })))
                            })
                            .catch(reject);
                    });
                }}}
                search
                renderValue={(valueProps) => <input {...valueProps} tabindex="0" class="select-search__input" autoComplete="off"/>}
                placeholder="Search Your School (support: School Code, School Name, School Poscode)"
            />
                <strong class="check-school-danger text-danger visually-hidden">You have no data in this school</strong>
        </div>
    );
};

export default School;
