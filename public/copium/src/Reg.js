import ReactDOM from "react-dom/client";
import { Link, BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';


const Reg = () => {
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
           <div id="np"><h2>Zarejestruj się</h2><br></br></div> 
           <div className="blok">
          <div className="ttt">
            Imie<br></br>
            </div>
            <input type="text" className="vll"/><br></br>
          </div>
          <div className="blok">
          <div className="ttt">
            Nazwisko<br></br>
            </div>
            <input type="text" className="vll"/><br></br>
          </div>
          <div className="blok">
          <div className="ttt">
            Płeć<br></br>
            </div>
           <label>Mężczyzna:</label> <input type="radio"  name="pl" className="vll1"/><label>Kobieta:</label> <input type="radio" name="pl" className="vll1"/><label>inne:</label> <input type="radio" name="pl" className="vll1"/><br></br>
          </div>
          <div className="blok">
          <div className="ttt">
            Wiek<br></br>
            </div>
            <input type="text" className="vll"/><br></br>
          </div>
          <div className="blok">
          <div className="ttt">
            E-mail<br></br>
            </div>
            <input type="text" className="vll"/><br></br>
          </div>
        
          <div className="blok">
          <div className="ttt">
            Hasło<br></br>
            </div>
            <input type="text" className="vll"/><br></br>
          </div>
          <div className="blok">
          <div className="ttt" >
            Powtórz Hasło<br></br>
            </div>
            <input type="text" className="vll"/><br></br>
          </div>

            <input type="submit" value="Zarejestrój się" id="btt"/><br></br>
            
            </div>
            <p id="ryt2">Masz konto:</p>
            <div id="franiodebil2">
         <Link to="/Log"><a id="dd">Zaloguj się!</a></Link>
            </div>
         
       </section>
 
        <footer className="stopka">
 
        </footer>
        </div>
     );
}
 
export default Reg;