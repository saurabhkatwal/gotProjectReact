import React from 'react'
import "./css/NavBar.css"
export default function NavBar(props) {
    
  return (
    <div className='nav'>
      <h1>People of GOT 👑</h1>
      <input type="text" onFocus={props.inputFocusHandler}/>
    </div>
  )
}
