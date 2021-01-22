import React from 'react';

class Comment extends React.Component {
  render() {
    return (
      <div className='single-comment'>
        <h4>Created by: {this.props.comment.createdBy}</h4>
        <p>{this.props.comment.content}</p>
      </div>
    );
  }
}

export default Comment;
