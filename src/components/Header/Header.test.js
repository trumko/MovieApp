import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

describe('Header', () => {
  it('should be rendered correctly with custom clasName', () => {
    const component = shallow(<Header className="testClass" />);

    expect(component).toMatchSnapshot();
  });
});
