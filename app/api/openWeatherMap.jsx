import axios from 'axios';
//const API_KEY ='1f869b6d7d3c2d4c9fcef814984e3c19';
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=1f869b6d7d3c2d4c9fcef814984' +
        'e3c19&units=imperial';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios
            .get(requestUrl)
            .then(function (res) {
                if (res.data.code && res.data.message) {
                    throw new Error(res.data.message);
                } else {
                    return res.data.main.temp;
                }

            }, function (err) {
                throw new Error(err.response.data.message);
                //throw new Error('Unable to fetch weather for that location.');

            });
    }
}