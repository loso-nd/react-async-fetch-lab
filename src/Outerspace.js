import React, { Component } from 'react'
import ListNamesCard from './ListNamesCard';
// create your App component here

class Outerspace extends Component {

  render(){
    return (
      <div>
        {this.props.cadets.map(person => <ListNamesCard person={person}/>)}
      </div>
    )
  }
}

export default Outerspace;
