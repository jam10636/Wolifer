import React, { Component } from 'react';
import logo from './logo.svg';
import Person from './Person/Person'
class App extends Component {
  state= {
    persons:[
      {id:"a",name:"max",age: 28},
      {id:"b",name:"men",age: 30},
      {id:"c",name:"who",age:35}
    ],
    otherstate: "kevin",
    showperson: false
  }
  switchHandler =(newname,oldname)=>
  {
    this.setState({persons:[
      {name:newname,age: 28},
      {name:oldname,age: 30},
      {name:"dan",age:35}
    ],
    otherstate:"dan",
});
  }
deleteuserhandler=(personindex)=>
{
  const persons=[...this.state.persons]
  persons.splice(personindex,1);
  this.setState({persons:persons })
}
  nameChangehandiler =(e)=>
  {
    this.setState({persons:[
      {name:e.target.value,age: 28},
      {name:e.target.value, age: 30},
      {name: e.target.value,age:35}
    ]
  })
}
  togglepersonhandler=()=>
  {
    const doeshow=this.state.showperson;
    this.setState({showperson: !doeshow});
  }

  render() {
    const style={
      backgroundColor:"black",
      padding: '9px',
      font: "inherit",
    }
    let persons=null;
    if(this.state.showperson)
    {
      persons=(
        <div>
          {this.state.persons.map((person,index)=>{
            return <Person click={()=>this.deleteuserhandler(index)} name={person.name} age={person.age} key={person.id}
              changed={(e)=>this.nameChangehandiler(e)} />
          })}
    </div>
      )
    }
    return (
      <div className="App">
      <h1>I am cool</h1>
      <button
        style={style}
        onClick={()=>this.switchHandler("ken","wang")}> Switch Name</button>
      <button onClick={this.togglepersonhandler}>click my ass</button>
        {persons};
      </div>

    )
  }
}
export default App;
