import React from 'react';

const DivComponent = React.createClass({

  propTypes: {
    buttonLabel: React.PropTypes.string,
    simple: React.PropTypes.number,
    complex: React.PropTypes.object,
    onClickHandler: React.PropTypes.func,
    startText: React.PropTypes.string.isRequired,
    endText: React.PropTypes.string.isRequired,
    children: React.PropTypes.oneOfType([
      React.PropTypes.object,
      React.PropTypes.array
    ])
  },

  getButtonLabel() {
    return typeof this.props.buttonLabel === 'undefined'
      ? 'Click me!'
      : this.props.buttonLabel;
  },

  onButtonClick(e) {
    alert('Clicked!');

    if (typeof this.props.simple !== 'undefined') {
      this.props.simple *= 2;
    }

    if (typeof this.props.complex !== 'undefined') {
      this.props.complex.a *= 2;
      this.props.complex.b *= 2;
    }

    if (typeof this.props.onClickHandler !== 'undefined') {
      this.props.onClickHandler(e);
    }
  },

  render() {
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
