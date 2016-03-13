import React from 'React';

var DivComponent = React.createClass({
  getButtonLabel: function() {
    return this.props.buttonLabel === undefined
      ? "Click me!"
      : this.props.buttonLabel;
  },

  onButtonClick: function(e) {
    alert('Clicked!');

    if (this.props.simple !== undefined) {
      this.props.simple *= 2;
    }

    if (this.props.complex !== undefined) {
      this.props.complex.a *= 2;
      this.props.complex.b *= 2;
    }

    if (this.props.onClickHandler !== undefined) {
      this.props.onClickHandler(e);
    }
  },

  componentWillUnmount: function() {},

  componentDidMount: function() {},

  render: function() {
    return (
      <div>
        <div>
          <strong>{this.props.startText}</strong>
        </div>
        Content...<br/> {this.props.children}
        <div>
          <strong>{this.props.endText}</strong>
        </div>
        <button onClick={this.onButtonClick}>{this.getButtonLabel()}</button>
      </div>
    );
  }
});

export default DivComponent;
