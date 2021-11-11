import React from 'react'
import {Route, Redirect} from 'react-router'
//import api from './services/api'

const PrivateRoute = (props:any) =>{
    const isLogged = localStorage.getItem('token')
    return isLogged ? <Route {...props}/> : <Redirect to="/"/>
}

export default PrivateRoute