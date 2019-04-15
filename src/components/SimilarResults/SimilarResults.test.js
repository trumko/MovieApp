import React from 'react'
import { shallow } from 'enzyme'
import { SimilarResults } from './SimilarResults'

const mockedMovies = [
  {
    "id": 308266,
    "title": "War Dogs",
    "tagline": "An American dream",
    "vote_average": 6.8,
    "vote_count": 1773,
    "release_date": "2016-08-17",
    "poster_path": "https://image.tmdb.org/t/p/w500/wJXku1YhMKeuzYNEHux7XtaYPsE.jpg",
    "overview": "Based on the true story of two young men, David Packouz and Efraim Diveroli, who won a $300 million contract from the Pentagon to arm America's allies in Afghanistan.",
    "budget": 40000000,
    "revenue": 86234523,
    "genres": [
      "Comedy",
      "Crime",
      "Drama"
    ],
    "runtime": 114
  },
  {
    "id": 553,
    "title": "Dogville",
    "tagline": "A quiet little town not far from here.",
    "vote_average": 7.7,
    "vote_count": 823,
    "release_date": "2003-05-19",
    "poster_path": "https://image.tmdb.org/t/p/w500/g1xLrof2RVgtHBB4fLvR5Xr8l5x.jpg",
    "overview": "A barren soundstage is stylishly utilized to create a minimalist small-town setting in which a mysterious woman named Grace hides from the criminals who pursue her. The town is two-faced and offers to harbor Grace as long as she can make it worth their effort, so Grace works hard under the employ of various townspeople to win their favor. Tensions flare, however, and Grace's status as a helpless outsider provokes vicious contempt and abuse from the citizens of Dogville.",
    "budget": 10000000,
    "revenue": 16680836,
    "genres": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "runtime": 178
  }
]

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
