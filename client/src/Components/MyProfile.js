import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'mongoose';

class MyProfile extends React.Component {
  render() {
    return (
      <section id='my-profile'>
        <img src='./img/image1.png' alt='Profile-page' />
        <h1>Dhruv Adlakha</h1>
        <div className='profile-card'>
          <div className='info'>
            <p className='info-headings'>Email:</p>
            <p className='info-contents'>dhruvadl25@gmail.com</p>
          </div>
          <div className='clr'></div>
          <div className='info'>
            <p className='info-headings'>Status:</p>
            <p className='info-contents'>Second year student</p>
          </div>
          <div className='clr'></div>
          <div className='info'>
            <p className='info-headings'>Age:</p>
            <p className='info-contents'>20</p>
          </div>
          <div className='clr'></div>
          <div className='info'>
            <p className='info-headings'>Hometown:</p>
            <p className='info-contents'>Jaipur</p>
          </div>
          <div className='clr'></div>
        </div>
        <NavLink to='/updateProfile' className='btn'>
          Update profile
        </NavLink>
      </section>
    );
  }
}
