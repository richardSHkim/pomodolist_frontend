import React from 'react'
import '../../styles/Navbar.css'
import Logo from './Logo'
import UserSettings from './UserSettings'

const Navbar = () => {
  return (
    <>
      <div className='left-section'>
        <Logo/>
      </div>

      <div className='middle-section'>
      </div>

      <div className='right-section'>
        <UserSettings/>
      </div>
    </>
  )
}

export default Navbar