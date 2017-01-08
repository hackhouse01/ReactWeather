var React = require('react');

var WeatherMessage = ({temp, cityname}) => {
  return(
    <h2>{cityname}  {temp}</h2>
 );
};

module.exports = WeatherMessage;
