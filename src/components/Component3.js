import React, { Component } from 'react'

export class Component3 extends Component {
  render() {
    return (
      <div style={c3Style}>
        <h1>Component3</h1>
      </div>
    )
  }
}
const c3Style = {
  background: 'skyblue',
  color: 'white',
  padding: '1.5rem'
}
export default Component3
