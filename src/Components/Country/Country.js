import React from 'react';

const Country = (props) => {
    //console.log(props.country);
   // console.log(props);
    const {name,population, region,flag}=props.country;
   const flagStyle={height:'50px'}
   const countryStyle={border:'1px solid red', margin:'10px',padding:'10px'}
   const handleAddCountry=props.handleAddCountry;
   return (
        <div style={countryStyle}>
            <h1>this is country {name}</h1>
            <img style={flagStyle} src={flag} alt=""/>
            <h2>population:{population}</h2>
             <h3>region {region}</h3>
             <button onClick={() => handleAddCountry(props.country)}>add click</button>
    
            
        </div>
    );
};

export default Country;