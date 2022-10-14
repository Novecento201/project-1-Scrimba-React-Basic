import Logo from "../img/reactjs-icon.png"

const Navbar = (props) => {
    return ( 
        <nav className={props.darkMode ? "dark": ""}>
            <div className="logo">
                <img src={Logo} alt="react logo" className="logo-img"/>
                <h3 className="logo-title">ReactFacts</h3>
            </div>
            
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
     );
}
 
export default Navbar;