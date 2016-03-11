var React = require('react');
var ReactDOM = require('react-dom');
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
    <Route component={MainPage} path="/">
      <IndexRoute component={IndexPage}/>
      <Route component={CommentsPage} path="/comments"/>
      <Route component={DivComponentsPage} path="/div-component"/>
    </Route>
  </Router>
), document.getElementById('container'));
