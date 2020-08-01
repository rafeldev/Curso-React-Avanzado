import React from 'react';
import {GlobalStyle} from './styles/globalStyles'
import  { Logo } from './components/Logo'

import { Home } from './Pages/Home'
import { Detail } from './Pages/Detail'
import { Favs } from './Pages/Favs'
import { User } from './Pages/User'
import { NotRegisterUser } from './Pages/NotRegisterUser'
import { NavBar } from './components/Navbar'

import { Router } from '@reach/router'
import Context from './Context'

export const App = () => {
    
    return (
        <div>
            <GlobalStyle />
            <Logo />
            <Router>
                <Home path='/' />
                <Home path='/pet/:id' />
                <Detail path='/detail/:detailId' />   
            </Router> 
            <Context.Consumer>
                {
                    ({ isAuth }) => 
                    isAuth
                    ? 
                    <Router>
                        <Favs path='/favs' />
                        <User path='/user' />
                    </Router>
                    :
                    <Router>
                        <NotRegisterUser path='/favs' />
                        <NotRegisterUser path='/user' />
                    </Router>
                
                }
            </Context.Consumer>
            <NavBar />
        </div>

    )
}


