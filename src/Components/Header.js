import React from 'react'
import {NavLink} from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <header>
      <nav className='header-nav'>
        <ul className='header-ul'>
          <NavLink className='link' to='/Home'>
          <li>Home</li>
          </NavLink>
          <NavLink className='link' to='/Products'>
          <li>Products</li>
          </NavLink>
          
        </ul>
      </nav>
    </header>
  )
}

export default Header