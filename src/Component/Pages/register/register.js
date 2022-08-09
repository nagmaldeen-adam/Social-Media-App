import React from 'react';
import './register.css';

function Register (){
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
                    <input className="input"  placeholder="username" />
                    <input className="input"  placeholder="email" />
                    <input className="input"  placeholder="password" />
                    <input className="input"  placeholder=" Password again" />
                    <button className="loginButton" >sign up</button>
                    <button className="forgotButton" >log into your account</button>

                </div>
            </div>
        </div>
    </div>
     )
}

export default Register;