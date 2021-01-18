import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <navbar>
    <div className='container'>
      <h1>
        <NavLink to='/'>SONIC</NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
      </ul>
    </div>
  </navbar>
);

export default Navbar;
