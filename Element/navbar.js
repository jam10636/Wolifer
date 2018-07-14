import React, { Component } from 'react';
import ReactDOM, {render} from 'react-dom';
import axios from 'axios';
import Child from './locationdiv';
import { Navbar, NavItem,NavDropdown,MenuItem,Nav,FormGroup,FormControl,Button} from 'react-bootstrap';
class NameForm extends React.Component {
  constructor(props) {
   super(props);
   this.state = {value: '',
   data:[],
   originaldata:[]};
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }
 componentDidMount() {
   axios.get(`http://10.0.1.122:8080/find`)
     .then(res => {
       var persons = res.data;
       this.setState({ data:persons,
       originaldata:persons});
     });
 }
   handleChange(event) {
  this.setState({value: event.target.value});
}
  handleSubmit(event) {
    /*var user={
      place:this.state.value,
      location:'m',
    }
  /*  axios.post('http://10.0.1.122:8080/addname', {
   user
 })
 .then(function (response) {
   console.log(response);
 })
 .catch(function (error) {
   console.log(error);
 });*/
 var displaydata=[];
 this.state.data.map((person,index)=>
   {if(person.place.toLowerCase().includes((this.state.value).toLowerCase()))
     {
      displaydata[index]=person;
     }
 }
 );
 console.log(displaydata);
 this.setState({data:displaydata});
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
  <Child data={this.state.data}/>
  </div>

    )
  }
}
export default NameForm
