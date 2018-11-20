import React, { Component } from 'react';
import './Box.css'

export default class Box extends Component {
state = { text: '' }

  componentDidMount() {
    window.fetch('https://prestige-group-api.herokuapp.com/stocks/').then(data => {
      data.json().then(res => {
        this.setState({text: (res.data[0].attributes.price)}) 
      })
    })
  }
  
  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <textarea
        value={this.state.text}
        onChange={this.handleChange}
      />
    )
  }
}
