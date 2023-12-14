function FormLog() {
    return ( 
        <div id="formlog">
            
         <h1 style={{"font-size":"5vh","position":"relative","top":"3vh"}}>Zaloguj sie</h1>
         

         <form>
            
           <div className="formelement">
             <p style={{"font-size":"4vh","position":"relative","right":"20vh"}}> Email</p>
             <input type="email" className="forminput" placeholder="Podaj Email:"/>
           </div>

           <div className="formelement">
             <p style={{"font-size":"4vh","position":"relative","right":"20vh"}}> Haslo</p>
             <input type="password" className="forminput" placeholder="Podaj Haslo:"/>
           </div>

             <button type="submit" className="submitbutton">Zatwierdź</button>

         </form>

         <p style={{"font-size":"1.5vh","position":"relative","top":"2vh"}}>Nie masz konta? Zarejestroj sie!!</p>

        </div>
     );
}

export default FormLog;