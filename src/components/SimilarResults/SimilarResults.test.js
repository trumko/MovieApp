import React from 'react'
import { shallow } from 'enzyme'
import { SimilarResults } from './SimilarResults'
import { mockedMovies } from './mocks/movieList'

describe('SimilarResults', () => {
  it('SimilarResults without Movies should be rendered correctly', () => {
    const component = shallow(
      <SimilarResults similarResults={undefined} />
    );

    expect(component).toMatchSnapshot();
  });

  it('SimilarResults with Movies should be rendered correctly', () => {
    const component = shallow(
      <SimilarResults similarResults={mockedMovies} />
    );

    expect(component).toMatchSnapshot();
  });
});
