import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  constructor(props) {
    super(props);

    this.renderWeather = this.renderWeather.bind(this);
  }

  renderWeather(city) {
    const cityName = city.city.name;
    const tempArray = city.list.map(item => item.main.temp);
    const presArray = city.list.map(item => item.main.pressure);
    const humArray = city.list.map(item => item.main.humidity);

    return (
      <tr key={cityName}>
        <td>{cityName}</td>
        <td><Chart data={tempArray} color={'orange'} unit='Cº'/></td>
        <td><Chart data={presArray} color={'purple'} unit='hPa'/></td>
        <td><Chart data={humArray} color={'green'} unit='%'/></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th> City </th>
            <th> Temperature Cº</th>
            <th> Pressure hPa</th>
            <th> Humidity %</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(
  mapStateToProps,
  null
)(WeatherList);
