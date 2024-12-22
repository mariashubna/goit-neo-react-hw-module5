import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjJmMjQ5YzQ5YTA0MDU0MWZjNzUxYTdmYjlkN2ZjMSIsIm5iZiI6MTcwMTUyNjkwNy44MDA5OTk5LCJzdWIiOiI2NTZiM2Q3YjA4NTliNDAxMWMyMWJmOWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.arIOufMnxLfB5BK3mhHhwgkxFgDKOx1U2DqQLnwi738";

const options = {
  params: {
    language: "en-EN",
    include_adult: false,
  },
};

export const searchTrend = async () => {
  const { data } = await axios("trending/movie/day", options);
  return data;
};

export const searchFilm = async (query) => {
  options.params.query = query;
  const { data } = await axios("search/movie", options);
  return data;
};

export const singleFilm = async (movieId) => {
  const { data } = await axios(`movie/${movieId}`, options);
  return data;
};

export const creditsFilm = async (movieId) => {
  const { data } = await axios(`movie/${movieId}/credits`, options);
  return data;
};

export const reviewsFilm = async (movieId) => {
  const { data } = await axios(`movie/${movieId}/reviews`);
  console.log(data);
  return data;
};
