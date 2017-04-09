import React from 'react';
import {Link} from 'react-router';

var Examples = () => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>
                Here are a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to="/?location=Dallas">Dallas, TX
                    </Link>
                </li>
                <li>
                    <Link to="/?location=Rio">Rio, Brazil
                    </Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Examples;