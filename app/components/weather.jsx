var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

  handleNewName: function(updates){

    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(updates.cityname).then(function (temp){
      that.setState({
        cityname: updates.cityname,
        temp: temp,
        isLoading: false,
      });
    }, function (errorMessage){
      that.setState({
        cityname: '',
        temp: '',
        isLoading: false,
      });
      alert(errorMessage);
    });
  },

  getInitialState: function(){
    return{
    isLoading: false
    }
  },

  render: function(){
    var {temp, cityname, isLoading } =  this.state;

    function renderMessage(){
      if (isLoading){
        return <h3>Fetching Weather....</h3>
      }
      else if(temp && cityname){
        return <WeatherMessage temp={temp} cityname={cityname}/>;
      }
    }

    return(
      <div>
        <WeatherForm onNewName={this.handleNewName}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
