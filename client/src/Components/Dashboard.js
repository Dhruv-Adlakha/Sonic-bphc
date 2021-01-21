import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteUser } from '../Redux/Actions/Actions';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.props.dispatch(deleteUser());
  }

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
        <div className='dashboard-card'>
          <i class='fas fa-user-times fa-5x red-color'></i>
          <Link to='/' className='btn red-color2' onClick={this.onClickHandler}>
            Delete profile
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(Dashboard);
