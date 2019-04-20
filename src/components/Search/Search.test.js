import React from "react"
import { shallow } from 'enzyme'
import { Search } from "./Search"

describe("Search", () => {
  test("should input field work correctly", () => {
    const component = shallow(<Search />);
    component.find('.mr_searchInput').simulate('change', {currentTarget: {value: 'This is movie title'}});
    expect(component.state('inputQuery')).toBe('This is movie title');
    expect(component).toMatchSnapshot();
  });

  test("should switch search types", () => {
    const component = shallow(<Search />);
    component.find('.mr_searchSwitch button[data-search-type="genres"]').simulate('click');
    expect(component.state().type).toBe("genres");
    component.find('.mr_searchSwitch button[data-search-type="title"]').simulate('click');
    expect(component.state().type).toBe("title");
  });
});
