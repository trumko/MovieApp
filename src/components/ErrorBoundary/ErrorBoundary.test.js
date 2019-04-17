import React from 'react'
import { shallow } from 'enzyme'
import ErrorBoundary from './ErrorBoundary'

describe('ErrorBoundary', () => {
  it('should render the warning if state.hasError is true', () => {
    const component = shallow(
      <ErrorBoundary className="testClass">
        <p>Children components</p>
      </ErrorBoundary>
    );
    component.setState({ hasError: true });
    expect(component).toMatchSnapshot();
  });

  it('should render children if state.hasError is false', () => {
    const component = shallow(
      <ErrorBoundary className="testClass">
        <p>Children components</p>
      </ErrorBoundary>
    );
    component.setState({ hasError: false });
    expect(component).toMatchSnapshot();
  });
});
