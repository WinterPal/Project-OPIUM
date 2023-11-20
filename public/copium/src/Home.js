import ReactDOM from "react-dom/client";
import { Link, BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';



function Home() {
  return (
     <div className="App">

       <header className="baner">

         <div className="uno">Copium</div>
        <div className="dos"><input type="text" placeholder="Czego szukasz?" id="hlp" /></div>


        <div id="user2">
    <Link to="user">User</Link>
    </div>
       </header>


       <section className="main">

         <div className="sld">
           <h1>Jesteś nowy?</h1> <br></br>
          <a className="dd">Aby utworzc konto</a> <Link to="/Reg" id="t1">kliknij w link<a className="dd"></a></Link>
        </div>

        <div id="ogl">
         <h7>Ogloszenia</h7>
        </div>
        <div id="auk">
        <h7>Aukcje</h7>
        </div>

      </section>

       <footer className="stopka">

       </footer>

     </div>
    
  );
}

export default Home;
