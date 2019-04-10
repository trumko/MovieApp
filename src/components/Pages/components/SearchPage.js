import React from "react";
import SearchResults from 'components/SearchResults/SearchResults';
import Header from 'components/Header/Header';
import Search from 'components/Search/Search';

export default function MoviePage() {
  return (
    <>
      <Header>
        <Search />
      </Header>
      <div className="mr_content mr_container">
        <SearchResults />
      </div>
    </>
  );
}
