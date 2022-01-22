import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, flags,region,timezones,capital, population} = props.countrise;
    // console.log(props.countrise)

    
    return (
       
            <div  className='country' >
            <img src={flags.png} alt="" width="200px" />
            <h2>{name.official}</h2>
            <h5>Capital: {capital}</h5>
            <h5>Region: {region}</h5>
            <h5>Timezone: {timezones}</h5>
            <h5>Population: {population}</h5>
        </div>
    );
};

export default Country;