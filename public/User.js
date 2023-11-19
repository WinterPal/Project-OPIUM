import ReactDOM from "react-dom/client";
import { Link, BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';


const User = () => {
    return ( 
        <div className="App">
        <header className="baner">
        <Link to="/">C--</Link>
          <div id="pb">
          <div className="uno">Copium</div>
          </div>
          
    <div id="user">
    User
    </div>
        </header>
 
        <section className="main">

          <div id="linia"></div>

          <h4>
            Czesc!
          </h4>
          <div id="uzyt"><p>nazwa uzytkownika</p></div>

<div id="opc">
    <h3>Aukcje i Ogloszenia</h3>
  
    <h3>O koncie</h3>
    
    <h3>Twoj portfel</h3>
</div>
       </section>
 
        <footer className="stopka">
 
        </footer>
        </div>
     );
}
 
export default User;