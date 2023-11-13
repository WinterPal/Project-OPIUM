const Reg = () => {
    return ( 
        <div className="App">
        <header className="baner">
          <div className="uno">Copium</div>
         <div className="dos"><input type="text" placeholder="Czego szukasz?" id="hlp" /></div>
        </header>
 
        <section className="main">
          <div className="rej">
            <h2>Zarejestrój się</h2><br></br>
            <a>Login</a><br></br>
            <input type="text"/><br></br>
            <a>Hasło</a><br></br>
            <input type="text"/><br></br>
            Powtórz Hasło<br></br>
            <input type="text"/><br></br>
            <input type="submit" value="Zarejestrój się"/><br></br>
           
         </div>
       </section>
 
        <footer className="stopka">
 
        </footer>
        </div>
     );
}
 
export default Reg;