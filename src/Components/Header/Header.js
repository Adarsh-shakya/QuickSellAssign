import React from 'react'
import './Header.css'
import HeaderCard from './HeaderCard'
const Header = ({HeaderData}) => {
  
  return (
    <div className='header'>
        {  
          HeaderData.map((data) => (
            <HeaderCard  cardData={data}/>
          ))
      
      }  
       
      
    </div>
  )
}

export default Header
