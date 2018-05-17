import React, { Component } from 'react'
<<<<<<< HEAD
=======
import { Map } from 'react-arcgis'
>>>>>>> without-redux
import './MapContainer.css'

class MapContainer extends Component {
    render() {
        return(
<<<<<<< HEAD
            <div className="Container">
                <h1>Map Container here!!!</h1>
=======
            <div className="map-container">
                <h2>Map Container Here</h2>
                <Map
                    className="map"
                    mapProperties={{ basemap: 'topo' }}
                />
>>>>>>> without-redux
            </div>
        )
    }
}

export default MapContainer