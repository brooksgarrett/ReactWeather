var Axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?appid=dd7a1c5db9234a998ba99108fbe5a7b8&units=imperial';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`

        return Axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.count == 0) {
                throw new Error(`City not found: ${location}`);
            } else {
                return res.data.list[0].main.temp;
            }
        }, function (res) {
            throw new Error(res.message);
        });
    }
};