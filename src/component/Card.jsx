import React from 'react';

const Card=(props)=>{
    return(
        <>
        <div className="col-sm-4">
        <div className="card-group">
  <div className="card">
    <img src={props.imgsrc} className="card-img-top img-responsive" alt={props.imgsrc} />
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
    </div>
  </div>
  </div>
  </div>
  </>
    );
}

export default Card;