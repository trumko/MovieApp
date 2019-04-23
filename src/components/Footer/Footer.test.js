import React from 'react'
import { shallow } from 'enzyme'
import Footer from './Footer'

describe('Footer', () => {
  it('should be rendered correctly', () => {
    const component = shallow(<Footer />);

    expect(component).toMatchSnapshot();
  });
});
