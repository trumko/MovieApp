import React from 'react';
import Header from 'components/Header/Header'
import Search from 'components/Search/Search';

export default function HomePage() {
  return (
    <>
      <Header>
        <Search />
      </Header>
      <div className="mr_content mr_container">
        <h2 className="mr_searchMotto">Find your movie</h2>
      </div>
    </>
  );
}
