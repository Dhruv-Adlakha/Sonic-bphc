import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../Redux/Actions/Actions';
import { Redirect } from 'react-router';
import Spinner from './Spinner';
import Error from './Error';

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
  async onSubmitHandler(e) {
    e.preventDefault();
    const newpost = {
      title: this.state.title,
      body: this.state.body,
    };
    await this.props.dispatch(addPost(newpost));
    this.setState({
      updated: !this.props.error,
    });
  }
  render() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <div className='add-post-back'>
        {this.props.error && <Error text='Invalid post' />}
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
        </div>
        {this.state.updated && <Redirect to='/posts' />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

export default connect(mapStateToProps)(AddPost);
