var CommentBox = require('../Components/CommentBox');
var React = require('React');

var Comments = React.createClass({
  render: function() {
    return (
      <div>
        <CommentBox/>
      </div>
    );
  }
});

module.exports = Comments;
