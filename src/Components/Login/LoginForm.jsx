import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'
import React, { useState,useEffect } from 'react';
import './LoginForm.css';
import { Navigate, useNavigate } from 'react-router-dom';


const LoginForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(''); 
  const navigate = useNavigate();
  

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  const handleGoogleSignIn = (event) => {
    event.preventDefault();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // Redirect to "/" path
        navigate("/");
        setMessage('Sign in successful!');
     
       
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const handleGoogleSignUp = (event) => {
    event.preventDefault();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // Redirect to "/" path
        navigate("/");
        setMessage('Sign up successful!');
       
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

 
  const handleEmailSignUp = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // Redirect to "/" path
        navigate("/");
        setMessage('Sign up successful!');
      
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setMessage(errorMessage);
      });
  };

  const handleEmailSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // Redirect to "/" path
        navigate("/");
        setMessage('Sign in successful!');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setMessage(errorMessage);
      });
  };


  return (

    <div className={`container ${isSignUp ? 'right-panel-active' : ''}`} id="container">
       
      <div className="form-container sign-up-container">
        <form className="f-form">
          <h1 className="f-H1">Sign Up</h1>
          <div className="social-container">
            <button className="social" onClick={handleGoogleSignUp}>
              <i className="fab fa-google"></i>
            </button>
          </div>
          <span className="f-span">or use your email for registration</span>
          <input className="f-input" type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
          <input className="f-input" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          <input  className="f-input" type="password" placeholder="Confirm Password" onChange={e => setConfirmPassword(e.target.value)} />
          <button className="f-button" type="button" onClick={handleEmailSignUp}>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form className="f-form">
          <h1>Sign In</h1>
          <div className="social-container">
            <button className="social" onClick={handleGoogleSignIn}>
              <i className="fab fa-google"></i>
            </button>
          </div>
          <span className="f-span">or use your account</span>
          <input className="f-input" type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
          <input className="f-input" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          <button  className="f-button" type="button" onClick={handleEmailSignIn}>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p className="f-p" >Please login with your personal info</p>
            <button className="ghost" id="signIn" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p className="f-p">Enter your personal details and start your journey with us</p>
            <button className="ghost" id="signUp" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default LoginForm;