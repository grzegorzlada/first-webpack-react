import React from 'React';
import CommentsState from '../StateClasses/CommentsState';

window.commentState = new CommentsState();

var CommentForm = React.createClass({

  getInitialState: function() {
    return {comment: window.commentState.commentText};
  },

  addNewComment: function() {
    if (this.props.addNewCommentListener !== undefined) {
      this.props.addNewCommentListener(this.state.comment, 'Ziomeczek');
    }
  },

  updateComment: function(e) {
    this.setState({comment: e.target.value});
  },

  render: function() {
    return (
      <div className="commentForm">
        <textarea value={this.state.comment} onChange={this.updateComment}></textarea>
        <button onClick={this.addNewComment}>Add new comment!</button>
      </div>
    );
  },

  componentWillUnmount: function() {
    window.commentState.commentText = this.state.comment;
  }
});

export default CommentForm;
