import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';

export const NavBar = (): JSX.Element => {
  return (
    <Router>

        <nav className='main-nav' >
          <ul className='nav-list' >
            <li className='list-logo__nav'>
              <NavLink to="/" style={{ textDecoration: 'none' }} className='logo-nav' > <div className='nav_logo--img' />Web Form</NavLink>
            </li>
            <li className='list-link__nav'>
              <NavLink to="/register" style={{ textDecoration: 'none' }} className='link-nav' activeClassName='link-nav__active'>Registro</NavLink>
            </li>
            <li className='list-link__nav'>
              <NavLink style={{ textDecoration: 'none' }} className='link-nav' activeClassName='link-nav__active' to="/login">Iniciar sesión</NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/register" exact>
            <RegisterPage />
          </Route>
          <Route path="/" >
            <RegisterPage />
          </Route>
        </Switch>

    </Router>
  );
}


