import axios from 'axios';
const API_KEY = 'a86d460826c2746f42427f2778561a20';
export const FETCH_WEATHER = 'FETCH_WEATHER';

const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${API_KEY}`
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url).catch(err => {window.alert('error')});
  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
