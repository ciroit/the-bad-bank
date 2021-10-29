import react from 'react'
import {useLocation} from 'react-router-dom'

function NavBar(){

    const [navBarcolor, setNavBarcolor] = react.useState('dark');

    const [bgColor, setBgColor] = react.useState('success');

    var location = useLocation();

    const convertTo = (newNbColor, newBgColor) => {

        setNavBarcolor(newNbColor);
        setBgColor(newBgColor);

    }

    console.log(location);

    var createAccountLinkClassName = location.pathname == '/createaccount/' ? 'nav-link active' : 'nav-link';
    var loginLinkClassName = location.pathname == '/login/' ? 'nav-link active' : 'nav-link';
    var depositLinkClassName = location.pathname == '/deposit/' ? 'nav-link active' : 'nav-link';
    var withDrawLinkClassName = location.pathname == '/withdraw/' ? 'nav-link active' : 'nav-link';
    var balanceLinkClassName = location.pathname == '/balance/' ? 'nav-link active' : 'nav-link';
    var allDataLinkClassName = location.pathname == '/allData/' ? 'nav-link active' : 'nav-link';

    return (
        <nav className={`navbar navbar-expand-lg navbar-${navBarcolor} bg-${bgColor}`} >
            <div className="container-fluid">
            <a className="navbar-brand" href="#">BadBank</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className={createAccountLinkClassName} aria-current="page"  href="#/createaccount/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Create a new Account!">Create Account</a>
                    </li>
                    <li className="nav-item">
                        <a className={loginLinkClassName} aria-current="page"  href="#/login/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Login!">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className={depositLinkClassName} aria-current="page"  href="#/deposit/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Make a Deposit!">Deposit</a>
                    </li>
                    <li className="nav-item">
                        <a className={withDrawLinkClassName} aria-current="page"  href="#/withdraw/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Make a Withdraw!">Withdraw</a>
                    </li>
                    <li className="nav-item">
                        <a className={balanceLinkClassName} aria-current="page"  href="#/balance/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="See your balance!">Balance</a>
                    </li>
                    <li className="nav-item">
                        <a className={allDataLinkClassName} aria-current="page"  href="#/alldata/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="See All Data!">All Data</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle dropdown-menu-right" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select NavBar Color
                        </a>
                        <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" onClick = { () => {  convertTo("dark", "dark"); } }>Dark</a></li>
                            <li><a className="dropdown-item" onClick = { () => {  convertTo("dark", "success"); } }>Success</a></li>
                            <li><a className="dropdown-item" onClick = { () => {  convertTo("dark", "primary"); } }>Success</a></li>  
                            <li><a className="dropdown-item" onClick = { () => {  convertTo("light", "light"); } }>Light</a></li>
                            
                        </ul>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    );

}

export default NavBar;