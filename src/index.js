import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Cal from './Cal.js'
import Profile from './Profile.js'

ReactDOM.render(
  <Router>
  <Switch>
  <Route exact path="/" component={App} />
  <Route exact path="/Cal" component={Cal} />
  <Route exact path="/profile" component={Profile} />

  </Switch>
  </Router>
,

document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
