import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../Redux/Actions/Actions';
import { Redirect } from 'react-router';
import Spinner from './Spinner';
import Error from './Error';

class UpdateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.user,
      updated: false,
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  async onSubmitHandler(e) {
    e.preventDefault();
    console.log(this.state);
    await this.props.dispatch(updateUser(this.state));
    this.setState(() => {
      return {
        updated: this.props.error ? false : true,
      };
    });
  }
  render() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <section id='signup'>
        {this.props.error && <Error text='Invalid update' />}
        <div className='back'>
          {this.props.error && <h1>Invalid update</h1>}
          <h1>Update profile</h1>
          <form onSubmit={this.onSubmitHandler}>
            <div className='signup-element'>
              <label for='name'>Name</label>
              <input
                className='form-input'
                type='text'
                value={this.state && this.state.name}
                name='name'
              />
            </div>
            <div className='clr'></div>
            <div className='signup-element'>
              <label for='email'>Email</label>
              <input
                className='form-input'
                type='email'
                defaultValue={this.state && this.state.email}
                onChange={this.onChangeHandler}
                name='email'
              />
            </div>
            <div className='clr'></div>

            <div className='signup-element'>
              <label for='status'>Status</label>
              <input
                className='form-input'
                type='text'
                defaultValue={this.state && this.state.status}
                onChange={this.onChangeHandler}
                name='text'
              />
            </div>
            <div className='clr'></div>

            <div className='signup-element'>
              <label for='age'>Age</label>
              <input
                className='form-input'
                type='text'
                defaultValue={this.state && this.state.age}
                onChange={this.onChangeHandler}
                name='age'
              />
            </div>
            <div className='clr'></div>
            <div className='signup-element'>
              <label for='hometown'>Hometown</label>
              <input
                className='form-input'
                type='text'
                defaultValue={this.state && this.state.hometown}
                onChange={this.onChangeHandler}
                name='hometown'
              />
            </div>
            <div className='clr'></div>
            <div className='submit'>
              <button type='submit' className='btn'>
                Update
              </button>
            </div>
          </form>
        </div>
        {this.state.updated && <Redirect to='/myprofile' />}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.currentUser,
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps)(UpdateProfile);
