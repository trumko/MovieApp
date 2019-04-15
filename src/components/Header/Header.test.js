import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

describe('Header', () => {
  it('Header with custom clasName should be rendered correctly', () => {
    const component = shallow(<Header className="testClass" />);

    expect(component).toMatchSnapshot();
  });
});
