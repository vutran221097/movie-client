import API from "../api/apiKey";

const requests = {
  fetchTrending: `${API.MOVIE_URL}/api/movies/trending?api_key=${API.API_KEY}`,
  fetchNetflixOriginals: `${API.MOVIE_URL}/api/movies?api_key=${API.API_KEY}&with_network=123`,
  fetchTopRated: `${API.MOVIE_URL}/api/movies/top-rate?api_key=${API.API_KEY}&language=en-US`,
  fetchActionMovies: `${API.MOVIE_URL}/api/movies/discover?api_key=${API.API_KEY}&genre_id=28`,
  fetchComedyMovies: `${API.MOVIE_URL}/api/movies/discover?api_key=${API.API_KEY}&genre_id=35`,
  fetchHorrorMovies: `${API.MOVIE_URL}/api/movies/discover?api_key=${API.API_KEY}&genre_id=27`,
  fetchRomanceMovies: `${API.MOVIE_URL}/api/movies/discover?api_key=${API.API_KEY}&genre_id=10749`,
  fetchDocumentaries: `${API.MOVIE_URL}/api/movies/discover?api_key=${API.API_KEY}&genre_id=99`,
};

export default requests;
