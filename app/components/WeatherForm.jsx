var React = require('react');

var WeatherForm = React.createClass({
    render: function () {
        return (
            <div>
                    <form>
                        <div><input type="textbox" placeholder="Enter city name" /></div>
                        <div><button>Get weather</button></div>
                    </form>
            </div>
        );
    }
});

module.exports = WeatherForm;