import CommentForm from './CommentForm';
import CommentList from './CommentList';
import _ from 'lodash';
import React from 'react';

const CommentBox = React.createClass({

  getInitialState() {
    return {data: this.sampleData};
  },

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

  addNewCommentHandler(text, author) {
    const id = this.getNewIdForComment();
    const newComment = {
      id,
      author,
      text
    };

    this.setState(function(previousState) {
      return previousState.data.push(newComment);
    });
  },

  getNewIdForComment() {
    const ids = _.map(this.state.data, 'id');
    return _.max(ids) + 1;
  },

  render() {
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
