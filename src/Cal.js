
import React from 'react';
import './App.css';
import Nav from './Nav.js'

function Cal() {
  return (
    <div className="Cal">
    <Nav />
    <h1>Upcoming Events </h1>
    <iframe src="https://calendar.google.com/calendar/embed?src=humbleappnyc%40gmail.com&ctz=America%2FNew_York" style={{border: "0px", width:"100%", height:"600px", frameBorder:"0", scrolling:"no"}}></iframe>
    </div>
  );
}

export default Cal;
