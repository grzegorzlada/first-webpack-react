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
          <li>
            <Link to="/div-component">Div Components</Link>
          </li>
        </ul>
      </div>
    )
  },
});

module.exports = TopMenu;
