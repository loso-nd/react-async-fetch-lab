import React from 'react'

class listNamesCard extends React.Component {

  render() {
    let {name, craft} = this.props.person
    console.log(name, craft)
    return (
      <div className="card">
          <h3>Name: {name}</h3>
          <h3>Craft: {craft}</h3>
      </div>
    )
  }
}

export default listNamesCard;
