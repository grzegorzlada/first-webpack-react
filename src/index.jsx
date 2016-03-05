React = require('react');
ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;
var MainPage = require('./PagesComponent/Main');
var CommentsPage = require('./PagesComponent/Comments');
var TopMenu = require('./NavigationComponents/TopMenu');
var IndexRoute = require('react-router').IndexRoute;
var IndexPage = require('./PagesComponent/Index');

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={MainPage}>
      <IndexRoute component={IndexPage}/>
      <Route path="/comments" component={CommentsPage}/>
    </Route>
  </Router>
), document.getElementById('container'));
