import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LogoutUser } from '../Redux/Actions/Actions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
    this.props.dispatch(LogoutUser(this.props.currentUser));
  }
  render() {
    return (
      <div id='navbar'>
        {!this.props.isAuthenticated && (
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
        {this.props.isAuthenticated && (
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
                <NavLink to='/' onClick={this.handleLogout}>
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(Navbar);
