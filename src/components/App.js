import NavBar from "./NavBar";
import data from "../data/data";
import Toggler from "./Toggler";
import Cards from "./Cards";
let houseData=data.houses;
let houseNames=houseData.map(houseObj=>{
  return houseObj.name;
})
function App() {
  return <>
    <NavBar/>
    <Toggler houses={houseNames}/>
    <Cards/>
  </>
}

export default App;
