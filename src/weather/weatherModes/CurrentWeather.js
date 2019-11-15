import React from 'react'
import {connect} from 'react-redux'

const CurrentWeather = (props) => {
    let imgSrc = `http://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`
    var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes()

    return (
        <React.Fragment>
            <div id='general-weather-info'>
                <h2>Weather In {props.weather.name}, {props.weather.sys.country}</h2>
                <div id='temp-info'>
                    <img src={imgSrc}></img> 
                    <span>{Math.round(props.weather.main.temp)} °C</span>
                </div>
                <p>{props.capitalize(props.weather.weather[0].description)}</p>
                <p>{datetime}</p>
            </div>
            <div id='specifics-info'>
                <table id='weather-table'>
                    <tbody>
                        <tr>
                            <td>Wind</td>
                            <td>{props.weather.wind.speed} m/s</td>
                        </tr>
                        <tr>
                            <td>Cloudiness</td>
                            <td>{props.weather.clouds.all} %</td>
                        </tr>
                        <tr>
                            <td>Pressure</td>
                            <td>{props.weather.main.pressure} hpa</td>
                        </tr>
                        <tr>
                            <td>Humidity</td>
                            <td>{props.weather.main.humidity} %</td>
                        </tr>
                        <tr>
                            <td>Sunrise</td>
                            <td>{props.convert(props.weather.sys.sunrise)}</td>
                        </tr>
                        <tr>
                            <td>Sunrise</td>
                            <td>{props.convert(props.weather.sys.sunset)}</td>
                        </tr>
                        <tr>
                            <td>Geo Coords</td>
                            <td>[{props.weather.coord.lat}, {props.weather.coord.lon}]</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}

function mapStateToProps (state) {
    return {
        weather: state.homeReducer.weather[0]
    }
}

export default connect(mapStateToProps)(CurrentWeather)