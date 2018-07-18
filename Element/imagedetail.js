import React, { Component } from 'react';
import './childdiv.css';
class detail extends Component {
  constructor(props) {
   super(props);
   this.state = {
     URl:'',
     Place:"",
     Name:"",
 };
}
  render() {
    return (
      <div className="column" onClick={this.props.click} >
      <div className="card">
          <img src={this.props.URL}
          alt="Avatar" style={{width:"100%"}} />
          <div className="container">
            <h4 style={{textAlign:'center'}}><b>{this.props.name}</b></h4>
            <h4 style={{textAlign:'center'}}><b>{this.props.location}</b></h4>
            <h4 style={{textAlign:'center'}}><b>{this.props.description}</b></h4>
          </div>
        </div>
        </div>
    )
  }
}
export default detail
