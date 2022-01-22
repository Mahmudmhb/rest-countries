import React, { useEffect, useState } from 'react';
import Country from './Country/Country';
import './Country/Country'

const LoadCountricse = () => {
    const [countrises, setCountrises]= useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data=> setCountrises(data))
    },[])
    return (
        <div>
            <h1>Available Country {countrises.length} In the World</h1>
            <div className='countris'>
            {
                countrises.map(countrise=> <Country
                    keys={countrise.aera}
                countrise={countrise}
                ></Country>)
            }
            </div>
        </div>
    );
};

export default LoadCountricse;