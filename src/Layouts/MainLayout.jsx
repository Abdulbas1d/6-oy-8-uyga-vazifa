import React from 'react'
import './MainLayout.css'
import LogoImage from '../assets/images/images.jpg'
import { NavLink } from 'react-router-dom'

function MainLayout({children}) {
  return (
    <div>
      <header className="header header_container">
        <img src={LogoImage} alt="" />
        <div className="data">
            <NavLink className="aHref" to='/'>Homework One</NavLink>
            <NavLink className="aHref" to='/twoPage'>Homework Two</NavLink>
            <NavLink className="aHref" to='/threePage'>Homework Three</NavLink>
            <NavLink className="aHref" to='/fourPage'>Homework Four</NavLink>
            <NavLink className="aHref" to='/fiftyPage'>Homework Five</NavLink>
        </div>
      </header>

      {children}
    </div>
  )
}

export default MainLayout
