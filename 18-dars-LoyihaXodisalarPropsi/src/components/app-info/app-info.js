import React from 'react'
import './app-info.css'

const AppInfo = ({allMoviesCount}) => {
  
  return (
    <div className='app-info'>
      <p className='fs-3 text-uppercase'>Barcha kinolar soni: {allMoviesCount}</p>
      <p className='fs-3 text-uppercase'>Sevimli kinolar soni:</p>

    </div>
  )
}

export default AppInfo