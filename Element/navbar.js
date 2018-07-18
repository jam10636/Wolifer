import React, { Component } from 'react';
import ReactDOM, {render} from 'react-dom';
import axios from 'axios';
import Parent from'./imagedetail';
import Children from './childdiv';
import { Navbar, NavItem,NavDropdown,MenuItem,Nav,FormGroup,FormControl,Button} from 'react-bootstrap';
import Map from './map'
class NameForm extends React.Component {
  constructor(props) {
   super(props);
   this.state = {value: '',
   clicked:false,
   data:[],
   detail:[],
   displaydata:[]};
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleclicked = this.handleclicked.bind(this);
   this.conditionalrendering=this.conditionalrendering.bind(this);
 }
 componentDidMount() {
   axios.get(`http://10.0.1.122:8080/find`)
     .then(res => {
       var persons = res.data;
       this.setState({ data:persons,
       displaydata:persons});
     });
 }
   handleChange(event) {
  this.setState({value: event.target.value});
}
  handleSubmit(event) {
 var originialdata=[];
 this.setState({clicked:false});
 this.state.data.map((person,index)=>
   {if(person.place.toLowerCase().includes((this.state.value).toLowerCase()))
     {
      originialdata[index]=person;
     }
 }
 );
 this.setState({displaydata:originialdata,
   click:false});
 event.preventDefault();
 this.updatetotrue;
}
handleclicked(e,link)
{
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
    {this.state.displaydata.map((person,index)=>(
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
  {this.conditionalrendering()}
  </div>
    )
  }
}
export default NameForm
