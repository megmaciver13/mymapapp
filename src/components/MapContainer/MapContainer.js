import React, { Component } from 'react'
import { Map } from 'react-arcgis'
import './MapContainer.css'

class MapContainer extends Component {
    render() {
        return(
            <div className="map-container">
                <h2>Map Container Here</h2>
                <Map
                    className="map"
                    mapProperties={{ basemap: 'topo' }}
                />
            </div>
        )
    }
}

export default MapContainer