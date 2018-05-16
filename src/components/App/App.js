import React, { Component } from 'react'
import Header from '../Header/Header'
import MapContainer from '../MapContainer/MapContainer'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MapContainer />
      </div>
    );
  }
}

export default App
