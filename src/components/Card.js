import React from 'react'
import "./css/Card.css"
export default function Card({personInfo}) {
  
  let image=personInfo.image;
  let name=personInfo.name;
  let description=personInfo.description;
  let wikiLink=personInfo.wikiLink;
  return (
    <div className='personCard'>
      <img src={image} alt="" />
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={wikiLink}>Know more</a>
    </div>
  )
}
