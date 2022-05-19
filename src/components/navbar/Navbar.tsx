import { IconButton } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
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
        <IconButton aria-label="delete">
          <SettingsIcon/>
        </IconButton>
      </div>
    </>
  )
}

export default Navbar