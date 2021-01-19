import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  render() {
    return (
      <div className='posts-section'>
        <h1>Posts</h1>
        <div className='posts'>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    );
  }
}

export default Posts;
