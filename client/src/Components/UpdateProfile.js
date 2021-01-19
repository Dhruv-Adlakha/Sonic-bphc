import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../Redux/Actions/Actions';
import { Redirect } from 'react-router';

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
  onSubmitHandler(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.dispatch(updateUser(this.state));
    this.setState(() => {
      return {
        updated: true,
      };
    });
  }
  render() {
    return (
      <section id='signup'>
        <div className='back'>
          <h1>Update profile</h1>
          <form onSubmit={this.onSubmitHandler}>
            <div className='signup-element'>
              <label for='name'>Name</label>
              <input
                className='form-input'
                type='text'
                defaultValue={this.state && this.state.name}
                onChange={this.onChangeHandler}
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
});

export default connect(mapStateToProps)(UpdateProfile);
