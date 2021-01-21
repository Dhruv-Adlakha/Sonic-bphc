import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LogoutUser } from '../Redux/Actions/Actions';
import logo from '../spinner/fav.png';

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
              <NavLink to='/'>
                <img src={logo} alt='logo' className='navbar-logo' />
                SONIC
              </NavLink>
            </h1>
            <ul>
              <li>
                <NavLink to='/about' activeClassName='activeLink'>
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        )}
        {this.props.isAuthenticated && (
          <div className='container'>
            <h1>
              <img src={logo} alt='logo' className='navbar-logo' />
              SONIC
            </h1>
            <ul>
              <li>
                <NavLink to='/dashboard' activeClassName='activeLink'>
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to='/profiles' activeClassName='activeLink'>
                  Profiles
                </NavLink>
              </li>
              <li>
                <NavLink to='/posts' activeClassName='activeLink'>
                  Posts
                </NavLink>
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
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(Navbar);
