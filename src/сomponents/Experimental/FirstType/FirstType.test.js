import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import FirstType from './FirstType';

configure({adapter: new Adapter()});

describe('FirstType', () => {
  it('should render correctly', () => {
    const output = shallow(
      <FirstType>First title</FirstType>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
  it('should render correctly', () => {
    const output = shallow(
      <FirstType>Second title</FirstType>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
