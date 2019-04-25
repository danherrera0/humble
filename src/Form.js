import React, {Component} from 'react';
import './App.css';
import nonprofits from './nonprofits.json'


class Form extends Component{
  state={
    value:""
  }

  handleChange=(e)=>{
    this.setState({value:e.target.value},(this.props.inputSearch(e,this.state.value)))

  }

  render(){
  return (
    <form id="form" onChange={e=>this.handleChange(e)}>
    <label><i className="fas fa-search" style={{color:"white"}}></i></label>
    <input className="formInput" style={{color:"black"}} placeholder="search organization, event, neighborhood" type="text" name="search" value={this.state.value}/>
    </form>
  )
}
}
export default Form;
