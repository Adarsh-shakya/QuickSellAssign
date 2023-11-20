import React from 'react'
import './Header.css'

const HeaderCard = ({cardData}) => {
  return (
    <div className='header-card'>
            <div className='header-card-left'>
                <div className='card-icon'>{cardData.icon}</div>
                 <p className='name'>{cardData.name}</p>
                 <p className='count'>{cardData.count}</p>
            </div>
            <div className='header-card-right'>
            <i class="bi bi-plus"></i>
            <i class="bi bi-three-dots"></i>
            </div>
        </div>

  )
}

export default HeaderCard
