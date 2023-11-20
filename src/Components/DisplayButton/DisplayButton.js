import React from 'react'
import './DisplayButton.css'
import {Outlet, NavLink } from "react-router-dom";

const DisplayButton = () => {
  return (
    <div className='DisplayButton'>
      <header className="display ">
            <nav className="nav">
                <input type="checkbox" id='check' />
                <label for="check" id="checkbtn"><i class="bi bi-list-task"></i><span>Display</span></label>
                    
                
            <ul className='list'  >
            
                <li> <span>Grouping</span> <NavLink   id='link' to="status"> status</NavLink></li> 
                <li> <span>Ordering</span><NavLink id='link'  to="priority">priority</NavLink></li>
            
            </ul>
            
            <Outlet/>
            </nav>
        </header>
    </div>
  )
}

export default DisplayButton
