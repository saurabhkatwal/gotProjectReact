import React from 'react'
import Button from "./Button";
import "./css/Toggler.css"
export default function Toggler(props) {
  let houses=props.houses;
    // console.log(props.houses);
    // console.log(houseNames);
  return <div className="buttons">
    {houses.map(house=>(
      <Button key={"id"+Math.random().toString(16).slice(2)}>{house}</Button>
    ))}
  </div>

}


