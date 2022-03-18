import React, { useState } from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()

  const displaySubmenu = (e) => {
    const leftPosition = e.target.getBoundingClientRect().left
    const rightPosition = e.target.getBoundingClientRect().right
    const bottomPosition = e.target.getBoundingClientRect().bottom
    const center = (leftPosition + rightPosition) / 2
    const top = bottomPosition + 3
    const page = e.target.textContent
    openSubmenu(page, { center, top })
  }

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu()
    }

  }

  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="photo" />
          <button className='toggle-btn' onClick={openSidebar}>
            <FaBars></FaBars>
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>

  )


}

export default Navbar
