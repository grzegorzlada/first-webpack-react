var CommentForm = React.createClass({

  getInitialState: function() {
    return {
      comment: 'Enter comment...'
    }
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
    )
  }
});

module.exports = CommentForm;
