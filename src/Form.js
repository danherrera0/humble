import React, {Component} from 'react';
import './App.css';

class Form extends Component{
  state={
    value:""
  }

  inputSearch=(e)=>{
    e.preventDefault()
    console.log(e.target.value)
  }

  render(){
  return (
    <form id="form">
    <label><i className="fas fa-search" style={{color:"white"}}></i></label>
    <input className="formInput" style={{color:"black"}} onChange={e=>this.inputSearch(e)} placeholder="search organization, event, neighborhood" type="text" name="search" value={this.state.value}/>
    </form>
  )
}
}
export default Form;
