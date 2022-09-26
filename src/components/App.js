import NavBar from "./NavBar";
import data from "../data/data";
import Toggler from "./Toggler";
import Cards from "./Cards";
let houseData=data.houses;
let houseNames=houseData.map(houseObj=>{
  return houseObj.name;
})

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
  return <>
    <NavBar/>
    <Toggler houses={houseNames}/>
    <Cards people={peopleList}/>
  </>
}

export default App;
