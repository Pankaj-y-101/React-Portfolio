import React from 'react';
import Card from './Card';
import Data from './Data';

const Services=()=>{
    return(
        <>
        <div className="container">
        <h1>Services</h1>
        <div className="row gy-2">
            {Data.map((value,index)=>{
            return<Card  key={index} name={value.title} imgsrc={value.imgsrc} />
        })}</div>
</div>
  </>
    );
}
export default Services;