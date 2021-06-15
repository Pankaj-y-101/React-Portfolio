import React from 'react';
import { NavLink } from 'react-router-dom';

const Common=(props)=>{
    return(
        <>
        <section className="header d-flex flex-row-reverse mt-5">
            <div className="container-fluid col-5 para-pos">
             <h1 className="para-text">{props.name}</h1>
             <h2 className="para-text">I can design your website to attract your customer.</h2>
            <div className="btn">
             <NavLink to={props.visit} className="btn-get">{props.btname}</NavLink>
            </div>
            </div>
            <div className="img-fluid">
                <img src={props.imgsrc} className="img-size img-animation" alt={props.imgsrc} />
            </div>
        </section>
        </>
    );
}
export default Common;