import React from 'react';
import { NavLink } from 'react-router-dom';

const LandingPage = () => (
  <section id='landing'>
    <h1>Hey! connect to the Campus</h1>
    <div className='landing-buttons'>
      <NavLink className='btn' to='/signup'>
        Sign up
      </NavLink>
      <NavLink className='btn' to='/login'>
        Login
      </NavLink>
    </div>
  </section>
);

export default LandingPage;
