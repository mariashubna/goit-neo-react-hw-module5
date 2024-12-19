import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjJmMjQ5YzQ5YTA0MDU0MWZjNzUxYTdmYjlkN2ZjMSIsIm5iZiI6MTcwMTUyNjkwNy44MDA5OTk5LCJzdWIiOiI2NTZiM2Q3YjA4NTliNDAxMWMyMWJmOWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.arIOufMnxLfB5BK3mhHhwgkxFgDKOx1U2DqQLnwi738";

// export const searchPhotos = async (query, page) => {
//   const { data } = await axios("/search/photos", {
//     params: {
//       query,
//       page,
//       per_page: 24,
//     },
//   });
//   return data;
// };

export const searchTrend = async () => {
  const { data } = await axios("trending/movie/day?language=en-US");
  return data;
};
