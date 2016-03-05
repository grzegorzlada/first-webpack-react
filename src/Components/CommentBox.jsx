var CommentForm = require('./CommentForm');
var CommentList = require('./CommentList');

var CommentBox = React.createClass({
   render: function() {
       return (
           <div class="commentBox">
            <h1>Comments</h1>
           <CommentForm />
           <CommentList />
           </div>
       );
   } 
});

module.exports = CommentBox;