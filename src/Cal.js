
import React from 'react';
import './App.css';
import Nav from './Nav.js'

function Cal() {
  return (
    <div className="Cal">
    <Nav />
    <h1 className="eventHeader">Upcoming Events</h1>
    <iframe src="https://calendar.google.com/calendar/b/2/embed?showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=humbleappnyc%40gmail.com&amp;color=%231B887A&amp;ctz=America%2FNew_York" style={{border: "0px", width:"100%", height:"600px", position:"relative",top:"26px", frameBorder:"0", scrolling:"no"}}></iframe>
    </div>
  );
}

export default Cal;
