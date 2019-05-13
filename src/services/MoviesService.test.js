import { GLOBAL_CONFIG } from '../config/constants';
import MoviesService from './MoviesService';

describe('MoviesService', () => {
  const originalFetch = global.fetch;
  const { apiKey, endpoint } = GLOBAL_CONFIG;
  let moviesService;

  beforeEach(() => {
    // Mock the global fetch so we can
    // check that it was invoked
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => ({
          results: []
        })
      })
    );
    // Arrange instance
    moviesService = new MoviesService(apiKey, endpoint);
  });

  afterEach(() => {
    // Reset mock implementation to original value
    global.fetch = originalFetch;
  });

  test('should have endpoint and apiKey defined', () => {
    expect(moviesService.endpoint).toBeDefined();
    expect(moviesService.apiKey).toBeDefined();
  });

  test('should retrieve movies from api endpoint', done => {
    // Arrange, Act
    moviesService.getMovies('search term').then(res => {
      // Assert
      expect(Array.isArray(res)).toBe(true);
      done();
    });
  });

  // TODO should handle error case when movies cannot be retrieved
});
