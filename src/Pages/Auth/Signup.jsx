import React, {useState,useContext} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {Type} from '../../Utils/action.type.js';
import classes from './signup.module.css';
import {auth} from '../../Utils/firbase';
import {ClipLoader} from 'react-spinners';
import {DataContext} from '../../components/DataProvider/DataProvider';
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth';

function Signup() {
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const[{user},dispatch]=useContext(DataContext);
  const [error, setError]=useState("");
  const navStateData=useLocation();
  const [loading, setLoading]=useState({
    signIn:false,
    signUp:false,
  });
  const navigate= useNavigate();
  // console.log(navStateData);
  // console.log(user);
//  console.log(password, email);
 //Handler Function
 const signupHandler= async(e)=>{
    e.preventDefault();
    // console.log(e.target.name);
    if(e.target.name==="signin"){
      setLoading({...loading, signIn:true});
      navigate(navStateData?.state?.redirect || "/");
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        // console.log(user);
        dispatch({
          type:Type.SET_USER,
          user:userCredential.user
        }); 
        setLoading({...loading, signIn:false});
      }).catch((error) => {
        setLoading({...loading, signIn:false});
        // const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // console.log(errorCode, errorMessage);
      });
  }
  else{
    setLoading({...loading, signUp:true});
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // const user = userCredential.user;
      // console.log(user);
      dispatch({
        type:Type.SET_USER,
        user:userCredential.user
      });  
      setLoading({...loading, signUp:false});
      navigate(navStateData?.state?.redirect || "/");
  })
  .catch((error) => { 
    // const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorMessage);
    setLoading({...loading, signUp:false});
    // console.log(errorCode, errorMessage);
  }
  );
  } 
}
  return (
    <section>
<Link to='/'>
      <div className={classes.logo_container}> 
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        alt = "amazon-logo" />
      </div>
      </Link>
      <div className={classes.signup_container}> 
        <form action="" className={classes.signup_form}>
          <h1>Sign-in</h1>
          {navStateData?.state?.msg &&(
            <small
            style={{color:"red", 
            fontSize:"12px",
            textAlign:"center",
             marginBottom:"10px"}}>
              {navStateData?.state?.msg}
              </small>
          )}
          {/* <label htmlFor="name">Your name</label>
          <input type="text" name="name" id="name" /> */}
          <label htmlFor="email">Email</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} 
          type="email" name="email"  id="email" />
          <label htmlFor="password">Password</label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)}
           type="password" name="password" id="password" />
          <button type="submit" name="signin" onClick={signupHandler}
          className={classes.signin_button}>
          {loading.signIn ? <ClipLoader color="white" size={15} /> : "Sign-in"}
          </button>
          <p>By continuing, you agree to Amazon's <a href="">Conditions of Use</a> and <a href="">Privacy Notice</a>.</p>
          <button type="submit" name="signup" onClick={signupHandler}
           className={classes.create_account}> Create your Amazon account
           </button>
           {error && <p style={{color:"red"}}>{error}</p>}
        </form>
        </div>
    </section>
  );
}
export default Signup;  