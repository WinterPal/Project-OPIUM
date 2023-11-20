import ReactDOM from "react-dom/client";
import { Link, BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';


const Log = () => {
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
          <div className="rej">
           <div id="lg"><h2>Zaloguj się</h2><br></br></div> 
           
          <div className="blok">
          <div className="ttt">
            Login<br></br>
            </div>
            <input type="text" className="vll"/><br></br>
          </div>
          <div className="blok">
          <div className="ttt">
            Hasło<br></br>
            </div>
            <input type="text" className="vll"/><br></br>
          </div>

            <input type="submit" value="Zaloguj się" id="btt"/><br></br>
            
            </div>
            <p id="ryt">Nie masz konta:</p>
            <div id="franiodebil">
         <Link to="/Reg"><a id="dd">Zarejestruj się!</a></Link>
            </div>
     
       </section>
 
        <footer className="stopka">
 
        </footer>
        </div>
     );
}
 
export default Log;