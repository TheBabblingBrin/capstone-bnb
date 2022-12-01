import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/navigation/navbar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate } from './store/session';
import SpotIndex from './components/spots/spotsindex';
import SpotForm from './components/spots/spotform';
import SingleSpot from './components/spots/singleSpot';
import AccountPage from './components/account';

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
        <Route path='/' exact={true} >
          <SpotIndex />
        </Route>
        <ProtectedRoute path='/user'>
            <AccountPage />
        </ProtectedRoute>
        <Route path='/spots/:spotId'>
          <SingleSpot />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
