import React from 'react';
import Header from 'components/Header/Header'
import Search from 'components/Search/Search';

export default function NotFoundPage() {
  return (
    <>
      <Header>
        <Search />
      </Header>
      <div className="mr_content mr_container">
        <h2 className="mr_notFoundMotto">Oooooppsss!</h2>
        <p className="mr_notFoundExplanation">We can&apos;t seem to find the page you&apos;re looking for</p>
      </div>
    </>
  );
}
