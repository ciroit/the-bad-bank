import react from 'react'
import {useLocation} from 'react-router-dom'
import {UserContext} from '../Shared/Context'

function NavBar(){


    const ctx = react.useContext(UserContext);

    const [value, setValue] = react.useState(null);

    var location = useLocation();

    
    console.log("Rendering NavBar", ctx);

    const convertTo = (theme) => {


        let bgColor, textColor, navBarColor;

        if(theme == "dark"){

            bgColor = 'dark';
            navBarColor = 'dark';
            textColor = 'white';

        }else if(theme == 'success'){
            
            bgColor = 'success';
            navBarColor = 'dark';
            textColor = 'white';

        }else if(theme == 'primary'){
            
            bgColor = 'primary';
            navBarColor = 'dark';
            textColor = 'white';

        }else if(theme == 'light'){
            
            bgColor = 'light';
            navBarColor = 'light';
            textColor = 'black';

        }

        ctx.theme = {bgColor, navBarColor, textColor};

        setValue(Date.now());

    }

    const logout = () => {

      ctx.userSession = null;

      window.location.href = '#/login';

      setValue(Date.now());

    }

    console.log(location);

    var createAccountLinkClassName = location.pathname == '/createaccount/' ? 'nav-link active' : 'nav-link';
    var loginLinkClassName = location.pathname == '/login/' ? 'nav-link active' : 'nav-link';
    var depositLinkClassName = location.pathname == '/deposit/' ? 'nav-link active' : 'nav-link';
    var withDrawLinkClassName = location.pathname == '/withdraw/' ? 'nav-link active' : 'nav-link';
    var allDataLinkClassName = location.pathname == '/alldata/' ? 'nav-link active' : 'nav-link';
    var transferLinkClassName = location.pathname == '/transfer/' ? 'nav-link active' : 'nav-link';
    var historyLinkClassName = location.pathname == '/history/' ? 'nav-link active' : 'nav-link';

    return (
        <nav className={`navbar navbar-expand-lg navbar-${ctx.theme.navBarColor} bg-${ctx.theme.bgColor}`} >
            <div className="container-fluid">
            <a className="navbar-brand" href="#">BadBank</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                  {ctx.userSession ? (
                    <>
                      <li className="nav-item">
                        <a className={depositLinkClassName} aria-current="page"  href="#/deposit/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Make a Deposit!">Deposit</a>
                      </li>
                      <li className="nav-item">
                        <a className={withDrawLinkClassName} aria-current="page"  href="#/withdraw/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Make a Withdraw!">Withdraw</a>
                      </li>
                      <li className="nav-item">
                        <a className={transferLinkClassName} aria-current="page"  href="#/transfer/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Make a Transfer!">Transfer</a>
                      </li>
                      <li className="nav-item">
                        <a className={historyLinkClassName} aria-current="page"  href="#/history/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="See all your transactions!">History</a>
                      </li>
                    </>

                  ) : (

                    <>
                      <li className="nav-item">
                        <a className={loginLinkClassName} aria-current="page"  href="#/login/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Login!">Login</a>
                      </li>
                      <li className="nav-item">
                        <a className={createAccountLinkClassName} aria-current="page"  href="#/createaccount/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Create a new Account!">Create Account</a>
                      </li>  
                      <li className="nav-item">
                        <a className={allDataLinkClassName} aria-current="page"  href="#/alldata/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="See All Data!!(Only for admin users)">All Data</a>
                      </li>       
                    </>

                  )}       
                    
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle dropdown-menu-right" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" title="Change page for see the new theme!">
                            Select Theme
                        </a>
                        <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href='#' onClick = { () => {  convertTo("dark"); } }>Dark</a></li>
                            <li><a className="dropdown-item" href='#' onClick = { () => {  convertTo("success"); } }>Success</a></li>
                            <li><a className="dropdown-item" href='#' onClick = { () => {  convertTo("primary"); } }>Primary</a></li>  
                            <li><a className="dropdown-item" href='#' onClick = { () => {  convertTo("light"); } }>Light</a></li>
                            
                        </ul>
                    </li>
                </ul>
                <span className="navbar-text">

                  {ctx.userSession ? ( <>{"Hi " + ctx.userSession.name} &nbsp; <button className='btn btn-light' onClick={logout} >Logout</button></> ) : null}
                   
                </span>
            </div>
            </div>
        </nav>
    );

}

export default NavBar;