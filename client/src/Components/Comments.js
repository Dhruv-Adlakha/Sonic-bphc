import React from 'react';
import Comment from '../Components/Comment';

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='comments-page'>
        <div className='comments'>
          <h2>Post</h2>
          <div className='post-titlebar'>
            <h3>Title: this is the title</h3>
            <h5>Created by: Dhruv Adlakha</h5>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            saepe, deserunt, quibusdam eligendi blanditiis debitis consequatur
            architecto nobis consectetur quisquam distinctio illo inventore
            nulla quam nostrum porro! Reprehenderit excepturi quidem, quam ut
            deleniti iure. Dolorum ipsa reprehenderit dolores dicta sit.
          </p>
          <div className='post-feedback'>
            <button>
              <i className='far fa-thumbs-up fa-3x'></i>
            </button>
            <h3>1</h3>
            <button>
              <i className='far fa-thumbs-down fa-3x'></i>
            </button>
            <h3>0</h3>
          </div>
        </div>
        <div className='post-comments'>
          <div className='status-bar'>
            <h3>Comments</h3>
            <h3>Total : 6</h3>
          </div>

          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
    );
  }
}

export default Comments;
