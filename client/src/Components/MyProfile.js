import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class MyProfile extends React.Component {
  render() {
    return (
      <section id='my-profile'>
        <img src='./img/image1.png' alt='Profile-page' />
        <h1>{this.props.user && this.props.user.name}</h1>
        <div className='profile-card'>
          <div className='info'>
            <p className='info-headings'>Email:</p>
            <p className='info-contents'>
              {this.props.user && this.props.user.email}
            </p>
          </div>
          <div className='clr'></div>
          <div className='info'>
            <p className='info-headings'>Status:</p>
            <p className='info-contents'>
              {this.props.user && this.props.user.status}
            </p>
          </div>
          <div className='clr'></div>
          <div className='info'>
            <p className='info-headings'>Age:</p>
            <p className='info-contents'>
              {this.props.user && this.props.user.age}
            </p>
          </div>
          <div className='clr'></div>
          <div className='info'>
            <p className='info-headings'>Hometown:</p>
            <p className='info-contents'>
              {this.props.user && this.props.user.hometown}
            </p>
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

const mapStateToProps = (state) => {
  return {
    user: state.currentUser,
  };
};

export default connect(mapStateToProps)(MyProfile);
