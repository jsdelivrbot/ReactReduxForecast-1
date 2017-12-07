import React, { Component } from "react"

class googleMap extends Component {
  componentDidMount() {
    //embedded google map
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }
  render() {
    return <div ref="map" />
  }
}

export default googleMap
