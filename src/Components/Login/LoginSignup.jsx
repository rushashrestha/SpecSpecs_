import React, { useState } from "react";
import './Loginsignup.css'


const LoginSignup = () => {
    const[state,setState]=useState("Login");

    


    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <div className="header">
                <div className="text">{state}</div>
                <div className="underline"></div>
                </div>
                
                <div className="loginsignup-fields">
                    {state==="Sign Up"?<input type="text" placeholder="Your Name"/>:<></>}
                    <input type="email" placeholder="Email Address"/>
                    <input  type="password" placeholder="Password"/>
                </div>
                <div className="btn">
                     <button >Continue</button>
                </div>
                <div className="account">
                    {state==="Sign Up"?<p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login</span></p>:<p className="loginsignup-login">Don't have an account? <span onClick={()=>{setState("Sign Up")}}>Sign Up</span></p>}
                </div>
                
            </div>
        </div>
    )
}
export default LoginSignup