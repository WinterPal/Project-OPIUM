import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import TopBar from "./elements/Topbar.js"
import AuctionSite from "./sites/AuctionSite.js";
import Home from "./sites/Home.js"
import Log from "./sites/Log.js"
import Reg from "./sites/Reg.js"
import User  from "./sites/User.js";
import AnouncmentSite from "./sites/AnouncmentSite.js";

function App() {
  return (
    <main>
      <TopBar/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home></Home>}/>
          <Route path="/auction" element={<AuctionSite/>}/>
          <Route path="/user" element={<User></User>}/>
          <Route path="/anouncment" element={<AnouncmentSite></AnouncmentSite>}/>
        </Routes>
      </BrowserRouter>
    </main>
      
  );
}

export default App;
