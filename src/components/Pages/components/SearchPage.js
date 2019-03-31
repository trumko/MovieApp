import React from "react";
import SearchResults from 'components/SearchResults/SearchResults';
import Header from 'components/Header/Header';
import Search from 'components/Search/Search';

export default function MoviePage({ match }) {
  const { movieId } = match.params;

  return (
    <>
      <Header>
        <Search />
      </Header>
      <div className="mr_content mr_container">
        <p>Search page: {movieId}</p>
        <SearchResults />
      </div>
    </>
  );
}
