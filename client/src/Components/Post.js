import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { deletePost, getPosts } from '../Redux/Actions/Actions';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      del: false,
    };
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  onDeleteClick() {
    this.props.dispatch(deletePost(this.props.post));

    this.setState({
      del: true,
    });
    this.props.refreshPage();
  }

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
          {this.props.post.createdBy === this.props.currentUser.name && (
            <button onClick={this.onDeleteClick}>
              <i className='far fa-trash-alt fa-3x red-color'></i>
            </button>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(Post);
