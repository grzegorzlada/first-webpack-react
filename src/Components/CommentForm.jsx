import React from 'react';
import CommentsState from '../StateClasses/CommentsState';

window.commentState = new CommentsState();

const CommentForm = React.createClass({

  propTypes: {
    addNewCommentListener: React.PropTypes.func
  },

  getInitialState() {
    return {comment: window.commentState.commentText};
  },

  componentWillUnmount() {
    window.commentState.commentText = this.state.comment;
  },

  addNewComment() {
    if (typeof this.props.addNewCommentListener !== 'undefined') {
      this.props.addNewCommentListener(this.state.comment, 'Ziomeczek');
    }
  },

  updateComment(e) {
    this.setState({comment: e.target.value});
  },

  render() {
    return (
      <div className="commentForm">
        <textarea value={this.state.comment} onChange={this.updateComment}></textarea>
        <button onClick={this.addNewComment}>Add new comment!</button>
      </div>
    );
  }
});

export default CommentForm;
