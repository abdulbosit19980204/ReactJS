import React from 'react'
import './app-info.css'

const AppInfo = ({allMoviesCount, favouriteMovieCount}) => {
  
  return (
    <div className='app-info'>
      <p className='fs-3 text-uppercase'>Barcha kinolar soni: {allMoviesCount}</p>
      <p className='fs-3 text-uppercase'>Sevimli kinolar soni: {favouriteMovieCount}</p>

    </div>
  )
}

export default AppInfo