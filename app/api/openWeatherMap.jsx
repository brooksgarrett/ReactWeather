var Axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=dd7a1c5db9234a998ba99108fbe5a7b8&units=imperial';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`

        return Axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(`City not found: ${location}`);
            } else {
                return res.data.main.temp;
            }
        }, function (res) {
            throw new Error('Unable to fetch weather for that location.');
        });
    }
};