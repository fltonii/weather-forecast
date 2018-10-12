import { combineReducers } from 'redux';
import { WeatherDataReducer } from './reducer_weather_data';

const rootReducer = combineReducers({
  weather: WeatherDataReducer,
});

export default rootReducer;
