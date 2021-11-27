import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../components/header/Header'
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
                <Route path='/' element={<Home />}/>
            </Routes>
        </>
    )
}

export default AppRouter
