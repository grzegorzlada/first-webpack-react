import {Link} from 'react-router';
import React from 'react';

const TopMenu = React.createClass({
  render() {
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
    );
  }
});

export default TopMenu;
