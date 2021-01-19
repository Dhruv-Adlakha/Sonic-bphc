import React from 'react';

class Post extends React.Component {
  render() {
    return (
      <div className='post'>
        <div className='post-titlebar'>
          <h3>Title: First post</h3>
          <h5>Created on: 25/04/2021</h5>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum porro
          accusamus, iste cum reiciendis eum quas voluptatem ut accusantium
          possimus quod quisquam dicta incidunt dolores nostrum, eius
          necessitatibus! Qui, sequi.
        </p>
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
