import NavBar from "./NavBar";
import data from "../data/data";
import Toggler from "./Toggler";
import Cards from "./Cards";
import { useState } from "react";
//list of house data
let houseData=data.houses;
//object of different houses
let housePeopleObj=houseData.reduce((acc,curr)=>{
  acc[curr.name]={};
  acc[curr.name]["people"]=curr.people;
  return acc;
},{})
//list of housenames
let houseNames=houseData.map(houseObj=>{
  return houseObj.name;
})
// console.log(houseData);
//array containing array of people in each house
let peopleArrays = houseData.map(house => {
  return house["people"];
})
//list of people with their information 
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
function inputFocusHandler(){
setList(peopleList);
}
  return <div className="root">
    <NavBar inputFocusHandler={inputFocusHandler}/>
    <Toggler clickHandler={clickHandler} houses={houseNames}/>
    <Cards people={list}/>
  </div>
}

export default App;
