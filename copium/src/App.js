import { BrowserRouter, Route, Routes, link } from "react-router-dom";
import TopBar from "./elements/Topbar.js"
import AuctionSite from "./sites/AuctionSite.js";
import Home from "./sites/Home.js"
import Log from "./sites/Log.js"
import Reg from "./sites/Reg.js"

function App() {
  return (
    <main>
      <TopBar/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home></Home>}/>
          <Route path="/auction" element={<AuctionSite/>}/>
        </Routes>
      </BrowserRouter>
    </main>
      
  );
}

export default App;
