import ReactDOM from "react-dom/client";
import { Link, BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';



function Home() {
  return (
     <div className="App">
       <header className="baner">
         <div className="uno">Copium</div>
        <div className="dos"><input type="text" placeholder="Czego szukasz?" id="hlp" /></div>
       </header>

       <section className="main">
         <div className="sld">
           <h1>Jesteś nowy?</h1> <br></br>
           <Link to="/Reg"><a id="dd">Zarejestrój się!</a></Link>
          
        </div>
      </section>

       <footer className="stopka">

       </footer>
     </div>
    
  );
}

export default Home;
