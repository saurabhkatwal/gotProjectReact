import NavBar from "./NavBar";
import data from "../data/data";
import Toggler from "./Toggler";
import Cards from "./Cards";
function App() {
  let houses=data.houses;
  return <>
    <NavBar/>
    <Toggler houses={houses}/>
    <Cards houses={houses}/>
  </>
}

export default App;
