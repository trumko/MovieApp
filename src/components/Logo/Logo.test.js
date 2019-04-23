import React from 'react'
import { shallow } from 'enzyme'
import Logo from './Logo'

describe('Logo', () => {
  it('should be rendered correctly', () => {
    const component = shallow(<Logo />);

    expect(component).toMatchSnapshot();
  });
});
