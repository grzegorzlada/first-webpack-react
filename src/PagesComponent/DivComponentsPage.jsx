import DivComponent from '../Components/DivComponent';
import Modal from '../Components/Modal';
import React from 'react';

const DivComponentsPage = React.createClass({
  childClick() {
    alert('Child has been clicked! simple= ${this.simpleVar}, complex a=${this.complexVar.a}, b=${this.complexVar.b}');
  },

  simpleVar: 5,

  complexVar: {
    a: 2,
    b: 3
  },

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <DivComponent buttonLabel="Zewnętrzny knefel" endText="Outer End" onClickHandler={this.childClick} startText="Outer Start">
            <DivComponent endText="Inner1 Stop" startText="Inner1 Start">
              <DivComponent complex={this.complexVar} endText="Insider Stop" onClickHandler={this.childClick} single={this.simpleVar} startText="Insider start"/>
            </DivComponent>
            <DivComponent startText="Inner2 Start" endText="Inner2 Stop"/>
          </DivComponent>
        </div>
        <div className="col-md-6">
          <Modal body="Hello from property!"/>
        </div>
      </div>
    );
  }
});

export default DivComponentsPage;
