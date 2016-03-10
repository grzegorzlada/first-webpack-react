var CommentForm = require('./CommentForm');
var CommentList = require('./CommentList');
var _ = require('lodash');

var CommentBox = React.createClass({

  sampleData: [
    {id: 1, author: 'Grzegorz', text: 'My first commnet'},
    {id: 2, author: 'Janek', 'text': 'My second comment'}
  ],

  getInitialState: function() {
    return {
      data: this.sampleData
    };
  },

  addNewCommentHandler: function(text, author) {
    var newId = this.getNewIdForComment();
    var newComment = {
      id: newId,
      author: author,
      text: text
    };

    this.setState(function(previousState, currentProps){
      return previousState.data.push(newComment);
    });
  },

  getNewIdForComment: function() {
    var ids = _.map(this.state.data, 'id');
    return _.max(ids) + 1;
  },

  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentForm addNewCommentListener={this.addNewCommentHandler} />
        <CommentList data={this.state.data}/>
      </div>
    );
  }
});

module.exports = CommentBox;
