import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from "react-redux";
import {login} from '../../../../store/session'
import ErrorDisplay from '../../ErrorDisplay'

import './LoginForm.css'
function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

useEffect(()=>{
const menu = document.querySelector('.user-menu')
const profile = document.querySelector('.profile-dropdown-button')
if(menu && profile){
  menu.style.visibility = 'hidden'
  return () => {
    profile.click()
    menu.style.visibility = 'unset'
  }
}
},[])

  const handleSubmit = async (e) => {

    e.preventDefault();
    setErrors([]);

   const user = await dispatch(login( credential, password ))
   if (user) {
    setErrors(user)
  }
  };

  return (
    <div className="modal-forms">


    <form onSubmit={handleSubmit}>
    {errors.length > 0 &&
      <div className='signup-error-list'>
        <ErrorDisplay id={'signup-error-list'} errors={errors}/>
      </div>}
    <div className='login-form-fields'>

        <input
          className='login-input first-field'
          id='login-email'
          type="text"
          value={credential}
          placeholder="Email"
          onChange={(e) => setCredential(e.target.value)}
        />
        <input
          className='login-input last-field'
          id='login-password'
          type="password"
          value={password}
          placeholder="Password"

          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <div className='login-button-wrapper'>
          <button type="submit" className="login-button">Log In</button>
        </div>
    </form>
    </div>
  );
}

export default LoginForm;
