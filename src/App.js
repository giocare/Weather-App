import React from "react";

import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"

const API_KEY = "8df99d5dd0165b9f4c51e11fd86e06da";

//inititalize component -- class <chosen name>
class App extends React.Component {

    state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    }

  //create own method
  getWeather = async (e) => {
    //
    e.preventDefault();
    //gets the element with name city - from form
    const city = e.target.elements.city.value;
    // gets the element with name country - from form
    const country = e.target.elements.country.value;
    // making api call
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    //convert the respon to json and assigning it to data
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    }
    else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the value."
      });
    }
  }
  render() {
    return(
      //THIS IS NOT HTML -- it is JSX -- can only return one parent element
      //setting up a prop called get weather which we can acess from form
      <div>
        <div className="wrapper">
          <div className="main">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div class="col-xs-7 form-container">
                <Form getWeather={this.getWeather}/>
                <Weather 
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}
                />

                </div>

          </div>
        </div>
      </div>
    );
  }
};



export default App;