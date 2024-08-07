import './login-style.css';

function Login(){

return(

    <div className="main">
            <div className='container'>
                <h2 className='h2-header'>Sign-in</h2>
            <form className='data'>
                
                <h4 className='h4-container'>User name</h4>
                <input className='input-container' type="text" />

                <h4 className='h4-container'>Password</h4>
                <input className='input-container' type="text" />

                <input className='input-sub' type="submit" value="Login" />
            </form>

            <button className='btn-end'>Sign up</button>

            </div>
        </div>
    
);

}

export default Login;