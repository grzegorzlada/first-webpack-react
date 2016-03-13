import TopMenu from '../NavigationComponents/TopMenu';
import React from 'React';

var MainPage = React.createClass({
  render: function() {
    return (
      <div>
        <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#topWrap">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-mobile fa-stack-1x fa-inverse"></i>
                </span>
                App<span className="title">Bay</span>
              </a>
            </div>
            <TopMenu/>
          </div>
        </div>

        <div id="topWrap" className="jumbotron">
          <div className="container">
            {this.props.children}
          </div>
        </div>

        <div id="featureWrap">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 text-center feature">
                <i className="fa fa-tablet icon"></i>
                <h3>Responsive Bootstrap Template</h3>
                <p>
                  Lorem ipsum dolizzle sit tellivizzle, boom shackalack adipiscing elit. Nullam mofo velizzle, get down get down stuff, sure cool, dizzle vizzle, arcu. Yo mamma izzle tortizzle.
                </p>
              </div>
              <div className="col-sm-4 text-center feature">
                <i className="fa fa-pencil icon"></i>
                <h3>Easy to Customize</h3>
                <p>
                  Lorem ipsum dolizzle sit tellivizzle, boom shackalack adipiscing elit. Nullam mofo velizzle, get down get down stuff, sure cool, dizzle vizzle, arcu. Yo mamma izzle tortizzle.
                </p>
              </div>
              <div className="col-sm-4 text-center feature">
                <i className="fa fa-star icon"></i>
                <h3>Ideal for Apps or Software</h3>
                <p>
                  Lorem ipsum dolizzle sit tellivizzle, boom shackalack adipiscing elit. Nullam mofo velizzle, get down get down stuff, sure cool, dizzle vizzle, arcu. Yo mamma izzle tortizzle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default MainPage;
