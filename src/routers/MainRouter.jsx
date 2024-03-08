import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePages from '../pages/HomePages'
import CoinPages from '../pages/CoinPages'

function MainRouter() {
  return (
    <Routes>
      <Route path='/' element={<HomePages/>}/>
      <Route path='/coins/:id' element={<CoinPages/>}/>
    </Routes>
  )
}

export default MainRouter
