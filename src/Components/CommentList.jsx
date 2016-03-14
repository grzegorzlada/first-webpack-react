import Comment from './Comment';
import React from 'react';

const CommentList = React.createClass({

  propTypes: {
    data: React.PropTypes.array.isRequired
  },

  getCommentNodes() {
    const comments = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
      );
    });

    return comments;
  },

  render() {
    return (
      <div className="commentList">
        {this.getCommentNodes()}
      </div>
    );
  }
});

export default CommentList;
