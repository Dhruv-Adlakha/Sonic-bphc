import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  render() {
    return (
      <div className='dashboard'>
        <div className='dashboard-card'>
          <i class='fa fa-users fa-5x' aria-hidden='true'></i>
          <Link to='/profiles' className='btn'>
            Profiles
          </Link>
        </div>
        <div className='dashboard-card'>
          <i class='fa fa-user fa-5x' aria-hidden='true'></i>
          <Link to='/myprofile' className='btn'>
            My profile
          </Link>
        </div>
        <div className='dashboard-card'>
          <i class='fas fa-comments fa-5x'></i>
          <Link to='/posts' className='btn'>
            Posts
          </Link>
        </div>
        <div className='dashboard-card'>
          <i class='far fa-edit fa-5x'></i>
          <Link to='/updateprofile' className='btn'>
            Update profile
          </Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;
