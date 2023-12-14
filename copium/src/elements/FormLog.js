function FormLog() {
    return ( 
        <div id="formlog">
            
         <h1 style={{"font-size":"5vh"}}>Zaloguj sie</h1>
         <form id="logform">
            
           <div className="formElement">
             <p style={{"font-size":"4vh","text-align" : "start"}}> Email</p>
             <input type="email" className="forminput" placeholder="Podaj Email:"/>
           </div>

           <div className="formElement">
             <p style={{"font-size":"4vh","text-align" : "start"}}> Haslo</p>
             <input type="password" className="forminput" placeholder="Podaj Haslo:"/>
           </div>

             <button type="submit" className="submitbutton">Zatwierdź</button>

         </form>

         <p style={{"font-size":"1.5vh",}}>Nie masz konta? Zarejestroj sie!!</p>

        </div>
     );
}

export default FormLog;