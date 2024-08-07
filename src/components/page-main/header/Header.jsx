
import './header.css';
import Menu from '../menu/Menu';

function Header() {
    return (
        <div className="App-header">
            <div className="logo">
                <img src="/images/logo.svg" alt="logo"/>
            </div>
            <div className="nav-site">
                <a className="link" href="#">Model S</a>
                <a className="link" href="#">Model 3</a>
                <a className="link" href="#">Model X</a>
                <a className="link" href="#">Model Y</a>
                <a className="link" href="#">Solar Roof</a>
                <a className="link" href="#">Solar Panels</a>
            </div>
            <Menu />
        </div>
    );
}

export default Header;
