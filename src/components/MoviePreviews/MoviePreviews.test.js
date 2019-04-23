import React from 'react'
import { shallow } from 'enzyme'
import MoviePreviews from './MoviePreviews'
import { mockedMovies } from './mocks/movieList'

describe('MoviePreviews', () => {
  it('without Movies should be rendered correctly', () => {
    const component = shallow(
      <MoviePreviews movies={null} />
    );

    expect(component).toMatchSnapshot();
  });

  it('with Movies should be rendered correctly', () => {
    const component = shallow(
      <MoviePreviews movies={mockedMovies} />
    );

    expect(component).toMatchSnapshot();
  });
});
