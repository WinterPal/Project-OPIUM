function TopBar() {
    return ( 
        <header>
            <a href="/" style={{"color" : "white","textDecoration" : "none"}}><label>Copium</label></a>
            <input type="text" placeholder="Czego szukasz?" id="searchbar" />
            <div id="usericon"></div>
        </header>
     );
}

export default TopBar;