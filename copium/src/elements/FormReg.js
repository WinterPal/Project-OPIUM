function FormReg(){
    return(
        <div id="formlog">

          <h1 style={{"font-size":"5vh"}}>Zarejestroj sie</h1>
  
        <form id="logform">
           
          <div className="formElement">
            <p style={{"font-size":"4vh"}}> Imie</p>
            <input type="text" className="forminput" placeholder="Podaj Imie:"/>
          </div>
          <div className="formElement">
            <p style={{"font-size":"4vh"}}>Nazwisko</p>
            <input type="text" className="forminput" placeholder="Podaj Nazwisko:"/>
          </div>
          <div className="formElement">
            <p style={{"font-size":"4vh"}}> Email</p>
            <input type="email" className="forminput" placeholder="Podaj Email:"/>
          </div>

          <div className="formElement">
            <p style={{"font-size":"4vh"}}> Haslo</p>
            <input type="password" className="forminput" placeholder="Podaj Haslo:"/>
          </div>

            <button style={{"width" : "160px"}} type="submit" className="submitbutton">Zatwierdź</button>

        </form>

        <p style={{"font-size":"1.5vh"}}>Nie masz konta? Zarejestroj sie!!</p>

        </div>
    );
}

export default FormReg