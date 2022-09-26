import React from 'react'
import "./css/Button.css"
export default function Button(props) {
    // console.log(props.houseName);
  return (
    <button>{props.children}</button>
  )
}
