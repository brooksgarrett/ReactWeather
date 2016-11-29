var React = require('react');

var About = (props) =>{
        return (
            <div>
                <h1 className="text-center">About</h1>
                <p>This is a basic Weather application developed in conjunction with 
                <a href="https://www.udemy.com/the-complete-react-web-app-developer-course/">The Complete React Web 
                Developer Course.</a></p>
                <p>Powered by:</p>
                <ul>
                    <li>
                        <a href="https://github.com/brooksgarrett/ReactWeather">GitHub Repository for this Project</a>
                    </li>
                    <li>
                        <a href="https://openweathermap.org">OpenWeatherMap.org for Weather Data</a>
                    </li>
                    <li>
                        <a href="https://facebook.github.io/react/">React: A JavaScript Library for building user 
                        interfaces</a>
                    </li>
                    <li>
                        <a href="http://foundation.zurb.com/">Foundation: A Responsive front-end framework.</a>
                    </li>
                    <li>
                        <a href="https://babeljs.io/">Babel: A JavaScript compiler for using ES6, today.</a>
                    </li>
                    <li>
                        <a href="https://webpack.github.io/">WebPack: A web first module bundler.</a>
                    </li>
                    <li>
                        <a href="https://heroku.com/">Heroku: For application hosting.</a>
                    </li>
                </ul>
            </div>
        )
    };

module.exports = About;
