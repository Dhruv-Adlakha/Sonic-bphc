import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUsers } from '../Redux/Actions/Actions';

class Profiles extends React.Component {
  async componentDidMount(props) {
    await this.props.dispatch(getUsers());
  }
  render() {
    return (
      <section className='profiles-container'>
        {this.props.users &&
          this.props.users.map((user, index) => {
            return <Profile user={user} key={index} />;
          })}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(Profiles);
