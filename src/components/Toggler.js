import React from 'react'
import Button from "./Button";
export default function Toggler(props) {
  let houses=props.houses;
    // console.log(props.houses);
    // console.log(houseNames);
  return <div className="buttons">
    {houses.map(house=>(
      <Button>{house}</Button>
    ))}
  </div>

}


