import React from 'react'
import Home from '../pages/Home'
import Beauty from '../pages/Beauty'
import Women from '../pages/Women'
import Men from '../pages/Men'
import Studio from '../pages/Studio'
import Kids from '../pages/Kids'
import { Route, Routes } from 'react-router-dom'

const Routing = () => {
  return (

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Kids' element={<Kids/>}/>
      <Route path='/Men' element={<Men/>}/>
      <Route path='/Women' element={<Women/>}/>
      <Route path='/Studio' element={<Studio/>}/>
      <Route path='/Beauty' element={<Beauty/>}/>

    </Routes>

  )
}

export default Routing