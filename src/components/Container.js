import React from 'react'
import Header  from './Header'
import Dropdown from './Dropdown'
import DaysCard from './DaysCard'

function Container() {
  return (
    <>
    <Header />
    
    <Dropdown />
      <div className="section">
        <div className="container">
          <DaysCard />
        </div>
      </div>
    </>
  )
}

export default Container