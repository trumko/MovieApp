import React from 'react'
import { shallow } from 'enzyme'
import ErrorBoundary from './ErrorBoundary'

describe('ErrorBoundary', () => {
  it('should render the warning when an error occurs', () => {
    const component = shallow(
      <ErrorBoundary className="testClass">
        <p>Children components</p>
      </ErrorBoundary>
    );
    component.setState({ hasError: true });
    expect(component).toMatchSnapshot();
  });

  it('should render the regular content when there is no error', () => {
    const component = shallow(
      <ErrorBoundary className="testClass">
        <p>Children components</p>
      </ErrorBoundary>
    );
    component.setState({ hasError: false });
    expect(component).toMatchSnapshot();
  });
});
