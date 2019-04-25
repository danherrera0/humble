import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function Nav() {
  return (
    <div className="Nav">
    <Link to="/" style={{textDecoration:"none", color:"white"}}><h1 className="title">Humble</h1></Link>
    <i className="fas fa-user"></i>
    <Link to="/Cal"><i className="fas fa-calendar-alt" ></i> </Link><hr/>
    <i className="fas fa-envelope"></i>
    </div>
  );
}

export default Nav;
