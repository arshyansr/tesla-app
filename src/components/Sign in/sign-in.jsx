import { Link } from 'react-router-dom';
import './s-style.css';

function Sign(){

    return(
        <div className="main">
            <div className='container'>
                <h2 className='h2-header'>Sign-up</h2>
            <form className='data'>
                
                <h4 className='h4-container'>First Name</h4>
                <input className='input-container' type="text" />

                <h4 className='h4-container'>Last Name</h4>
                <input className='input-container' type="text" />

                <h4 className='h4-container'>Email Address</h4>
                <input className='input-container' type="text" />

                <h4 className='h4-container'>Password</h4>
                <input className='input-container' type="text" />

                <input className='input-sub' type="submit" value="create account" />
            </form>

            <button className='btn-end'><a href="/Login">Login
                    <Link to={'/Login'} />
                </a></button>

            </div>
        </div>
    );
}

export default Sign;