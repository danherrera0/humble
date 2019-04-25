import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js'
import Form from './Form.js'
import 'font-awesome/css/font-awesome.min.css'
import nonprofits from './nonprofits.json'
import NPCard from './Nonprofit.js'

class App extends Component{
  state={
    selectValue:"",
    selectdate:""
  }

  handleChange=(e)=>{
    this.setState({selectValue: e.target.value})
  }

  selectDate=(e)=>{
    this.setState({selectDate: e.target.value})
  }

  render(){
  console.log(nonprofits)
  return (
    <div className="App">
    <Nav />
    <Form />
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
      <input onChange={this.selectDate} className="dateInput" type="date" name="date"/>
    </form>
    <h2 className="topEvents">Top Events</h2>
    <hr/>
    {nonprofits.map(np=>{
      return <NPCard np={np}/>
    })}
    </div>
  )
}
}
export default App;
