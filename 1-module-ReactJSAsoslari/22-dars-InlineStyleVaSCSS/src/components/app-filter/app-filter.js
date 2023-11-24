import React from 'react'
import './app-filter.css'
const AppFilter = ({updateFilterHandler, filter}) => {
  return (
    <div className='btn-group'>
      {btnsArr.map(btn=>(
      <button onClick={()=>updateFilterHandler(btn.name)} key={btn.name} className={`btn ${filter=== btn.name ? "btn-dark": "btn-outline-dark" }`} type='button'>{btn.lable}</button>
      ))}
      {/* <button className='btn btn-dark' type='button'>Barcha kinolar</button>
      <button className='btn btn-outline-dark' type='button'>Mashxur kinolar</button>
      <button className='btn btn-outline-dark' type='button'>Eng kop korilgan kinolar</button> */}

    </div>
  )
}
const btnsArr = [
  {name: 'all', lable:'Barcha kinolar'},
  {name: 'popular', lable:'Mashxur kinolar'},
  {name: 'mostViewers', lable:'Eng kop korilgan'},
]
export default AppFilter