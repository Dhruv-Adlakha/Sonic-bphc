import React from 'react';
import { NavLink } from 'react-router-dom';

const Signup = () => (
  <section id='signup'>
    <div className='back'>
      <h1>Sign up</h1>
      <form>
        <div className='signup-element'>
          <label for='name'>Name</label>
          <input className='form-input' type='text' />
        </div>
        <div className='clr'></div>
        <div className='signup-element'>
          <label for='email'>Email</label>
          <input className='form-input' type='email' />
        </div>
        <div className='clr'></div>
        <div className='signup-element'>
          <label for='password'>Password</label>
          <input className='form-input' type='password' />
        </div>
        <div className='clr'></div>
        <div className='signup-element'>
          <label for='status'>Status</label>
          <input className='form-input' type='text' />
        </div>
        <div className='clr'></div>

        <div className='signup-element'>
          <label for='age'>Age</label>
          <input className='form-input' type='text' />
        </div>
        <div className='clr'></div>
        <div className='signup-element'>
          <label for='hometown'>Hometown</label>
          <input className='form-input' type='text' />
        </div>
        <div className='clr'></div>
      </form>
      <div className='submit'>
        <button className='btn'>Submit</button>
      </div>
      <p>
        Already Have an account? <NavLink to='/login'>Login here</NavLink>
      </p>
    </div>
  </section>
);

export default Signup;
