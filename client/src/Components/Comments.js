import React from 'react';
import Comment from '../Components/Comment';
import { addLike, addDislike, addComment } from '../Redux/Actions/Actions';
import { connect } from 'react-redux';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      likes: [],
      dislikes: [],
      comments: [],
      createdBy: '',
      _id: '',
      content: '',
    };
    this.onLikeClick = this.onLikeClick.bind(this);
    this.onDislikeClick = this.onDislikeClick.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  async onSubmitHandler(e) {
    e.preventDefault();
    const newComment = {
      _id: this.state._id,
      content: this.state.content,
    };
    await this.props.dispatch(addComment(newComment));
    const postid = this.props.match.params.id;
    const post = this.props.psts.find((post) => post._id === postid);
    await this.setState(() => {
      return {
        ...post,
      };
    });
    e.target.content.value = '';
  }

  async componentDidMount() {
    const postid = this.props.match.params.id;
    const post = this.props.psts.find((post) => post._id === postid);
    await this.setState(() => {
      return {
        ...post,
      };
    });
  }

  async onLikeClick() {
    await this.props.dispatch(addLike(this.state));
  }

  async onDislikeClick() {
    await this.props.dispatch(addDislike(this.state));
  }

  render() {
    return (
      <div>
        {this.state._id && (
          <div className='comments-page'>
            <div className='comments'>
              <h2>Post</h2>
              <div className='post-titlebar'>
                <h3>Title: {this.state.title}</h3>
                <h5>Created by: {this.state.createdBy}</h5>
              </div>
              <p>{this.state.body}</p>
              <div className='post-feedback'>
                <button onClick={this.onLikeClick}>
                  <i className='far fa-thumbs-up fa-3x'></i>
                </button>
                <h3>{this.state.likes.length}</h3>
                <button onClick={this.onDislikeClick}>
                  <i className='far fa-thumbs-down fa-3x'></i>
                </button>
                <h3>{this.state.dislikes.length}</h3>
              </div>
            </div>
            <div className='add-comment'>
              <form onSubmit={this.onSubmitHandler}>
                <input name='content' onChange={this.onChangeHandler} />
                <button>Add comment</button>
              </form>
            </div>
            <div className='post-comments'>
              <div className='status-bar'>
                <h3>Comments</h3>
                <h3>Total : {this.state.comments.length}</h3>
              </div>
              <div className='comments-area'>
                {this.state.comments.map((comment, index) => {
                  return <Comment comment={comment} key={index} />;
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    psts: state.posts,
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(Comments);
