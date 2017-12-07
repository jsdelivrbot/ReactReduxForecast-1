import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (Celsius)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
          <tbody>
            { this.props.weather.map(this.renderWeather) }
          </tbody>
      </table>
    )
  }

  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={ name }>
        <td><GoogleMap lat={ lat } lon={ lon } /></td>
        <td><Chart data={ temps } color="orange" units="C" /></td>
        <td><Chart data={ pressures } color="green" units="hPa" /></td>
        <td><Chart data={ humidities } color="blue" units="%" /></td>
      </tr>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}
//export the connected container
export default connect(mapStateToProps)(WeatherList)
