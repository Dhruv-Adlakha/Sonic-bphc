import React from 'react';

const Profile = () => (
  <section id='profiles'>
    <section id='profile'>
      <div className='profile-card'>
        <img src='./img/image1.png' alt='Profile-page' />
        <h1>Dhruv Adlakha</h1>
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
    </section>
  </section>
);

export default Profile;
