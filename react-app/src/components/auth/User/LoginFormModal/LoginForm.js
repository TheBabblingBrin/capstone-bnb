import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from "react-redux";
import {login} from '../../../../store/session'
import './LoginForm.css'
function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

useEffect(()=>{

},[])

  const handleSubmit = async (e) => {

    e.preventDefault();
    setErrors([]);

   dispatch(login( credential, password ))

  };

  return (
    <div className="modal-forms">


    <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={credential}
          placeholder="Username or Email"
          onChange={(e) => setCredential(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"

          onChange={(e) => setPassword(e.target.value)}
        />
      <button type="submit" className="login-button">Log In</button>
    </form>
    </div>
  );
}

export default LoginForm;
