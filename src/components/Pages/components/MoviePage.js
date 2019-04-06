import React from "react";
import SimilarResults from 'components/SimilarResults/SimilarResults';
import Header from 'components/Header/Header';
import Movie from 'components/Movie/Movie';

export default function MoviePage() {
  return (
    <>
      <Header className="mr_movieHeader">
        <Movie />
      </Header>
      <div className="mr_content mr_container">
        <SimilarResults />
      </div>
    </>
  );
}
