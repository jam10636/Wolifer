import React, { Component } from 'react';
import Children from './childdiv'
import './childdiv.css'
import axios from 'axios';
import { connect } from 'react-redux';
import Parent from './imagedetail'
class parents extends Component {
  constructor(props) {
   super(props);
  this.state = {
  clicked:false,
  place:'',
  url:'',
  detail:{
    place:'',
    long:Number,
    Lat:Number,
    descrption:'',
    location:''
  }
};
  this.handleclicked=this.handleclicked.bind(this);
  this.conditionalrendering=this.conditionalrendering.bind(this);
 }
 handleclicked(e,link)
 {
   this.props.dispatch()
   var url=e;
   axios.get('http://10.0.1.122:8080/detail?id='+'hot spring')
     .then(res => {
       var detailpage = res.data;
       this.setState({ detail:detailpage,clicked:true
       });
     });
 }

 conditionalrendering()
 {

   if(this.state.clicked==false)
   {
   return (
     <div className="row">
     {this.props.data.map((person,index)=>(
        <Children click={()=>this.handleclicked(person.place,person.id)}
        Name={person.place} Place={''} URL={require('./Images/'+person.id)} />
     ))}
     </div>
   );
   }
   else {
     return (
     <div className="row">
     <Parent
     name={this.state.detail[0].place}
      description={this.state.detail[0].descrption} location={this.state.detail[0].location}
      URL={require('./Images/'+'Buffalo.jpg')} />
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
const mapStateToProps=(state)=>({

})
export default connect()(parents);
