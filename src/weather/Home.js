import React from 'react'
import axios from 'axios'
import CurrentWeather from './weatherModes/CurrentWeather'
import ExtendedForecast from './weatherModes/ExtendedForecast'
import {addWeatherData} from '../src/redux/actions/weatherAction'

import { connect } from 'react-redux'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            showWeather: false,
            town: ''
        }
    }

    saveInput = (event) => {
        this.setState({town: event.target.value})
    }

    convertTimestamptoTime = (Num) => {
        let date = new Date (Num * 1000)
        let hour = date.getHours();
        let minutes = '0' + date.getMinutes();
        let formattedTime = hour + ':' + minutes.substr(-2)
        return formattedTime
    }

    capitalizeFirstLetter(string) {
        return string[0].toUpperCase() + string.slice(1);
    }

    keyPress = (event) => {
        if(event.key === 'Enter'){
            this.showNewTown()
        }
    }

    showNewTown = () => {
        let newTown = this.capitalizeFirstLetter(this.state.town)
        document.getElementById("town-input").value = null
        axios.all([
            axios.get('https://api.openweathermap.org/data/2.5/weather?q='+ newTown +'&units=metric&appid=8e931d42fb9f6552578e4ccbbc6c0040'),
            axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+ newTown +'&units=metric&appid=8e931d42fb9f6552578e4ccbbc6c0040')
           ])
        .then(axios.spread((firstResponse, secondResponse) => {
            console.log(firstResponse.data)
            console.log(secondResponse.data)
            this.props.addWeatherData(firstResponse.data, secondResponse.data)
        }))
        .catch((error) => {
            console.log(error)
        })
    }

    componentDidMount () {
        axios.all([
            axios.get(`https://api.openweathermap.org/data/2.5/weather?id=785842&units=metric&appid=8e931d42fb9f6552578e4ccbbc6c0040`),
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=785842&units=metric&appid=8e931d42fb9f6552578e4ccbbc6c0040`)
           ])
           .then(axios.spread((firstResponse, secondResponse) => {
            console.log(firstResponse.data)
            console.log(secondResponse.data)
            this.props.addWeatherData(firstResponse.data, secondResponse.data)
            this.setState({showWeather: true})
        }))
        .catch((error) => {
            console.log(error)
        })
    }

    render () {
        return(
            <React.Fragment>
                <div id='header'>
                    <h1>Weather Forcast</h1>
                </div>

                <div id='weather-app'>
                    <div id='current-weather'>
                        <div id='search-bar'>
                            <input type='text' id='town-input'
                            onChange={this.saveInput}
                            onKeyUp={this.keyPress}
                            placeholder='Your City Name'> 
                            </input>
                            <button id='search-button' onClick={this.showNewTown}>Search</button>
                        </div>
                        <div id='current-details'>
                            {this.state.showWeather ?
                            <CurrentWeather capitalize={this.capitalizeFirstLetter}
                                            convert={this.convertTimestamptoTime}/>
                            :null}
                        </div>
                    </div>

                    <div id='five-day-forecast'>
                        {this.state.showWeather ? <ExtendedForecast /> : null}
                    </div>
                    
                </div>
            </React.Fragment>
        )
    }


}

function mapDispatchToProps (dispatch) {
    return {
        addWeatherData: (data1, data2) => dispatch(addWeatherData(data1, data2))
    }
}

export default connect(null,mapDispatchToProps)(Home)