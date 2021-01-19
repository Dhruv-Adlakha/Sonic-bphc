import React from 'react';

const UpdateProfile = () => (
  <section id='signup' className='backremove'>
    <div className='back'>
      <h1>Update profile</h1>
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
        {/* need to add functionality of going to myprofile page on clicking it  */}
        <button className='btn'>Update</button>
      </div>
    </div>
  </section>
);

export default UpdateProfile;
