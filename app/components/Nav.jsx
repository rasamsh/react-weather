import React from 'react';
//var {Link} = require('react-router');
import {Link, IndexLink} from 'react-router';

var Nav = React.createClass({
    onSearch: function (e) {
        e.preventDefault();
        var location = this.refs.search.value;
        var encodedLocation = encodeURIComponent(location);
        if(location.length >0){
            this.refs.search.value= '';
            window.location.hash='#/?location='+encodedLocation;
        }
    },
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
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
                                <input type="search" ref="search" placeholder="search weather by city"/>
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
