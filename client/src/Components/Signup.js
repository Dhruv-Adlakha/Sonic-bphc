import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { addUser } from '../Redux/Actions/Actions';
import { connect } from 'react-redux';
import Spinner from './Spinner';

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
    console.log(this.props.isAuthenticated);
  }
  handleChange(e) {
    this.setState(() => {
      return {
        [e.target.name]: e.target.value,
      };
    });
  }

  render() {
    return (
      <section id='signup' className='signup-back'>
        <div className='back'>
          <h1>Sign up</h1>
          <form onSubmit={this.onSubmitHandler}>
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
}))(Signup);
