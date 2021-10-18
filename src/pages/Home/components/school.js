import SelectSearch from 'react-select-search';

const School = () => {

    return (
        <SelectSearch
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
            placeholder="Search Your School (support: School Code, Schoo Name, School Poscode)"
        />
    );
};

export default School;
