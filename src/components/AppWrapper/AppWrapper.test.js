import React from 'react';
import { shallow } from 'enzyme';
import AppWrapper from './AppWrapper';

  describe('App component', () => {
    it('starts with a count of 0', () => {
      const wrapper = shallow(<AppWrapper />);
      const text = wrapper.find('p').text();
      expect(text).toEqual('This is test line');
    });
  });
