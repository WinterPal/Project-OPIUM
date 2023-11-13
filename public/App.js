import ReactDOM from "react-dom/client";
import { Link, BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Reg from "./pages/Reg";
import Home from "./pages/Home";



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
