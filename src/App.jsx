import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import OnePage from './pages/OnePage'
import TwoPage from './pages/TwoPage'
import ThreePage from './pages/ThreePage'
import FourPage from './pages/FourPage'
import FiftyPage from './pages/FiftyPage'
import MainLayout from './Layouts/MainLayout'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<MainLayout><OnePage /></MainLayout>}></Route>
        <Route path='/twoPage' element = {<MainLayout><TwoPage /></MainLayout>}></Route>
        <Route path='/threePage' element = {<MainLayout><ThreePage /></MainLayout>}></Route>
        <Route path='/fourPage' element = {<MainLayout><FourPage /></MainLayout>}></Route>
        <Route path='/fiftyPage' element = {<MainLayout><FiftyPage /></MainLayout>}></Route>
      </Routes>
    </div>
  )
}

export default App
