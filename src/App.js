import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js'
import Cal from './Cal.js'
import Form from './Form.js'
import nonprofits from './nonprofits.json'
import NPCard from './Nonprofit.js'
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {withRouter} from 'react-router-dom'


class App extends Component{
  state={
    selectValue:"",
    selectdate:"",
    searchValue:"",
    filtered_nonprofits:null
  }

  inputSearch=(e, value)=>{
    e.preventDefault()

    let filtered = nonprofits.filter(nonprofit=>{
      return nonprofit.name.toLowerCase().includes(value)
    })
    this.setState({
      filtered_nonprofits: filtered
    })
    console.log(e.target.value)
  }

  handleChange=(e)=>{
    this.setState({selectValue: e.target.value})
  }

  selectDate=(e)=>{
    this.setState({selectDate: e.target.value})
  }

  render(){
  return (
    <div className="App">
    <Nav />

    <Form inputSearch={this.inputSearch}/>
    <select className="locationDropDown" value={this.state.value} onChange={this.handleChange}>
    <option>Choose Location</option>
    <option value="Manhattan">Manhattan</option>
    <option value="Queens">Queens</option>
    <option value="Bronx">Bronx</option>
    <option value="Brooklyn">Brooklyn</option>
    <option value="Staten Island">Staten Island</option>
    <option value="New Jersey">New Jersey</option>
    </select>
    <form className="datepicker">
      <input onChange={this.selectDate} value="" className="dateInput" type="date" name="date"/>
    </form>
    <h2 className="topEvents">Top Events</h2>
    <hr/>
    { this.state.filtered_nonprofits!== null ? this.state.filtered_nonprofits.map(np=>{
      return(<NPCard key={np.name} np={np}/>)}) : nonprofits.map(np=>{return(<NPCard key={np.name} np={np}/>
    )})}
    </div>
  )
}
}
export default withRouter(App);
