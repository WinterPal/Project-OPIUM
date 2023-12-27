import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./elements/Topbar.js"
import AuctionSite from "./sites/AuctionSite.js";
import Home from "./sites/Home.js"
import Log from "./sites/Log.js"
import Reg from "./sites/Reg.js"

function App() {
  function test(){
    fetch("localhost:8081/api/v1/auctions").then(x => x.text()).then(y => console.log(y))
  }
  return (
    <main>
      <TopBar/>
<<<<<<< Updated upstream
      <BrowserRouter>
        <Routes>
          <Route index element={<Home></Home>}/>
          <Route path="/auction" element={<AuctionSite/>}/>
        </Routes>
      </BrowserRouter>
=======
>>>>>>> Stashed changes
    </main>
      
  );
}

export default App;
