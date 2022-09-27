import React from 'react'
import Card from './Card'
import "./css/Cards.css";
export default function Cards(props) {
  let people=props.people;
  console.log(people);
  return (
    <div className='peopleCards'>
      {
      people.map(person=><Card personInfo={person} key={"id"+Math.random().toString(16).slice(2)}/>
      )
}
     </div>
  )
}
