import ReactDOM from "react-dom/client";
import { Link, BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Reg from "./Reg";
import Home from "./Home";



function App() {
  return (
      <BrowserRouter>
            <Routes>
                   <Route path="/" element={<Home/>} />
                   <Route path="/reg" element={<Reg />} />
            </Routes>
    </BrowserRouter>
  );
}

export default App;
