import React from 'react';
import {GlobalStyle} from './styles/globalStyles'
import  { Logo } from './components/Logo'

import { Home } from './Pages/Home'
import { Detail } from './Pages/Detail'

import { Router } from '@reach/router'


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
            
        </div>

    )
}


