import { getMovieYear, shuffle } from './helpers';

describe('getMovieYear', () => {
  it('should properly extract the year from 2018-03-30', () => {
    expect(getMovieYear('2018-03-30')).toMatchSnapshot();
  });
  it('should properly extract the year from 2019-01-31', () => {
    expect(getMovieYear('2019-01-31')).toMatchSnapshot();
  });
})

describe('shuffle', () => {
  it('should return the array', () => {
    expect(Array.isArray(shuffle([1, 2, 3]))).toBe(true);
  });
})
