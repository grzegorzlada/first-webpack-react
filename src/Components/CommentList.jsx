import Comment from './Comment';
import React from 'react';

var CommentList = React.createClass({

  getCommentNodes: function() {
    var comments = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
      );
    });

    return comments;
  },

  render: function() {
    return (
      <div className="commentList">
        {this.getCommentNodes()}
      </div>
    );
  }
});

export default CommentList;
