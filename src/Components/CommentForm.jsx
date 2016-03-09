var CommentForm = React.createClass({

  addNewComment: function() {
    if (this.props.addNewCommentListener !== undefined) {
      this.props.addNewCommentListener({id: 3, author: 'Satan', text: 'Satan is here!'});
    }
  },

  render: function() {
    return (
      <div className="commentForm">
        <button onClick={this.addNewComment}>Add new comment!</button>
      </div>
    )
  }
});

module.exports = CommentForm;
