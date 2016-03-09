var CommentForm = require('./CommentForm');
var CommentList = require('./CommentList');

var CommentBox = React.createClass({

  sampleData: [
    {id: 1, author: 'Grzegorz', text: 'My first commnet'},
    {id: 2, author: 'Janek', 'text': 'My second comment'}
  ],

  addNewCommentHandler: function(comment) {
    this.sampleData.push(comment);
  },

  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentForm addNewCommentListener={this.addNewCommentHandler} />
        <CommentList data={this.sampleData}/>
      </div>
    );
  }
});

module.exports = CommentBox;
