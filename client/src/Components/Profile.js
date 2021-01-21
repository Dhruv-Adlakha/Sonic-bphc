import React from 'react';
import Spinner from './Spinner';

const Profile = (props) => (
  <section id='profiles'>
    <section id='profile'>
      <div className='profile-card'>
        <img src='./img/image1.png' alt='Profile-page' />
        <h1>{props.user.name}</h1>
        <div className='info'>
          <p className='info-headings'>Email:</p>
          <p className='info-contents'>{props.user.email}</p>
        </div>
        <div className='clr'></div>
        <div className='info'>
          <p className='info-headings'>Status:</p>
          <p className='info-contents'>{props.user.status}</p>
        </div>
        <div className='clr'></div>
        <div className='info'>
          <p className='info-headings'>Age:</p>
          <p className='info-contents'>{props.user.age}</p>
        </div>
        <div className='clr'></div>
        <div className='info'>
          <p className='info-headings'>Hometown:</p>
          <p className='info-contents'>{props.user.hometown}</p>
        </div>
        <div className='clr'></div>
      </div>
    </section>
  </section>
);

export default Profile;
