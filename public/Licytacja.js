import ReactDOM from "react-dom/client";
import { Link, BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';


const Licytacja = () => {
    return ( 
        <div className="App">
        <header className="baner">
        <Link to="/">C--</Link>
          <div id="pb">
          <div className="uno">Copium</div>
          </div>
          
          <div id="user">
    <Link to="user">User</Link>
    </div>
        </header>
 
        <section className="main">
            <div id="import">

            </div>

          <div id="linia"></div>

          <div id="import2">

          </div>

         <button id="licytuj">Licytuj</button>

          
       </section>
 
        <footer className="stopka">
 
        </footer>
        </div>
     );
}
 
export default Licytacja;