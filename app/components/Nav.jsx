import React from 'react';
//var {Link} = require('react-router');
import {Link, IndexLink} from 'react-router';

var Nav = React.createClass({
    onSearch: function (e) {
        e.preventDefault();
        alert('Not Wired Up Yet !');
    },
    render: function () {
        return (
            <div className="top-bar">
                <div className="topbar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li>
                            <IndexLink to="/" activeClassname="active">Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassname="active">About</Link>
                        </li>
                        <li>
                            <Link to="/examples" activeClassname="active">Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="search weather"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }

});

module.exports = Nav;
