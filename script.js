//api key from TMDB
const api = "api_key=1e7aa0f454562a37a932b97bbd9e51e5";

//base url of the site
const baseUrl = "https://api.themoviedb.org/3";

//url
const finalUrl = baseUrl + "/discover/movie?sort_by=popularity.desc&" + api;

//img url
const imgUrl = "https://image.tmdb.org/t/p/original/";

//requests for movies data

const requests = {
  fetchPopular: `${baseUrl}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${api}`,
  fetchTrending: `${baseUrl}/trending/all/week?${api}&language=en-US`,
  fetchNetflixOrignals: `${baseUrl}/discover/tv?${api}&with_networks=213`,
  fetchActionMovies: `${baseUrl}/discover/movie?${api}&with_genres=28`,
  fetchComedyMovies: `${baseUrl}/discover/movie?${api}&with_genres=35`,
  fetchHorrorMovies: `${baseUrl}/discover/movie?${api}&with_genres=27`,
  fetchRomanceMovies: `${baseUrl}/discover/movie?${api}&with_genres=35`,
  fetchDocumentaries: `${baseUrl}/discover/movie?${api}&with_genres=27`,
};

