import axios from "axios";

const API_KEY = "8ff2d269333b454fa928026b6304a231";
const countries_url = "http://country.io/names.json";

// export const countrieslist = async () => {
//   return await axios.get(countries_url);
// };

export const topHeadlineHome = async (country) => {
  let topheadline_home = `https://newsapi.org/v2/sources?language=en&apiKey=${API_KEY}`;
  if (country) {
    topheadline_home = `https://newsapi.org/v2/sources?language=en&country=${country}&apiKey=${API_KEY}`;
  }
  const {
    data: { sources },
  } = await axios.get(topheadline_home);
  return sources;
};
export const topHeadlineBusiness = async (country) => {
  let topheadline_country = `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=${API_KEY}`;
  if (country) {
    topheadline_country = `https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=${API_KEY}`;
  }
  const {
    data: { articles },
  } = await axios.get(topheadline_country);

  return articles;
};
export const topHeadlineSport = async () => {
  const sports_url = `https://newsapi.org/v2/everything?q=sport&apiKey=${API_KEY}`;
  const {
    data: { articles },
  } = await axios.get(sports_url);
  return articles;
};

export const topHeadlineSources = async () => {
  let source = `https://newsapi.org/v2/sources?apiKey=${API_KEY}`;
  const {
    data: { sources },
  } = await axios.get(source);
  return sources;
};

export const topHeadlinePerson = async (person) => {
  let topheadline_person = `https://newsapi.org/v2/top-headlines?q=trump&apiKey=${API_KEY}`;
  if (person) {
    topheadline_person = `https://newsapi.org/v2/top-headlines?q=${person}&apiKey=${API_KEY}`;
  }
  const {
    data: { articles },
  } = await axios.get(topheadline_person);
  return articles;
};

export const topHeadlineCountry = async (country) => {
  let topheadline_country = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
  if (country) {
    topheadline_country = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`;
  }
  const {
    data: { articles },
  } = await axios.get(topheadline_country);
  return articles;
};

// everything
// const bitcoin = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${API_KEY}`;
// const apple = `https://newsapi.org/v2/everything?q=apple&from=2020-08-20&to=2020-08-20&sortBy=popularity&apiKey=${API_KEY}`;
// const techcrunch = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${API_KEY}`;

// // topheadlines

// const topheadline_source = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`;
