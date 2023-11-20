import React from 'react'
import  './Card.css'

const Card = ({item}) => {
  
  return (
    <div className='card'>
      <div className='card-contant'>
        <div className='card-top'>
            <div className='heading'>
                <p>{item.id}</p></div>
            <div className='img'></div>
        </div>
        <div className='card-mid'>
            <p>{item.title}</p>
         </div>
        <div className='card-bottom'>
          
          <div className='card-request'>
            <div className='dots'></div>
            <p>{item.tag[0]}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
