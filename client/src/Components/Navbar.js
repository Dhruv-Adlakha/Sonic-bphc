import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = (props) => (
  <div id='navbar'>
    {!props.isAuthenticated && (
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
    )}
    {props.isAuthenticated && (
      <div className='container'>
        <h1>
          <NavLink to='/'>SONIC</NavLink>
        </h1>
        <ul>
          <li>
            <NavLink to='/dashboard'>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to='/profiles'>Profiles</NavLink>
          </li>
          <li>
            <NavLink to='/posts'>Posts</NavLink>
          </li>
          <li>
            <NavLink to='/logout'>Logout</NavLink>
          </li>
        </ul>
      </div>
    )}
  </div>
);

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps)(Navbar);
