import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import ErrorDisplay from '../../ErrorDisplay'
import { signUp } from '../../../../store/session';
import LoginForm from './LoginForm';

const SignUpForm = ({location=null, setShowModal}) => {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [loginForm, setLoginForm] = useState(false)
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
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

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {

      const data = await dispatch(signUp(email, password, firstName, lastName));
      if (data) {
        setErrors(data)
      }
    }
    else {
     setErrors(['Passwords do not match'])
    }
  };



  const updateFirstname = (e) => {
    setFirstname(e.target.value);
  };
  const updateLastname = (e) => {
    setLastname(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  if(loginForm){
    return (
      <LoginForm />
    )
  }
  return (
    <form onSubmit={onSignUp} className="modal-forms">
      {errors.length > 0 &&
       <div className='signup-error-list'>
        <ErrorDisplay id={'signup-error-list'} errors={errors}/>
        </div>}
      {location === 'Reserve' &&
      <h3>Your dream vacation is waiting for you!</h3>
      }
      <div className='login-form-fields'>
        <input
          className='login-input first-field'
          id='sign-up-email'
          type='text'
          name='email'
          placeholder="Email"
          onChange={updateEmail}
          value={email}
        ></input>
      <div>
        <input
          className='login-input'
          id='sign-up-firstName'
          type='text'
          name='FirstName'
          placeholder="First Name"
          onChange={updateFirstname}
          value={firstName}
        ></input>
      </div>
      <div>
        <input
          className='login-input'
          id='sign-up-lastName'
          type='text'
          name='LastName'
          placeholder="Last Name"
          onChange={updateLastname}
          value={lastName}
        ></input>
      </div>
      <div>

        <input
          className='login-input'
          id='sign-up-password'
          type='password'
          name='password'
          placeholder="Password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <input
          className='login-input last-field'
          id='sign-up-confirm-password'
          type='password'
          name='repeat_password'
          placeholder="Confirm Password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
        ></input>
      </div>
      </div>
      <div className='login-button-wrapper'>
        <button type='submit' className='login-button'>Sign Up</button>
      </div>
      <h6 onClick={()=> setLoginForm(true)}>Already have an account? Login here</h6>
    </form>
  );
};

export default SignUpForm;
