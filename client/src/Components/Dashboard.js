import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteUser } from '../Redux/Actions/Actions';
import Error from './Error';
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updated: false,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  async onClickHandler() {
    await this.props.dispatch(deleteUser());
    this.setState({
      updated: !this.state.error,
    });
  }

  render() {
    return (
      <div className='dashboard'>
        {this.props.error && <Error text='Some error occured' />}
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
          <button className='btn red-color2' onClick={this.onClickHandler}>
            Delete profile
          </button>
        </div>
        {this.state.updated && <Redirect to='/' />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

export default connect(mapStateToProps)(Dashboard);
