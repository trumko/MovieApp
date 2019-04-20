import { movieReducerSelector } from '../mocks/movieReducerSelector'
import { selectMovie, selectSimilarResults } from './index'

describe('Movie Selectors', () => {
  test('should return movie', () => {
    const selected = selectMovie(movieReducerSelector);
    expect(selected).toMatchSnapshot();
  });

  test('should return similar movies', () => {
    const selected = selectSimilarResults(movieReducerSelector);
    expect(selected).toMatchSnapshot();
  });
});
