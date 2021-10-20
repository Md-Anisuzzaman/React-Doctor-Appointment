import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useFirebase from '../Hook/useFirebase';
import './Login.css'

const Login = () => {

    const {handleRegistration,handleEmailChange, handlePasswordlChange, handleGooglesignin, toggleLogin,isLogin,user,error } = useFirebase();
    const location = useLocation();
    const history  = useHistory();
    const redirect_url = location.state?.from || '/home';
console.log( redirect_url);
    const googleLogin = () =>{
        handleGooglesignin()
         .then((result) => {
               history.push(redirect_url);
            });

    }

    return (
        <div>


            <div className="form-body">
                <h1>{error}</h1>
                <form onSubmit={handleRegistration}>
                    <label htmlFor="email">Email_ID:</label>
                    <input onChange={handleEmailChange} className="w-25" type="text" name="email" />
                    <br />
                    <br />
                    <label htmlFor="password">Password:  </label>
                    <input onChange={handlePasswordlChange} className="w-25" type="password" name="password" />
                    <p className="mt-3 justify-cntent-center">Not yet registered? please register first!</p>
                    <button onChange={toggleLogin} className="btn btn-danger mx-5">{isLogin? 'Login' :'Register'}</button>
                </form>
                <button onClick={googleLogin} className="btn btn-primary mt-3">Google Sign in</button>
                {/* <button onClick={handleGooglesignin} className="btn btn-primary mt-3">Google Sign in</button> */}
            </div>




        </div>
    );
};

export default Login;