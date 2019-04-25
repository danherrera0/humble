import React from 'react';
import './App.css';

function NPCard(props) {
  return (
    <div className="NPCard">
    <h2 className="npName">{props.np.name}</h2>
    <img src={props.np.image}/>
    <h5>{props.np.location}</h5>
    <p>{props.np.category}</p>
    </div>
  );
}

export default NPCard;
