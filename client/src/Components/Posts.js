import React from 'react';
import Post from './Post';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPosts } from '../Redux/Actions/Actions';
import Spinner from './Spinner';

class Posts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.loading) {
      return <Spinner />;
    }

    return (
      <div className='posts-section'>
        <h1>Posts</h1>
        <Link to='/addpost' className='post-button'>
          Add new post
        </Link>
        <div className='posts'>
          {this.props &&
            this.props.posts.map((post, index) => {
              return <Post key={index} post={post} />;
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapstatetoprops posts' + state.loading);
  return {
    posts: state.posts,
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(Posts);
