import ReactDOM from 'react-dom'
import React from 'react'
import {Provider} from 'react-redux'
import store from './redux/store'
import Home from './weather/Home'


import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const app = document.getElementById('app')

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path = '/' render={() => <Home /> } />
            </Switch>
        </Router>
    )
}



ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>, app
)