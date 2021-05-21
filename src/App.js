import React, { Component } from 'react'
import Outerspace from './Outerspace'
// create your App component here

class App extends Component {

  state ={
    pplsInSpace: []
  }

  componentDidMount(){

    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(data => { this.setState({
          pplsInSpace : data.people
      })
    })
  }


  render(){
    return (
      <div>
        {/* {this.state.pplsInSpace.map(person => <h3>Name: {person.name} ,  Craft: {person.craft}</h3>)} */}
        <Outerspace cadets={this.state.pplsInSpace}/>
      </div>
    )
  }
}

export default App;




/**
 * Create a react component structure App class
 * Does this component require state?
 *  !Yes we are fetching data from an external server and want to store the data into our state for later use if needed
 * Use componentDidMount to fetch our data and store the data recieved into our state using setState
 * !Recall componentDidMount is called immediatelly after the render() set up any long-running processes you want to use in your component, for example fetching data.
 * line 15: we console.log the data which is an array of objects. 
 * setState({...}) set up in the 2nd .then() statement and stored to our state.
 * Each obj inside the array has two key value pairs 
 * {key: value, key: value} & we need to render this to the DOM. In order to display the data received we can .map the people array and return jsx elements to the page
 * 
 */










// class App extends Component {

//   state = {
//     peopleInSpace: []
//   }

//   render() {
//     return (
//       <div>
//         {this.state.peopleInSpace.map(person => person.name)}
//       </div>
//     )
//   }

//   componentDidMount() {
//     fetch('http://api.open-notify.org/astros.json')
//       .then(response => response.json())
//       .then(data => {
//         this.setState({
//           peopleInSpace: data.people
//         })
//       })
//   }
// }

// export default App