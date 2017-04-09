import React from  'react';
//var {Link} = require('react-router');
import {Link, IndexLink} from 'react-router';

/*var Nav = React.createClass({
    render: function () {
        return (
            <div>
            <h2>Navigation Component</h2>
            <IndexLink to="/" activeClassname="active">Get Weather </IndexLink>
            <Link to="/about" activeClassname="active">About</Link>
            <Link to="/examples" activeClassname="active">Examples</Link>
            </div>
        );
    }

});*/

var Nav =(props) =>{
    return (
            <div>
            <h2>Navigation Component</h2>
            <IndexLink to="/" activeClassname="active">Get Weather </IndexLink>
            <Link to="/about" activeClassname="active">About</Link>
            <Link to="/examples" activeClassname="active">Examples</Link>
            </div>
        );
};

module.exports = Nav;