import React from 'react';
import SignUpForm from './signup';
import SignInForm from './signin';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function SignUpAndSignInCombine() {
    const [type, setType] = useState("signIn");
    const handleOnClick = text => {
      if (text !== type) {
        setType(text);
        return;
      }
    };
    const containerClass =
      "container " + (type === "signUp" ? "right-panel-active" : "");
    return (
      <>
      <div className='container-fluid'>
        <h2 className='main-title'>Sign In / Sign-up</h2>
        <div className={containerClass} >

          <SignUpForm />
          <SignInForm />
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  Already have an account? Sign In here
                </p>
                <button
                  className="ghost"
                  id="signIn"
                  onClick={() => handleOnClick("signIn")}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, JMANite!</h1>
                <p>Don't have an account? Signup here</p>
                <button
                  className="ghost "
                  id="signUp"
                  onClick={() => handleOnClick("signUp")}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
      
}

export default SignUpAndSignInCombine;