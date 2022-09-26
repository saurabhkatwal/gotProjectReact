import React from 'react'
import Button from "./Button";
export default function Toggler(props) {
    // console.log(props.houses);
    let data=props.houses;
    let houseNames=data.map(item=>{
        return item.name;
    })
    // console.log(houseNames);
  return houseNames.forEach(house=>{
        <Button houseName={house}/>
    })
  
}
