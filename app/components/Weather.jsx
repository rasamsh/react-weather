import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';
import ErrorModal from 'ErrorModal';

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function (location) {
        //this.setState({location: location, temp: 23});
        var that = this;
        this.setState({
            isLoading : true,
            errorMessage: undefined
        });

        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        },function (e) {

            that.setState({
                isLoading: false,
                errorMessage: e.message
            });
            //alert(errorMessage);
        
        })

    },
    render: function () {
        var {isLoading, temp, location, errorMessage} = this.state;
        function renderMessage() {
            if(isLoading){
                return <h3 className="text-center">Fetching Weather...</h3>
            }
            else if(temp && location){
                return  <WeatherMessage temp={temp} location={location}/>
            }
        }
        function renderError() {
            if(typeof errorMessage ==='string'){
                return(
                    <ErrorModal message={errorMessage}/>
                )
            }
        }
        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;