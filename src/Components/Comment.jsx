import React from 'react';

const Comment = React.createClass({

  propTypes: {
    author: React.PropTypes.string.isRequired,
    children: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <div className="comment">
        <h2>Author: {this.props.author}</h2>
        {this.props.children}
      </div>
    );
  }
});

export default Comment;
