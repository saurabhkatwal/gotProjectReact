import NavBar from "./NavBar";
import data from "../data/data";
import Toggler from "./Toggler";
import Cards from "./Cards";
import { useState } from "react";
let houseData=data.houses;
let housePeopleObj=houseData.reduce((acc,curr)=>{
  acc[curr.name]={};
  acc[curr.name]["people"]=curr.people;
  return acc;
},{})
let houseNames=houseData.map(houseObj=>{
  return houseObj.name;
})
// console.log(houseData);
let peopleArrays = houseData.map(house => {
  return house["people"];
})
let peopleList=[];
peopleArrays.forEach(peopleArray=>{
peopleArray.forEach(people=>{
peopleList.push(people);
})
})

// console.log(peopleList);
function App() {
  let [list,setList]=useState(peopleList);
function clickHandler(e){
  let text=e.target.innerText;
  setList(housePeopleObj[text].people);
}
  return <div className="root">
    <NavBar/>
    <Toggler clickHandler={clickHandler} houses={houseNames}/>
    <Cards people={list}/>
  </div>
}

export default App;
