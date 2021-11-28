import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../components/header/Header'
import InfoHero from '../components/heroes/InfoHero'
import Home from '../components/home/Home'
import SearchById from '../components/searchId/SearchById'
import SearchByName from '../components/searchName/SearchByName'

const AppRouter = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/searchname' element={<SearchByName />}/>
                <Route path='/searchid' element={<SearchById />}/>
                <Route path='/info/:heroeId' element={<InfoHero />}/>
                <Route path='/' element={<Home />}/>
            </Routes>
        </>
    )
}

export default AppRouter
