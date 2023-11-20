import ReactDOM from "react-dom/client";
import { Link, BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Reg from "./Reg";
import Home from "./Home";
import Log from "./Log";
import User from "./User";
import Licytacja from "./Licytacja";



function App() {
  return (
      <BrowserRouter>
            <Routes>
                   <Route path="/" element={<Home/>} />
                   <Route path="/reg" element={<Reg />} />
                   <Route path="/log" element={<Log />} />
                   <Route path="/user" element={<User />} />
                   <Route path="/licytacja" element={<Licytacja />} />
            </Routes>
    </BrowserRouter>
  );
}

export default App;
