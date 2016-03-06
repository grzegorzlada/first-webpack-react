var DivComponent = React.createClass({
    render: function() {
      return (
        <div>
          <div><strong>{this.props.startText}</strong></div>
          Content...<br/>
        {this.props.children}
          <div><strong>{this.props.endText}</strong></div>
        </div>
      )
    }
});

module.exports = DivComponent;
