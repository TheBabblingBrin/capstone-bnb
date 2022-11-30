import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/navigation/navbar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate } from './store/session';
import SpotIndex from './components/spots/spotsindex';
import SpotForm from './components/spots/spotform';
import SingleSpot from './components/spots/singleSpot';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/' exact={true} >
          {/* <SpotForm /> */}
          <SpotIndex />
        </Route>
        <Route path='/spots/:spotId'>
          <SingleSpot />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
