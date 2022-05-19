import React from 'react'

const Navbar = () => {
  return (
    <>
      <div style={{margin: '10px'}}>
        <img className='no-high' src='/timer.png' style={{height: '30px'}}></img>
      </div>
      <p className='no-high' style={{fontWeight:'bold'}}>
        Podmodoro
      </p>
    </>
  )
}

export default Navbar