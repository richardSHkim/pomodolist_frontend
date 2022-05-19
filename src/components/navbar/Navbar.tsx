import React from 'react'
import '../../styles/Navbar.css'
import Logo from './Logo'

const Navbar = () => {
  return (
    <>
      <div className='left-section'>
        <Logo/>
      </div>

      <div className='middle-section'>
      </div>

      <div className='right-section'>
        <button>setting</button>
      </div>
    </>
  )
}

export default Navbar