import React from "react";


const Weather = props => (
			// upon button press if city & country exist -> print out Location
		<div className="weather__info">
			{  
				props.city &&  props.country && <p className="weather__key">Location: 
					<span className="weather__value"> {  props.city }, {  props.country }</span>
				</p> 
			}
			{  
				props.city &&  props.country && <p className="weather__key">Temperature: 
					<span className="weather__value"> {  props.temperature }°F</span>
				</p> 
			}
			{  
				props.city &&  props.country && <p className="weather__key">Humidity: 
					<span className="weather__value"> {  props.humidity }</span>
				</p> 
			}
			{  
				props.city &&  props.country && <p className="weather__key">Conditions: 
					<span className="weather__value"> {  props.description }</span>
				</p> 
			}
			{  
				props.error && <p className="weather__error">{  props.error }</p> 
			}		
		</div> 

);

export default Weather;