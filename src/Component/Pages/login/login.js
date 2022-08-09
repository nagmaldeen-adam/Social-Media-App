import React from 'react';
import './login.css';
function Login () {
    return(
        <div className="login">
            <div className="wrapper">
                <div className="left">
                <h3 className="loginLogo"> nagm social</h3>
                    <span className="loginDesc"> 
                    connect with frends and the world around you on nagm social.
                    </span>
                </div>
                <div className="right">
                    <div className="loginBox" >
                        <input className="input"  placeholder="Enter Your Email" />
                        <input className="input"  placeholder="Enter Your Password" />
                        <button className="loginButton" >log in</button>
                        <span className="forget" > fogot password?</span>
                        <button className="forgotButton" >create a new account</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login ;