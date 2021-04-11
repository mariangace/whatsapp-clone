import React from 'react'
import { Button } from "@material-ui/core";
import './login.style.css';

function Login() {
  const signIn = () => {
    console.log('sign in');
  }
  return (
    <div className="login">
      <div className="login__container">
        <img src="http://assets.stickpng.com/images/5ae21cc526c97415d3213554.png" alt="whatsapp"/>
        <div className="login__text">
        <h1> Sign in to Whatsapp</h1>
      </div>
      <Button onClick={signIn}>
        Sign in with Google
      </Button>
      </div>
      
    </div>
  )
}

export default Login
