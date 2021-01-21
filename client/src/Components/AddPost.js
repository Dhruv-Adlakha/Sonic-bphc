import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../Redux/Actions/Actions';
import { Redirect } from 'react-router';
import Spinner from './Spinner';

class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: undefined,
      body: undefined,
      updated: false,
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onSubmitHandler(e) {
    e.preventDefault();
    this.setState({
      updated: true,
    });
    const newpost = {
      title: this.state.title,
      body: this.state.body,
    };
    this.props.dispatch(addPost(newpost));
  }
  render() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <div className='add-post-back'>
        <div className='add-post'>
          <h1>Add new post</h1>
          <form onSubmit={this.onSubmitHandler}>
            <div className='add-post-content'>
              <label>Title</label>
              <input type='text' name='title' onChange={this.onChangeHandler} />
              <label>Content</label>
              <input type='text' name='body' onChange={this.onChangeHandler} />
            </div>
            <button className='btn'>Add Post</button>
          </form>
          {this.state.updated && <Redirect to='/posts' />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(AddPost);
