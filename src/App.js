import React from 'react';
import './App.css';
import 'weather-icons/css/weather-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './app_component/weather.component';

// make api call to this api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
const API_key='7bbed3b952498bc85c6a7f8531694004';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      city:undefined,
      country:undefined,
      icon:undefined,
      main:undefined,
      celsius:undefined,
      temp_max:undefined,
      temp_min:undefined,
      descrpition:"",
      error:false
    };  
    this.getWeather();
  }

  getWeather= async() =>{
    const api_call = await fetch(
      'api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}'
      );
    const response = await api_call.json();
    console.log(response);
    
    this.setState({
      city:response.name,
      country:response.sys.country
    })
  };
  render(){
    return(
      <div className="App">
      <Weather 
      city={this.state.city} 
      country={this.state.country} 
      temp_celsius={this.state.celsius}
      temp_max={this.state.temp_max}
      temp_min={this.state.temp_min}
      description={this.state.description}
      />
     </div>
    );
  }
}



export default App;
