import React from 'react'
import { Router, Link } from '@reach/router'
import {
  Pattern1,
  Pattern2,
  Pattern3,
  Pattern4,
  Pattern5,
  Pattern6,
  Pattern7,
  Pattern8,
  Pattern9,
} from 'components'
import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <nav className="pattern-navigator">
          <Link to="/01">01</Link>
          <Link to="/02">02</Link>
          <Link to="/03">03</Link>
          <Link to="/04">04</Link>
          <Link to="/05">05</Link>
          <Link to="/06">06</Link>
          <Link to="/07">07</Link>
          <Link to="/08">08</Link>
          <Link to="/09">09</Link>
          <Link to="/10">10</Link>
          <Link to="/11">11</Link>
          <Link to="/12">12</Link>
          <Link to="/13">13</Link>
        </nav>
      </header>
      <div className="pattern-container">
        <Router>
          <Pattern1 path="/01" />
          <Pattern2 path="/02" />
          <Pattern3 path="/03" />
          <Pattern4 path="/04" />
          <Pattern5 path="/05" />
          <Pattern6 path="/06" />
          <Pattern7 path="/07" />
          <Pattern8 path="/08" />
          <Pattern9 path="/09" />
        </Router>
      </div>
    </div>
  )
}

export default App
