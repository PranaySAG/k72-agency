import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Agence from './pages/Agence.jsx'

import Navbar from './components/Navigation/Navbar.jsx'
import FullScreenNav from './components/Navigation/FullScreenNav.jsx'
import Project from './pages/Project.jsx'

const App = () => (
  <div className='overflow-x-hidden text-white'>
    <Navbar />
    <FullScreenNav />
    <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/agence' element={<Agence />} />
          <Route path='/project' element={<Project/>} />
    </Routes>
  </div>
)

export default App