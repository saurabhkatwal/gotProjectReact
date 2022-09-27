import React, { useState } from 'react'
import "./css/Button.css"
export default function Button(props) {
  
    // console.log(props.houseName);
  return (
    <button onClick={props.clickHandler}>{props.children}</button>
  )
}
