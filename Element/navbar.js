import React, { Component } from 'react';
import ReactDOM, {render} from 'react-dom';
import axios from 'axios';
import Parent from'./imagedetail';
import Children from './childdiv';
import Locdisplay from './locationdiv';
import {onclick,offclick} from '../Actions/Clickaction';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { Navbar, NavItem,NavDropdown,MenuItem,Nav,FormGroup,FormControl,Button} from 'react-bootstrap';
import Map from './map'
class NameForm extends React.Component {
  constructor(props) {
   super(props);
   this.state = {value: '',
   data:[],
   detail:[],
   displaydata:[]};
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }
 componentDidMount() {
   axios.get(`http://10.0.1.122:8080/find`)
     .then(res => {
       var persons = res.data;
       console.log(persons);
       this.setState({ data:persons,
       displaydata:persons});
     });
 }
   handleChange(event) {
  this.setState({value: event.target.value});
}
  handleSubmit(event) {
 var originialdata=[];
 this.state.data.map((person,index)=>
   {if(person.place.toLowerCase().includes((this.state.value).toLowerCase()))
     {
      originialdata[index]=person;
     }
 }
 );
 this.setState({displaydata:originialdata,
  });
  this.props.offclick();
 event.preventDefault();
}
  render(){
    return (
      <div>
      <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="../public/index.html">Wolifer</a>
      </Navbar.Brand>
    </Navbar.Header>
    <form onSubmit={this.handleSubmit}>
    <Navbar.Form pullRight>
     <FormGroup onSubmit={this.handleSubmit}>
       <FormControl type="text" placeholder="Search"
         value={this.state.value} onChange={this.handleChange}
          />
     </FormGroup>
     <Button type="submit" value="Submit" >Submit</Button>
   </Navbar.Form>
 </form>
  </Navbar>
  <Locdisplay data={this.state.displaydata}/>
  </div>
    )
  }
}
const mapStateToProps=(state)=>({
userReducer:state.userReducer.clicked,
});
const mapDispatchToProps = dispatch =>
bindActionCreators({ offclick }, dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(NameForm);
