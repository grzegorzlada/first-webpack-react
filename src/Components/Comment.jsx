import React from 'react';

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2>Author: {this.props.author}</h2>
        {this.props.children}
      </div>
    );
  }
});

export default Comment;
