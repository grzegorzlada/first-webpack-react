React = require('react');
ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;
var MainPage = require('./PagesComponent/Main');
var CommentsPage = require('./PagesComponent/Comments');
var IndexRoute = require('react-router').IndexRoute;
var IndexPage = require('./PagesComponent/Index');
var DivComponentsPage = require('./PagesComponent/DivComponentsPage');

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={MainPage}>
      <IndexRoute component={IndexPage}/>
      <Route path="/comments" component={CommentsPage}/>
      <Route path="/div-component" component={DivComponentsPage} />
    </Route>
  </Router>
), document.getElementById('container'));
