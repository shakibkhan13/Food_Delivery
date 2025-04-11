import React, { useState } from 'react'
import './login.css'
import { assets } from '../../assets/assets'

const Login = ({setShowLogIn}) => {

    const [currentState , setCurrentState] = useState("Sign Up")

  return (
    <div className='login-pop-up'>
        <form className="login-pop-up-container">
            <div className="login-pop-up-title">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogIn(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-pop-up-inputs">
                {
                    currentState==="Login"?<></>:<input type="text" placeholder='Enter Your Name' required />
                }
                <input type="email" placeholder='Enter Your Email' required />
                <input type="password" placeholder='Enter Password' required />
            </div>
            <button>
                {
                    currentState==="Sign Up"?"Create account":"Login"
                }
            </button>
            <div className="login-pop-up-condition">
                <input type="checkbox" required />
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {
                currentState=="Login"
                ?
                <p>Create a new account ? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
                :<p>Already have an account ? <span onClick={()=>setCurrentState("Login")}>Login here</span> </p>
            } 
        </form>
    </div>
  )
}

export default Login