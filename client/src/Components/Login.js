import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => (
  <section id='login'>
    <div className='back'>
      <h1>Login</h1>
      <form>
        <div className='login-element'>
          <label for='name'>Name</label>
          <input className='form-input' type='text' />
        </div>
        <div className='clr'></div>
        <div className='login-element'>
          <label for='email'>Email</label>
          <input className='form-input' type='email' />
        </div>
        <div className='clr'></div>
        <div className='login-element'>
          <label for='password'>Password</label>
          <input className='form-input' type='password' />
        </div>
        <div className='clr'></div>
      </form>
      <div className='submit'>
        <button className='btn'>Submit</button>
      </div>
      <p>
        Don't Have an account? <NavLink to='/signup'>Sign up</NavLink>
      </p>
    </div>
  </section>
);

export default Login;
