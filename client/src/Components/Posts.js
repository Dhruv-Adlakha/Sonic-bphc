import React from 'react';
import Post from './Post';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPosts } from '../Redux/Actions/Actions';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.refreshPage = this.refreshPage.bind(this);
  }
  componentDidMount(props) {
    this.props.dispatch(getPosts());
  }
  refreshPage() {
    this.props.dispatch(getPosts());
  }
  render() {
    return (
      <div className='posts-section'>
        <h1>Posts</h1>
        <Link to='/addpost' className='post-button'>
          Add new post
        </Link>
        <div className='posts'>
          {this.props &&
            this.props.posts.map((post, index) => {
              return (
                <Post key={index} post={post} refreshPage={this.refreshPage} />
              );
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapstatetoprops');
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Posts);
