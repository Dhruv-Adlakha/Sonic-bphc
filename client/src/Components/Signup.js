import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { addUser, getUsers, getPosts } from '../Redux/Actions/Actions';
import { connect } from 'react-redux';
import Spinner from './Spinner';
import Error from './Error';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      status: '',
      age: '',
      hometown: '',
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  async onSubmitHandler(e) {
    e.preventDefault();
    await this.props.dispatch(addUser(this.state));
    if (this.props.isAuthenticated) await this.props.dispatch(getUsers());
    if (this.props.isAuthenticated) await this.props.dispatch(getPosts());
  }
  handleChange(e) {
    this.setState(() => {
      return {
        [e.target.name]: e.target.value,
      };
    });
  }

  render() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <section id='signup' className='signup-back'>
        {this.props.error && (
          <Error text='Age should be a number, password should be of length greater than 7 and should not include "password" and fill all fields' />
        )}
        <div className='back'>
          <h1>Sign up</h1>

          <form onSubmit={this.onSubmitHandler}>
            <div className='form'>
              <div className='signup-element'>
                <label for='name'>Name</label>
                <input
                  className='form-input'
                  type='text'
                  name='name'
                  onChange={this.handleChange}
                />
              </div>
              <div className='clr'></div>
              <div className='signup-element'>
                <label for='email'>Email</label>
                <input
                  className='form-input'
                  type='email'
                  name='email'
                  onChange={this.handleChange}
                />
              </div>
              <div className='clr'></div>
              <div className='signup-element'>
                <label for='password'>Password</label>
                <input
                  className='form-input'
                  type='password'
                  name='password'
                  onChange={this.handleChange}
                />
              </div>
              <div className='clr'></div>
              <div className='signup-element'>
                <label for='status'>Status</label>
                <input
                  className='form-input'
                  type='text'
                  name='status'
                  onChange={this.handleChange}
                />
              </div>
              <div className='clr'></div>

              <div className='signup-element'>
                <label for='age'>Age</label>
                <input
                  className='form-input'
                  type='text'
                  name='age'
                  onChange={this.handleChange}
                />
              </div>
              <div className='clr'></div>
              <div className='signup-element'>
                <label for='hometown'>Hometown</label>
                <input
                  className='form-input'
                  type='text'
                  name='hometown'
                  onChange={this.handleChange}
                />
              </div>
              <div className='clr'></div>
            </div>
            <div className='submit'>
              <button type='submit' className='btn'>
                Submit
              </button>
            </div>
          </form>

          <p>
            Already Have an account? <NavLink to='/login'>Login here</NavLink>
          </p>
          {this.props.isAuthenticated && <Redirect to='/dashboard' />}
        </div>
      </section>
    );
  }
}

export default connect((state) => ({
  isAuthenticated: state.isAuthenticated,
  loading: state.loading,
  error: state.error,
}))(Signup);
