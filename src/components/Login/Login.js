import React, { useEffect, useState } from 'react';
import './Login.css';

import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser, googleLoginUser, signupUser, verifyAuth } from '../../redux';

const Login = () => {
   const [signInState, setSignInState] = useState(true);

   const dispatch = useDispatch();
   const isAuthenticated = useSelector(state => state.authState.isAuthenticated);
   const isLoggingIn = useSelector(state => state.authState.isLoggingIn);
   const loginError = useSelector(state => state.authState.loginError);

   const isSigningUp = useSelector(state => state.authState.isSigningUp);
   const signupError = useSelector(state => state.authState.signupError);

   const user = useSelector(state => state.authState.user);

   const [signInValue, setSignInValue] = useState({
      email: "",
      password: "",
   });

   const [signUpvalue, setSignUpValue] = useState({
      name: "",
      email: "",
      password: "",
   });

   // useEffect(() => {
   //    if (isAuthenticated) {
   //       if (!user.displayName) {
   //          dispatch(verifyAuth());
   //       }
   //    }
   // }, [isAuthenticated, user.displayName])

   const changeSignInhandler = (e) => {
      setSignInValue({
         ...signInValue,
         [e.target.name]: e.target.value,
      });
   };

   const changeSignUphandler = (e) => {
      setSignUpValue({
         ...signUpvalue,
         [e.target.name]: e.target.value,
      });
   };

   const handleSignInSubmit = (e) => {
      e.preventDefault()
      const { email, password } = signInValue;
      dispatch(loginUser(email, password));
   };

   const signinWithGoogle = () => {
      console.log('sign in with google');
      dispatch(googleLoginUser());
   }




   const handleSignUpSubmit = (e) => {
      e.preventDefault();
      const { name, email, password } = signUpvalue;
      dispatch(signupUser(name, email, password));
   }

   return (

      (isAuthenticated) ?
         <Redirect exact to="/" />
         :
         (
            <div id="loginContainer">
               <div className="inneLoginContainer">
                  {signInState ?
                     <div className="form-container">
                        <form onSubmit={handleSignInSubmit}>
                           <h1>Sign in</h1>

                           {loginError ? <div className='error'>
                              <i style={{ color: 'white', transform: 'scale(1.3)', marginRight: '10px' }} className="fa fa-exclamation-circle" aria-hidden="true"></i>
                              {loginError.code}</div> : null}

                           <input
                              type="email"
                              name="email"
                              placeholder="Email"
                              value={signInValue.email}
                              onChange={(e) => changeSignInhandler(e)}
                           />
                           <input
                              type="password"
                              name="password"
                              placeholder="Password"
                              value={signInValue.password}
                              onChange={(e) => changeSignInhandler(e)} />
                           <button type='submit' >Sign In</button>
                           <span>or</span>

                           <div onClick={signinWithGoogle} className="google"><i style={{ color: 'red', transform: 'scale(1.3)', marginRight: '5px' }} className="fa fa-google red-color" aria-hidden="true"></i>
                           Sign in with Google</div>

                           <div className='forget'>Forgot your password?</div>
                           <div className='transfer'>New member <span onClick={() => setSignInState(!signInState)} className='join'>Join now</span></div>
                        </form>
                     </div>
                     :


                     <div className="form-container">
                        <form onSubmit={handleSignUpSubmit}>
                           <h1>Create Account</h1>

                           {signupError ? <div className='error'>
                              <i style={{ color: 'white', transform: 'scale(1.3)', marginRight: '10px' }} className="fa fa-exclamation-circle" aria-hidden="true"></i>
                              {signupError.code}</div> : null}

                           <input
                              type="text"
                              name="name"
                              placeholder="Name"
                              value={signUpvalue.name}
                              onChange={(e) => changeSignUphandler(e)}
                           />
                           <input
                              type="email"
                              name="email"
                              placeholder="Email"
                              value={signUpvalue.email}
                              onChange={(e) => changeSignUphandler(e)}
                           />
                           {/* <input
                              type="tel"
                              name="phone"
                              placeholder="phone"
                              value={signUpvalue.phone}
                              onChange={(e) => changeSignUphandler(e)}
                           /> */}

                           <input
                              type="password"
                              name="password"
                              placeholder="Password"
                              value={signUpvalue.password}
                              onChange={(e) => changeSignUphandler(e)}
                           />
                           <button type='submit'>Sign Up</button>
                           <span>or</span>
                           <div className="google"><i style={{ color: 'red', transform: 'scale(1.3)', marginRight: '5px' }} className="fa fa-google red-color" aria-hidden="true"></i>
                           Continue with Google</div>
                           <div className='transfer'>Already have an Account<span onClick={() => setSignInState(!signInState)} className='join'>Sign in</span></div>
                        </form>
                     </div>
                  }
               </div>
            </div>
         )
   )
}

export default Login;