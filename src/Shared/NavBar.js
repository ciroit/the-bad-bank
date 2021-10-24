import {useLocation} from 'react-router-dom'

function NavBar(){

    var location = useLocation();

    console.log(location);

    var createAccountLinkClassName = location.pathname == '/createaccount/' ? 'nav-link active' : 'nav-link';
    var loginLinkClassName = location.pathname == '/login/' ? 'nav-link active' : 'nav-link';
    var depositLinkClassName = location.pathname == '/deposit/' ? 'nav-link active' : 'nav-link';
    var withDrawLinkClassName = location.pathname == '/withDraw/' ? 'nav-link active' : 'nav-link';
    var balanceLinkClassName = location.pathname == '/balance/' ? 'nav-link active' : 'nav-link';
    var allDataLinkClassName = location.pathname == '/allData/' ? 'nav-link active' : 'nav-link';

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
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
                </ul>
            </div>
            </div>
        </nav>
    );

}

export default NavBar;