import React from 'react'
import {connect} from 'react-redux'

class ExtendedForecast extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        let hourly = []
        let counter = 0
        for (let i = 0; i < this.props.weather.list.length; i++) {
            hourly.push(
                <tr key={counter}>
                    <td>
                        <p><b>{this.props.weather.list[i].dt_txt}</b></p>
                        <img src={`http://openweathermap.org/img/wn/${this.props.weather.list[i].weather[0].icon}@2x.png`}
                         className='forecast-img'>
                        </img>
                    </td>
                    <td>
                        <span className='temp-span'>{Math.round(this.props.weather.list[i].main.temp)} C°</span>
                        &nbsp;&nbsp;
                        <i>{this.props.weather.list[i].weather[0].description}</i>
                        <p>
                            {this.props.weather.list[i].wind.speed} m/s 
                            &nbsp; clouds: {this.props.weather.list[i].clouds.all} %
                            &nbsp; {this.props.weather.list[i].main.pressure} hpa
                        </p>
                    </td>
                </tr>
            )
            counter +=1
        }
        return (
            <React.Fragment>
                
                    <h2>Hourly weather and forecast in {this.props.weather.city.name}, {this.props.weather.city.country}</h2>
                    <table id='forecast-table'>
                        <tbody>
                            {hourly}
                        </tbody>
                    </table>
                
            </React.Fragment>
        )
    }
}

function mapStateToProps (state) {
    return {
        weather: state.homeReducer.weather[1]
    }
}

export default connect(mapStateToProps)(ExtendedForecast)