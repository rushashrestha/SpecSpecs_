import React, { useState } from "react";
import './Loginsignup.css'


const LoginSignup = () => {

    const[state,setState] = useState("Login");
    const[formData,setFormData]=useState({
        yourname:"",
        email:"",
        password:""
    })
    const changeHandler = (e) =>{
       setFormData({...formData,[e.target.name]:e.target.value})
    }

    const login = async () =>{
        console.log("Login Function Executed",formData);

    }

    const signup = async () =>{
        console.log("Signup Function Executed",formData);
        let responseData;
        await fetch('http://localhost:3000/Login',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response)=>response.json()).then((data)=>responseData=data)

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
    }


    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <div className="header">
                <div className="text">{state}</div>
                <div className="underline"></div>
                </div>
                
                <div className="loginsignup-fields">
                    {state==="Sign Up"?<input name='yourname' value={formData.yourname} onChange={changeHandler} type="text" placeholder="Your Name"/>:<></>}
                    <input name='email' value={formData.email} onChange={changeHandler}type="email" placeholder="Email Address"/>
                    <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="Password"/>
                </div>
                <div className="btn">
                     <button onClick={()=>{state==="Login"? login():signup()}}>Continue</button>
                </div>
                <div className="account">
                    {state==="Sign Up"?<p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login</span></p>:<p className="loginsignup-login">Don't have an account? <span onClick={()=>{setState("Sign Up")}}>Sign Up</span></p>}
                </div>
                
            </div>
        </div>
    )
}
export default LoginSignup