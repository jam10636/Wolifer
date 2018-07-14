import React, { Component } from 'react';
import './childdiv.css'
import './childdiv.css'
class card extends Component {
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
            <h4><b>{this.props.Place}</b></h4>
            <p>{this.props.Name}</p>
          </div>
        </div>
        </div>
    )
  }
}
export default card
