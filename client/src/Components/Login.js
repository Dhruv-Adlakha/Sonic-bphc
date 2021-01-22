import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginUser, getUsers, getPosts } from '../Redux/Actions/Actions';
import Spinner from './Spinner';
import Error from './Error';

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
  async onSubmit(e) {
    e.preventDefault();
    try {
      console.log(this.state);
      await this.props.dispatch(LoginUser(this.state));
      if (this.props.isAuthenticated) await this.props.dispatch(getUsers());
      if (this.props.isAuthenticated) await this.props.dispatch(getPosts());
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    if (this.props.loading) {
      return <Spinner />;
    }

    return (
      <section id='login'>
        {this.props.error && <Error text='Invalid credentials' />}
        <div className='back'>
          <h1>Login</h1>

          <form onSubmit={this.onSubmit}>
            <div className='form'>
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
            </div>

            <div className='submit'>
              <button className='btn' type='submit'>
                Submit
              </button>
            </div>
          </form>

          <p>
            Don't Have an account? <NavLink to='/signup'>Sign up</NavLink>
          </p>

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
