import React from "react";

import './HomeHeader.scss';

export default function HomeHeader() {
  return (
    <div className='mr_search'>
      <h1>Find your movie</h1>
      <form>
        <input
          className="mr_searchInput"
          type="text"
          name="search-query"
          placeholder="search..."
        />
        <hr />
        <button className="mr_searchSubmit" type="submit" name="search">search</button>
        <div className="mr_searchSwitch">
          <span>Search by</span>
          <button type="button">title</button>
          <button type="button">genre</button>
        </div>
      </form>
    </div>
  )
}
