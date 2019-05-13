export default class MoviesService {
  constructor(apiKey, endpoint) {
    this.endpoint = endpoint;
    this.apiKey = apiKey;
  }

  // Hit endpoint for movie data
  getMovies(search) {
    const encodedSearch = encodeURIComponent(search);
    return fetch(
      `${this.endpoint}?api_key=${this.apiKey}&query=${encodedSearch}`
    )
      .then(res => res.json())
      .then(({ results }) => results);
  }
}
