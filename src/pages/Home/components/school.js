import SelectSearch from 'react-select-search';
// import "./style.css" from 'react-select-search';

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
            placeholder="Your favorite drink"
        />
    );
};

export default School;
