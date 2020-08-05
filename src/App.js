import React, {useContext, Suspense} from 'react';
import { GlobalStyle } from './styles/globalStyles'
import  { Logo } from './components/Logo'
 
import { Home } from './Pages/Home'
import { Detail } from './Pages/Detail'
// import { Favs } from './Pages/Favs'
import { User } from './Pages/User'
import { NotRegisterUser } from './Pages/NotRegisterUser'
import { NavBar } from './components/Navbar'
import { NotFound } from './Pages/NotFound'

import { Router, Redirect } from '@reach/router'
import {Context} from './Context'



const Favs = React.lazy(() => import('./pages/Favs'))

export const App = () => {
    const {isAuth} = useContext(Context)
    
    return (
        <Suspense fallback={<div />}>
            <GlobalStyle />
            <Logo />
            <Router>
                <NotFound default />
                <Home path='/' />
                <Home path='/pet/:id' />
                <Detail path='/detail/:detailId' />  
                {!isAuth && <NotRegisterUser path='/login' />}
                {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
                {!isAuth && <Redirect noThrow from='/user' to='/login' />}
                {isAuth && <Redirect noThrow from='/login' to='/' />}
                <Favs path='/favs' />
                <User path='/user' /> 
            </Router> 
            <NavBar />
        </Suspense>

    )
}


