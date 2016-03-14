import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './PagesComponent/MainPage';
import CommentsPage from './PagesComponent/CommentsPage';
import IndexPage from './PagesComponent/IndexPage';
import DivComponentsPage from './PagesComponent/DivComponentsPage';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={MainPage} path="/">
      <IndexRoute component={IndexPage}/>
      <Route component={CommentsPage} path="/comments"/>
      <Route component={DivComponentsPage} path="/div-component"/>
    </Route>
  </Router>
), document.getElementById('container'));
