import CommentForm from './CommentForm';
import CommentList from './CommentList';
import _ from 'lodash';
import React from 'React';

var CommentBox = React.createClass({

  sampleData: [
    {
      id: 1,
      author: 'Grzegorz',
      text: 'My first commnet'
    }, {
      id: 2,
      author: 'Janek',
      'text': 'My second comment'
    }
  ],

  getInitialState: function() {
    return {data: this.sampleData};
  },

  addNewCommentHandler: function(text, author) {
    var newId = this.getNewIdForComment();
    var newComment = {
      id: newId,
      author: author,
      text: text
    };

    this.setState(function(previousState) {
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
        <CommentForm addNewCommentListener={this.addNewCommentHandler}/>
        <CommentList data={this.state.data}/>
      </div>
    );
  }
});

export default CommentBox;
