var React = require('react');

var WeatherForm = React.createClass({

  validater: function(name){
      if(name.length>0){
        return 1;
      }
  },
  onFormSubmit: function(e){

    e.preventDefault();

    var updates = {}

    var cityname = this.refs.cityname.value;
    var test = this.validater(cityname);
    if(test==1){
      this.refs.cityname.value = '';
      updates.cityname = cityname;
      this.props.onNewName(updates)
    }
    },

  render: function(){
return(
    <form onSubmit={this.onFormSubmit}>
      <div>
        <h1>Get Weather</h1>
      </div>
      <div>
        <input type="text" ref="cityname"/>
      </div>
      <div>
        <button>Get Weather</button>
      </div>

    </form>
  )
  }
});

module.exports = WeatherForm;
