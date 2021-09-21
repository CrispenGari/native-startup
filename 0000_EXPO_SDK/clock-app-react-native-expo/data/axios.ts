import axios from "axios";
const inistance = axios.create({
  baseURL: "https://samples.openweathermap.org/data/2.5/",
});
export default inistance;
