import React  from 'react'
import { Button } from "@material-ui/core";
import './Login.css';
import { auth, provider } from '../../firebase';
import { actionTypes } from '../../contextAPI/reducer';
import { useStateValue } from '../../contextAPI/StateProvider';

function Login() {
  const [{user},dispatch]  = useStateValue();
  console.log(user?.displayName)
  const signIn = () => {
    auth.signInWithPopup(provider)
    .then((result)=> {
      dispatch({type:actionTypes.SET_USER,
        user:result.user,
      })
    })
    .catch((error)=> console.log(error.message));
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
