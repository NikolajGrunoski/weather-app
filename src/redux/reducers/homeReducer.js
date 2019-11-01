const initialUserState = {
    weather: []
}

export function homeReducer (state = initialUserState, action) {
    switch(action.type) {
        case 'ADD_WEATHER_DATA' : {
            return {
                ...state, 
                weather: [action.payload.weather, action.payload.forecast]
            }
        }
        case 'ADD_NEW_WEATHER_DATA' : {
            return {
                ...state, 
                weather: [...state.weather, action.payload]
            }
        }
        default : {
            return {...state}
        }
    }
}