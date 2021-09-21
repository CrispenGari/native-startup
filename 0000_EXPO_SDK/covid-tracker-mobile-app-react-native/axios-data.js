import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export { axios };

export const fetchData = async (country) => {
  const changeable_url = country ? `${url}/countries/${country}` : url;
  try {
    const {
      data: { confirmed, deaths, recovered, lastUpdate },
    } = await axios.get(changeable_url);
    return { confirmed, deaths, recovered, lastUpdate };
  } catch (error) {
    return error;
  }
};
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    console.log(data);
    return data.map(({ confirmed, deaths, reportDate: date }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date,
    }));
  } catch (e) {
    throw e;
  }
};
export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    // We only need country names
    return countries.map((country) => country);
  } catch (e) {
    console.log(e);
  }
};
