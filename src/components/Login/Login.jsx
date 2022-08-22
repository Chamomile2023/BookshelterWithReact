import React from "react";
import './Login.scss'

const Login = ({ logo, user, lock }) => {
    return (
        <div className="login">
            <div className="container-fluid">
                <div className="login__hero">
                    <div className="login__logo">
                        <img src={logo} alt="" className="login--logo" />
                    </div>
                    <div className="login__user">
                        <img src={user} alt="" className="login--user" />
                        <input type="text" placeholder="Username" className="login--input" />
                    </div>
                    <div className="login__lock">
                        <img src={lock} alt="" className="login--user" />
                        <input type="text" placeholder="Password" className="login--input" />
                    </div>
                    <div className="login__btn">
                        <button className="login--btn">login</button>
                        <span className="login--span">Forgot password?</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
