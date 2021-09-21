import axios from "axios";
const url =
  "https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=dfa4a29b137df2f74b874084df368e93";
const data = axios.get(url);
export { data };
