import React from 'react';

var About = () =>{
     return (
         <div>
    <h1 className="text-center">About</h1>
    <p>This is a simple weather application built on React and foundation</p>
    <p>Here are some of the resources used for this project</p>
    <ul>
        <li> <a href="https://facebook.github.io/react">React</a> This is the javascript framework used for this project
            </li>
            <li> <a href="http://openweathermap.org">Open Weather Map</a> This is the weather api used for this project
            </li>
        </ul>
    </div>
   );
};

module.exports = About;