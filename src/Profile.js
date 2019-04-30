import React from 'react';
import './App.css';
import Nav from './Nav.js'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Profile() {
  return (
    <div className="profile">
      <Nav />
      <div className="userInfo">
      <h3>User Name</h3>
      <p>User Address</p>
      <p>User Phone</p>
      <p>User Email</p>
      <p>User Bio</p>
      </div>
      <div className="userOrgs">
      <h1>Your organizations</h1>
      </div>
      <div className="userEvents">
      <h1>Your Upcoming Events</h1>
      </div>
    </div>
  );
}

export default Profile;
