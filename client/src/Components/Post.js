import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, NavLink } from 'react-router-dom';
import { deletePost, addLike, addDislike } from '../Redux/Actions/Actions';
import Spinner from './Spinner';
import Error from './Error';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onLikeClick = this.onLikeClick.bind(this);
    this.onDislikeClick = this.onDislikeClick.bind(this);
  }

  async onDeleteClick() {
    await this.props.dispatch(deletePost(this.props.post));
  }

  async onLikeClick() {
    await this.props.dispatch(addLike(this.props.post));
  }

  async onDislikeClick() {
    await this.props.dispatch(addDislike(this.props.post));
  }

  render() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <div>
        {this.props.post && (
          <div className='post'>
            <div className='post-titlebar'>
              <h3>Title: {this.props.post.title}</h3>
              <h5>Created by: {this.props.post.createdBy}</h5>
            </div>
            <p>{this.props.post.body}</p>
            <div className='post-feedback'>
              <button onClick={this.onLikeClick}>
                <i className='far fa-thumbs-up fa-3x'></i>
              </button>
              <h3>{this.props.post.likes.length}</h3>
              <button onClick={this.onDislikeClick}>
                <i className='far fa-thumbs-down fa-3x'></i>
              </button>
              <h3>{this.props.post.dislikes.length}</h3>
              <Link to={'/comment/' + this.props.post._id}>
                <i className='far fa-comment-dots fa-2x'></i>
              </Link>
              <h3>{this.props.post.comments.length}</h3>
              {this.props.post.creator === this.props.currentUser._id && (
                <button onClick={this.onDeleteClick}>
                  <i className='far fa-trash-alt fa-3x red-color'></i>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    error: state.error,
    pst: state.posts,
  };
};

export default connect(mapStateToProps)(Post);
