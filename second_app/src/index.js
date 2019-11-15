import ReactDOM from 'react-dom'
import React from 'react'
import {Provider} from 'react-redux'


const axios = require('axios');

axios.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk.me').then(resp => {

    console.log(resp.data);
});