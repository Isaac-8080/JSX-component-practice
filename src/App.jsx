import Exercise from './components/Exercise'
import './App.css'
import Logo from '/vite.svg'

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Codetrain is awesome, react works!!!!</h1>
        {/* <Exercise />
        <img src={Logo} className='logo' alt="" /> */}
      </div>
    )
  }
}