import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import Spinner from './Spinner';

class Profiles extends React.Component {
  render() {
    if (this.props.loading) {
      return <Spinner />;
    }
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
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(Profiles);
