import React from 'react'
import { shallow } from 'enzyme'
import MoviePreview from './MoviePreview'

describe('MoviePreview', () => {
  it('MoviePreview with custom Movie should be rendered correctly', () => {
    const component = shallow(
      <MoviePreview
        title="Isle of Dogs"
        date="2018-03-23"
        genres={["Adventure", "Comedy", "Animation"]}
        posterUrl="https://image.tmdb.org/t/p/w500/c0nUX6Q1ZB0P2t1Jo6EeFSVnOGQ.jpg"
        id="399174"

      />
    );
    expect(component).toMatchSnapshot();
  });
});
