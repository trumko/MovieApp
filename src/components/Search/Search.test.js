import React from "react"
// import { create } from "react-test-renderer"
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

// import React, { Component } from "react";
// import { withRouter } from 'react-router-dom'
// import classnames from 'classnames'
//
// import './Search.scss';
//
// export class Search extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       type: 'title',
//       inputQuery: '',
//     };
//   }
//
//   setSearchByType = (type) => {
//     this.setState({ type: type });
//   }
//
//   onInputChange = (e) => {
//     this.setState({
//       inputQuery: e.currentTarget.value
//     });
//   }
//
//   onFormSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.inputQuery) {
//       this.props.history.push(`/search?search=${this.state.inputQuery}&genre=${this.state.type}`);
//     }
//   }
//
//   render() {
//     return (
//       <div className='mr_search'>
//         <h1>Find your movie</h1>
//         <form onSubmit={this.onFormSubmit}>
//           <input
//             className="mr_searchInput"
//             type="text"
//             name="search-query"
//             placeholder="search..."
//             value={this.state.inputQuery}
//             onChange={this.onInputChange}
//           />
//           <hr />
//           <button className="mr_searchSubmit" type="submit" name="search">search</button>
//           <div className="mr_searchSwitch">
//             <span>Search by</span>
//             <button
//               type="button"
//               className={classnames({'mr_isActiveType': this.state.type === 'title'})}
//               onClick={() => this.setSearchByType('title')}
//             >
//               title
//             </button>
//             <button
//               type="button"
//               className={classnames({'mr_isActiveType': this.state.type === 'genres'})}
//               onClick={() => this.setSearchByType('genres')}
//             >
//               genre
//             </button>
//           </div>
//         </form>
//       </div>
//     )
//   }
// }
//
// export default withRouter(Search)
