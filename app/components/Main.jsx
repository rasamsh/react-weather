import React from 'react';
import Nav from 'Nav';

/*var Main = React.createClass({
render : function () {
  return(
    <div>
    <Nav/>
    <h1>Main Component</h1>
    {this.props.children}
    </div>
  );
}
});*/

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;