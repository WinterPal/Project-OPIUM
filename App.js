import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserPanel from "./pages/UserPanel";

function App() {
  return (
<BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userpanel" element={<UserPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
