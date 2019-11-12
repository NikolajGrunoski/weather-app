export function addWeatherData (weatherData, forecastData) {
    return {
        type: "ADD_WEATHER_DATA",
        payload:{ 
            weather: weatherData,
            forecast: forecastData
        }
    }
}

export function addNewWeatherData (weatherData) {
    return {
        type: "ADD_NEW_WEATHER_DATA",
        payload: weatherData
    }
}