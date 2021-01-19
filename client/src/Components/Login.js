import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginUser } from '../Redux/Actions/Actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.dispatch(LoginUser(this.state));
  }
  render() {
    return (
      <section id='login'>
        <div className='back'>
          <h1>Login</h1>
          <form onSubmit={this.onSubmit}>
            <div className='login-element'>
              <label for='name'>Name</label>
              <input
                className='form-input'
                type='text'
                name='name'
                onChange={this.onChangeHandler}
              />
            </div>
            <div className='clr'></div>
            <div className='login-element'>
              <label for='email'>Email</label>
              <input
                className='form-input'
                type='email'
                name='email'
                onChange={this.onChangeHandler}
              />
            </div>
            <div className='clr'></div>
            <div className='login-element'>
              <label for='password'>Password</label>
              <input
                className='form-input'
                type='password'
                name='password'
                onChange={this.onChangeHandler}
              />
            </div>
            <div className='clr'></div>
            <div className='submit'>
              <button className='btn' type='submit'>
                Submit
              </button>
            </div>
          </form>

          <p>
            Don't Have an account? <NavLink to='/signup'>Sign up</NavLink>
          </p>
          {console.log(localStorage.getItem('token'))}
          {this.props.isAuthenticated && <Redirect to='/dashboard' />}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Login);
