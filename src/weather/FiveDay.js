import React from'react'
import axios from 'axios'
import store from '../redux/store'
import{addWeatherData} from '../redux/actions/weatherAction'
import ExtendedForecast from './weatherModes/ExtendedForecast'

class FiveDay extends React.Component {
    constructor () {
        super()
        this.state = {
            showForecast: false,
            town: ''
        }
    }

    capitalizeFirstLetter(string) {
        return string[0].toUpperCase() + string.slice(1);
    }

    saveInput = (event) => {
        this.setState({town: event.target.value})
    }

    keyPress = (event) => {
        if (event.key === "Enter") {
          this.showNewTown()
        }
    }

    showNewTown = () => {
        let newTown = this.capitalizeFirstLetter(this.state.town)
        document.getElementById('town-input').value = null
        axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+ newTown +'&units=metric&appid=8e931d42fb9f6552578e4ccbbc6c0040')
        .then((response) => {
            console.log(response.data)
            store.dispatch(addWeatherData(response.data))
            window.scrollTo(0,0)
            // this.setState({showCurrentWeather: true})
        })
        .catch((error) => {
            console.log(error)
        })
    }

    componentDidMount () {
        axios.get('https://api.openweathermap.org/data/2.5/forecast?id=785842&units=metric&appid=8e931d42fb9f6552578e4ccbbc6c0040')
        .then((response) => {
            console.log(response.data)
            store.dispatch(addWeatherData(response.data))
            this.setState({showForecast: true})
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render () {
        return (
            <React.Fragment>
                {/* <h1>The Extended Forecast Page</h1>
                <h3>Search Other Towns: 
                    <input type='text' id='town-input' onChange={this.saveInput} onKeyUp={this.keyPress}></input>
                </h3>
                <button onClick={this.showNewTown}>Search</button> */}
                {this.state.showForecast ? <ExtendedForecast /> : null}
            </React.Fragment>
        )
    }
}

export default FiveDay