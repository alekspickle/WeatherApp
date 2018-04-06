import React from 'react';
import { Ul, Li, Img, Text } from '../styles';

//One day weather block with
//@temperature - average temperature.
//@wind - the wind speed.
export default class CityWeather extends React.Component {


    render() {

        const city = this.props.current;
        const cityName = city.name ? city.name : this.props.input;
        const temperature = city.main ? Math.round(city.main.temp - 273) : '';
        const wind = city.wind ? city.wind.speed : '';
        const icon = city.weather ? city.weather[0].icon : '';
        const description = city.weather
            ? city.weather[0].description
            : 'Use only English characters and correct city names, please.';

        return (

            <Ul>
                <Li>{cityName} <br />
                    <Img src={`https://openweathermap.org/img/w/${icon}.png`} alt="icon" /> <br />
                    {description}
                </Li>
                <Text> Temperature: {temperature}&#176;C <br />
                    Wind speed: {wind} m/s
                </Text>
            </Ul>

        );
    }
}