var React = require('react');

var WeatherMessage = React.createClass({
    render: function () {
        return (
            <div>
                <p>It is 40 in Philadelphia.</p>
            </div>
        );
    }
});

module.exports = WeatherMessage;