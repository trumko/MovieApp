import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import FirstType from './FirstType';

describe('FirstType', () => {
  it('renders component with "First" title', () => {
    const output = shallow(
      <FirstType>First title</FirstType>
    );
    expect(output).toMatchSnapshot();
  });
  it('renders component with "Second" title', () => {
    const output = shallow(
      <FirstType>Second title</FirstType>
    );
    expect(output).toMatchSnapshot();
  });
});
