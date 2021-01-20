import React from 'react';

class Post extends React.Component {
  render() {
    return (
      <div className='post'>
        <div className='post-titlebar'>
          <h3>Title: {this.props && this.props.post.title}</h3>
          <h5>Created by: {this.props && this.props.post.createdBy}</h5>
        </div>
        <p>{this.props && this.props.post.body}</p>
        <div className='post-feedback'>
          <button>
            <i className='far fa-thumbs-up fa-3x'></i>
          </button>
          <button>
            <i className='far fa-thumbs-down fa-3x'></i>
          </button>
          <button>
            <i className='far fa-comment-dots fa-3x'></i>
          </button>
          <button>
            <i className='far fa-trash-alt fa-3x red-color'></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Post;
