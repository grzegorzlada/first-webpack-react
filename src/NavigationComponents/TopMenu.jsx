var Router = require('react-router').Router;
var Link = require('react-router').Link;
var React = require('react');

var TopMenu = React.createClass({
  render: function() {
    return (
      <div className="collapse navbar-collapse appiNav">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Main page</Link>
          </li>
          <li>
            <Link to="/comments">Comments</Link>
          </li>
          {this.testFunction('xyz')}
        </ul>
      </div>
    )
  },

  testFunction: function(text) {
    return (
      <li>{text}
      </li>
    )
  }

});

module.exports = TopMenu;
