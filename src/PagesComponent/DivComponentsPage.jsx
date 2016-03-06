var DivComponent = require('../Components/DivComponent');

var DivComponentsPage = React.createClass({
  render: function() {
    return (
      <div>
        Hello from DivComponents!
        <DivComponent startText="Outer Start" endText="Outer End">
          <DivComponent startText="Inner1 Start" endText="Inner1 Stop">
              <DivComponent startText="Insider start" endText="Insider Stop" />
          </DivComponent>
          <DivComponent startText="Inner2 Start" endText="Inner2 Stop" />
        </DivComponent>
      </div>
    )
  }
});

module.exports = DivComponentsPage;
