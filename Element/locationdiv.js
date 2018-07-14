import React, { Component } from 'react';
import Children from './childdiv'
import './childdiv.css'
import axios from 'axios';
class parents extends Component {
  constructor(props) {
   super(props);
  this.state = { clicked:false,
  id:''};
  this.handleclicked=this.handleclicked.bind(this);
  this.conditionalrendering=this.conditionalrendering.bind(this);
 }
 handleclicked(e)
 {
   console.log(e);
   this.setState({clicked:true})
 }
 conditionalrendering()
 {
   if(this.state.clicked==false)
   {
     return (
       <div className="row">
       {this.props.data.map((person,index)=>(
          <Children click={()=>this.handleclicked(person.place)} Name={person.place} Place={''} URL={require('./Images/'+person.id)} />
       ))}
       </div>
     );
   }
   else {
     return (
     <div className="row">
     <Children Name={"kevin"} Place={''} URL={''}/>
     </div>
   )
   }
 }
  render() {
    return (
      <div className="row">
      {this.conditionalrendering()}
      </div>
    );
  }
}
export default parents
