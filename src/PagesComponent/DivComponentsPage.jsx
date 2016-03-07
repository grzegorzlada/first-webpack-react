var DivComponent = require('../Components/DivComponent');
var Modal = require('../Components/Modal');


var DivComponentsPage = React.createClass({
  childClick: function(e) {
    alert('Child has been clicked! simple=' + this.simpleVar + ', complex a=' + this.complexVar.a + ', b=' + this.complexVar.b);
  },

  simpleVar: 5,

  complexVar: {
    a: 2,
    b: 3
  },

  render: function() {
    return (
      <div className="row">
        <div className="col-md-6">
          <DivComponent startText="Outer Start" endText="Outer End" buttonLabel="Zewnętrzny knefel" onClickHandler={this.childClick}>
            <DivComponent startText="Inner1 Start" endText="Inner1 Stop">
              <DivComponent startText="Insider start" endText="Insider Stop" single={this.simpleVar} complex={this.complexVar} onClickHandler={this.childClick}/>
            </DivComponent>
            <DivComponent startText="Inner2 Start" endText="Inner2 Stop"/>
          </DivComponent>
          </div>
          <div className="col-md-6">
            <Modal />
          </div>
      </div>
    )
  }
});

module.exports = DivComponentsPage;
