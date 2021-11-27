import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routers/AppRouter'

const HeroesApp = () => {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    )
}

export default HeroesApp
